import { useTranslation } from 'react-i18next'
import BlogItem from './BlogItem'
import { useState } from 'react'

const BlogList = ({ blogs }) => {
  const { countryBlogs, visaBlogs } = blogs
  const { t } = useTranslation()

  // State-lər: yalnız 3 blog göstərmək üçün
  const [showAllCountryBlogs, setShowAllCountryBlogs] = useState(false)
  const [showAllVisaBlogs, setShowAllVisaBlogs] = useState(false)

  // Görünəcək bloqların sayını tənzimləyirik
  const visibleCountryBlogs = showAllCountryBlogs
    ? countryBlogs
    : countryBlogs.slice(0, 3)
  const visibleVisaBlogs = showAllVisaBlogs ? visaBlogs : visaBlogs.slice(0, 3)

  return (
    <section className="container mx-auto py-1 px-4 md:px-8">
      {/* Başlıq */}
      <div className="text-center mb-12">
        <h2 className="text-[#61cad0] text-3xl lg:text-4xl font-bold mb-4">
          {t('Blog')}
        </h2>
      </div>

      {/* Countries Bölməsi */}
      <div className="mb-8">
        <h3 className="text-2xl lg:text-3xl font-semibold text-[#1a6469] mb-4 italic">
          Maraqlı səyahətlər
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {visibleCountryBlogs.map((country) => (
            <BlogItem key={country.id} blog={country} />
          ))}
        </div>
        {countryBlogs.length > 3 && (
          <div className="text-center mt-4">
            <button
              onClick={() => setShowAllCountryBlogs(!showAllCountryBlogs)}
              className="px-4 py-2 bg-[#61cad0] text-white rounded-md hover:bg-[#439fa4]"
            >
              {showAllCountryBlogs ? 'Daha Az Göstər' : 'Daha Çox Göstər'}
            </button>
          </div>
        )}
      </div>

      {/* Visa Blogs Bölməsi */}
      <div>
        <h3 className="text-2xl lg:text-3xl font-semibold text-[#1a6469] mb-4 italic">
          Vizalar haqqında
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {visibleVisaBlogs.map((blog) => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </div>
        {visaBlogs.length > 3 && (
          <div className="text-center mt-4">
            <button
              onClick={() => setShowAllVisaBlogs(!showAllVisaBlogs)}
              className="px-4 py-2 bg-[#61cad0] text-white rounded-md hover:bg-[#439fa4]"
            >
              {showAllVisaBlogs ? 'Daha Az Göstər' : 'Daha Çox Göstər'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default BlogList
