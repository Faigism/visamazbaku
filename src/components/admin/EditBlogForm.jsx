import React, { useState, useEffect } from 'react'
import { uploadImageToFirebase } from '../UploadImageToFirebase'

const EditBlogForm = ({ blog, onUpdate, onCancel }) => {
  // Başlanğıc dəyərləri ilə form məlumatlarını set et
  const [type, setType] = useState(blog?.type || '')
  const [title, setTitle] = useState(blog?.title || '')
  const [image, setImage] = useState(blog?.image || '')
  const [summary, setSummary] = useState(blog?.summary || '')
  const [date, setDate] = useState(blog?.date || '')
  const [blocks, setBlocks] = useState(blog?.blocks || [])
  const [isUploading, setIsUploading] = useState(false)

  useEffect(() => {
    if (blog) {
      setType(blog.type || '')
      setTitle(blog.title || '')
      setImage(blog.image || '')
      setSummary(blog.summary || '')
      setDate(blog.date || '')
      setBlocks(blog.blocks || [])
    }
  }, [blog])

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

  const addBlock = (type, content) => {
    if (!content.trim()) return

    const newBlock =
      type === 'image'
        ? { type, url: content } // Şəkil üçün `url`
        : { type, content } // Mətn üçün `content`

    setBlocks([...blocks, newBlock])
  }

  const editBlock = (index, newContent) => {
    setBlocks(
      blocks.map((block, i) =>
        i === index ? { ...block, content: newContent } : block
      )
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const confirmation = window.confirm(
      'Düzəliş etmək istədiyinizdən əminsiniz?'
    )

    if (!confirmation) {
      return
    }

    const updatedBlog = {
      ...blog,
      type,
      title,
      image,
      summary,
      date,
      blocks,
    }
    onUpdate(updatedBlog) // Blogu yenilə
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-gray-100 rounded-lg">
      {/* Blog Növü */}
      <div className="mb-4">
        <label className="block text-sm font-medium">Blog Növü</label>
        <select
          value={type} // `type` state burda istifadə olunur
          onChange={(e) => setType(e.target.value)}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Seçin</option>
          <option value="country">Country</option>
          <option value="visa">Visa</option>
        </select>
      </div>

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
            {block.type === 'text' && (
              <textarea
                value={block.content}
                onChange={(e) => editBlock(index, e.target.value)}
                className="w-full p-2 border rounded"
              />
            )}
            {block.type === 'image' && (
              <>
                <img
                  src={block.url}
                  alt={`Şəkil ${index + 1}`}
                  className="h-auto mx-auto w-30"
                />
                <input
                  type="text"
                  value={block.url}
                  onChange={(e) => editBlock(index, e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </>
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
        {image && (
          <div className="mt-2">
            <p>Hazırkı Şəkil:</p>
            <img src={image} alt="Uploaded" className="h-32" />
          </div>
        )}
        <label className="block text-sm font-medium mt-4">
          Yeni Şəkil Yüklə
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload} // Yuxarıdakı funksiyanı burda istifadə edirik
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Qısa Mətn */}
      <textarea
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Blogun qısa məzmununu yazın"
      />

      {/* Tarix */}
      <div className="mb-4">
        <label className="block text-sm font-medium">Tarix</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Blogu Yenilə düyməsi */}
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Blogu Yenilə
      </button>

      {/* Cancel düyməsi */}
      <button
        type="button"
        onClick={onCancel}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-4"
      >
        Ləğv Et
      </button>
    </form>
  )
}

export default EditBlogForm
