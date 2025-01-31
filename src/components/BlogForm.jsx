import { useState } from 'react'
import { addCountryBlog, addVisaBlog } from '../server/firebaseFunctions'
import { uploadImageToFirebase } from './UploadImageToFirebase'

const BlogForm = () => {
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [blocks, setBlocks] = useState([])
  const [image, setImage] = useState('')
  const [type, setType] = useState('')
  const [date, setDate] = useState('')
  const [countryCode, setCountryCode] = useState('')
  const [isUploading, setIsUploading] = useState(false)

  const handleImageUpload = async (event) => {
    const file = event.target.files[0]
    if (!file) return
    try {
      setIsUploading(true) // Yüklənmə statusunu göstərmək üçün
      const imageUrl = await uploadImageToFirebase(file) // Şəkli yükləyib URL-ni alırıq
      setImage(imageUrl) // URL-ni `image` state-ə təyin edirik
      setIsUploading(false)
    } catch (error) {
      console.error('Şəkil yüklənərkən xəta baş verdi:', error)
      setIsUploading(false)
    }
  }

  // Blok əlavə etmək funksiyası
  const addBlock = (type, content) => {
    if (!content.trim()) return
    const newBlock =
      type === 'image'
        ? { type, url: content } // Şəkil üçün `url`
        : { type, text: content } // Mətn üçün `text`

    setBlocks([...blocks, newBlock])
  }

  // Blog əlavə etmək funksiyası
  const handleAddBlog = async (e) => {
    e.preventDefault()

    if (!type) {
      alert('Blog növünü seçin!')
      return
    }
    if (!date) {
      alert('Zəhmət olmasa, tarix seçin!')
      return
    }

    try {
      const blogData = {
        type,
        title,
        summary,
        blocks,
        image,
        countryCode,
        date: new Date(date).toLocaleDateString('az-AZ'),
      }

      // Növə əsasən fərqli Firebase funksiyası çağırılır
      if (type === 'country') {
        const newBlogId = await addCountryBlog(blogData)
        alert(`Country blog successfully added! ID: ${newBlogId}`)
      } else if (type === 'visa') {
        const newBlogId = await addVisaBlog(blogData)
        alert(`Visa blog successfully added! ID: ${newBlogId}`)
      }

      // Formu təmizləmək
      setTitle('')
      setSummary('')
      setBlocks([])
      setImage('')
      setType('')
      setDate('')
      setCountryCode('')
    } catch (error) {
      console.error('Error adding blog:', error)
      alert('Failed to add blog')
    }
  }

  return (
    <form onSubmit={handleAddBlog} className="p-6 bg-gray-100 rounded-lg">
      {/* Blog növü */}
      <div className="mb-4">
        <label className="block text-sm font-medium">Blog Növü</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Seçin</option>
          <option value="country">Country</option>
          <option value="visa">Visa</option>
        </select>
      </div>

      <input
        value={countryCode}
        onChange={(e) => setCountryCode(e.target.value)}
        placeholder="məsələn: italy-visa"
      ></input>

      {/* Başlıq */}
      <div className="mb-4">
        <label className="block text-sm font-medium">Başlıq</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      {/* Dinamik bloklar */}
      <div className="mb-4">
        <label className="block text-sm font-medium">
          Mətn və ya Şəkil Əlavə Et
        </label>
        <textarea
          placeholder="Mətn əlavə edin (Enter basın)"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              addBlock('text', e.target.value)
              e.target.value = ''
            }
          }}
          className="w-full p-2 mb-2 border rounded"
        ></textarea>
        <input
          type="text"
          placeholder="Şəkil URL-i əlavə edin (Enter basın)"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
              addBlock('image', e.target.value)
              e.target.value = ''
            }
          }}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Əlavə edilmiş blokların siyahısı */}
      <div className="mb-4 bg-white p-4 border rounded">
        <h3 className="text-lg font-medium">Məzmun:</h3>
        {blocks.map((block, index) => (
          <div key={index} className="mb-4">
            {block.type === 'text' && <p className="mb-2">{block.content}</p>}
            {block.type === 'image' && (
              <img
                src={block.url}
                alt={`Şəkil ${index + 1}`}
                className="h-auto mx-auto w-30"
              />
            )}
          </div>
        ))}
      </div>

      {/* Şəkil və Tarix */}
      <div className="mb-4">
        <label className="block text-sm font-medium">Şəkil URL'i</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        {isUploading && <p>Şəkil yüklənir...</p>}
        {image && <img src={image} alt="Uploaded" className="mt-2 h-32" />}
        <label className="block text-sm font-medium">Şəkil Yüklə</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full p-2 border rounded"
        />
      </div>

      <textarea
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Blogun qısa məzmununu yazın"
      />
      <div className="mb-4">
        <label className="block text-sm font-medium">Tarix</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Blog yarat düyməsi */}
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Bloq Yarat
      </button>
    </form>
  )
}

export default BlogForm
