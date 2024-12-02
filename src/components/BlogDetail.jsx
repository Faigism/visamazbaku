import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import db from '../server/firebase'
import HandleWp from './RedirectContact'

const BlogDetail = ({ blogs, setBlogs }) => {
  const { id } = useParams()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogRef = doc(db, 'blogs', id)
        const blogSnap = await getDoc(blogRef)

        if (blogSnap.exists()) {
          setBlog({ id: blogSnap.id, ...blogSnap.data() })
        } else {
          setError(true)
        }
      } catch (error) {
        console.error('Error fetching blog:', error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchBlog()
  }, [id])

  if (loading) {
    return <p>Yükleniyor...</p>
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold mb-4">404 - Blog Bulunamadı</h2>
        <p className="mb-4">
          Aradığınız blog mevcut değil veya yanlış bir URL girdiniz.
        </p>
        <Link to="/blog" className="text-blue-500 hover:underline">
          Blog sayfasına geri dön
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-8 mt-28">
      <h2 className="text-2xl font-bold mb-4 text-cyan-800">{blog.title}</h2>
      <p className="text-gray-400 mb-4">
        {blog.source} • {blog.date}
      </p>
      <div className="flex flex-col items-center mb-8">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full max-w-3xl h-auto rounded-lg mb-4 object-cover"
          style={{ maxHeight: '500px' }}
        />
      </div>

      <div className="text-gray-700 text-justify text-base md:text-lg px-4 leading-relaxed mb-4 max-w-2xl mx-auto whitespace-pre-line">
        {blog.excerpt}
      </div>

      <div className="text-center pt-12">
        <HandleWp />
      </div>
    </div>
  )
}

export default BlogDetail
