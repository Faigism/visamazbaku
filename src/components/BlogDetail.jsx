import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import db from '../server/firebase'
import HandleWp from './RedirectContact'
import Loading from './Loading'

const BlogDetail = ({ blogs }) => {
  const { id } = useParams()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    // `blogs`-dan spesifik blogu tapırıq
    const allBlogs = [...blogs.countryBlogs, ...blogs.visaBlogs]
    const foundBlog = allBlogs.find((blog) => blog.id === id)
    setBlog(foundBlog)
    setLoading(false)
  }, [blogs, id])

  if (loading) {
    return <Loading />
  }

  if (error || !blog) {
    return <p>Bloq tapılmadı.</p>
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-8 mt-28">
      <h2 className="text-2xl font-bold mb-4 text-cyan-800">{blog.title}</h2>
      <p className="text-gray-400 mb-4">
        {new Date(blog.date).toLocaleDateString()}
      </p>
      <div className="flex flex-col items-center mb-8">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full max-w-3xl h-auto rounded-lg mb-4 object-cover"
          style={{ maxHeight: '500px' }}
        />
      </div>

      <div className="text-gray-700 text-justify text-base md:text-lg px-4 leading-relaxed mb-4 max-w-2xl mx-auto whitespace-pre-line p-4">
        {blog.summary}
      </div>

      {blog.blocks &&
        blog.blocks.map((block, index) => (
          <div key={index} className="mb-4">
            {block.type === 'text' && (
              <p className="text-gray-700 text-justify text-base md:text-lg px-4 leading-relaxed mb-4 max-w-2xl mx-auto whitespace-pre-line p-4">
                {block.text}
              </p>
            )}
            {block.type === 'image' && (
              <img
                src={block.url}
                alt={`Blok Şəkil ${index + 1}`}
                className="w-full max-w-xl h-auto rounded-lg mx-auto"
              />
            )}
          </div>
        ))}

      <div className="text-center pt-12">
        <HandleWp />
      </div>
    </div>
  )
}

export default BlogDetail
