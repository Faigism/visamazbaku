import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import db from '../server/firebase'

const BlogForm = () => {
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [image, setImage] = useState('')
  const [source, setSource] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'blogs'), {
        title,
        excerpt,
        image,
        source,
        date,
      })
      alert('Bloq uğurla yaradıldı')
    } catch (error) {
      console.error('Bloq yaradılarkən xəta baş verdi:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-gray-100 rounded-lg">
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
      <div className="mb-4">
        <label className="block text-sm font-medium">Açıqlama</label>
        <textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          className="w-full p-2 border rounded"
          required
        ></textarea>
      </div>
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
