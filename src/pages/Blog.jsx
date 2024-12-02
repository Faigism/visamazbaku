import { useState } from 'react'
import BlogForm from '../components/BlogForm'
import BlogList from '../components/BlogList'
import Pagination from '../components/Pagination'

const Blog = ({ blogs }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const blogsPerPage = 6

  const totalPages = Math.ceil(blogs.length / blogsPerPage)

  const indexOfLastBlog = currentPage * blogsPerPage
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="mt-28">
      <BlogForm />
      <BlogList blogs={currentBlogs} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  )
}
export default Blog
