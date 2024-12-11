import BlogForm from '../components/BlogForm'
import BlogList from '../components/BlogList'

const Blog = ({ blogs }) => {
  return (
    <div className="mt-28">
      {/* <BlogForm /> */}
      <BlogList blogs={blogs} />
    </div>
  )
}
export default Blog
