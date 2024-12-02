import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import db from '../server/firebase'

const BlogForm = () => {
  const [title, setTitle] = useState('')
  const [blocks, setBlocks] = useState([]) // Mətn və şəkil blokları
  const [image, setImage] = useState('')
  const [source, setSource] = useState('')
  const [date, setDate] = useState('')

  // Yeni mətn və ya şəkil bloku əlavə et
  const addBlock = (type, content) => {
    if (!content.trim()) return
    setBlocks([...blocks, { type, content }])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'blogs'), {
        title,
        content: blocks, // Mətn və şəkil bloklarını göndəririk
        image,
        source,
        date,
      })
      alert('Bloq uğurla yaradıldı!')
      setTitle('')
      setBlocks([])
      setImage('')
      setSource('')
      setDate('')
    } catch (error) {
      console.error('Bloq yaradılarkən xəta baş verdi:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-gray-100 rounded-lg">
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

      {/* Dinamik Bloklar Əlavə Et */}
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

      {/* Əlavə Edilmiş Bloklar */}
      <div className="mb-4 bg-white p-4 border rounded">
        <h3 className="text-lg font-medium">Məzmun:</h3>
        {blocks.map((block, index) => (
          <div key={index} className="mb-4">
            {block.type === 'text' && <p className="mb-2">{block.content}</p>}
            {block.type === 'image' && (
              <img
                src={block.content}
                alt={`Şəkil ${index + 1}`}
                className="w-full h-auto mx-auto"
              />
            )}
          </div>
        ))}
      </div>

      {/* Şəkil və Qaynaq */}
      <div className="mb-4">
        <label className="block text-sm font-medium">Şəkil URL'i</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Qaynaq</label>
        <input
          type="text"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Tarix</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Bloq Yarat Düyməsi */}
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
