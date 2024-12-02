import { useTranslation } from 'react-i18next'
import BlogItem from './BlogItem'

const BlogList = ({ blogs }) => {
  const { t } = useTranslation()

  return (
    <section className="container mx-auto py-1 px-4 md:px-8">
      <div className="text-center mb-12">
        <h2 className="text-[#61cad0] text-3xl lg:text-4xl font-bold mb-4">
          {t('Blog')}
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  )
}

export default BlogList
