import BlogItem from './BlogItem'

const BlogList = ({ blogs }) => {
  return (
    <section className="container mx-auto py-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold mb-8 text-cyan-800">Bloqlar</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  )
}

export default BlogList
