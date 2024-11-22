import React from 'react'
import { Link } from 'react-router-dom'

const BlogItem = ({ blog }) => {
  const contentPreview =
    blog.excerpt.length > 200
      ? blog.excerpt.slice(0, 200) + '...'
      : blog.excerpt
  return (
    <Link to={`/blog/${blog.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-cyan-800">
            {blog.title}
          </h3>
          <p className="text-gray-700 mb-4">{contentPreview}</p>
          <div className="text-gray-500 text-sm">
            {blog.source} • {blog.date}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
