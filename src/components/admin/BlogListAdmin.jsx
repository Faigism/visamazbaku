import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import BlogItemAdmin from './BlogItemAdmin'

const BlogListAdmin = ({ blogs, onDelete, onEdit }) => {
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
        <h3 className="text-2xl lg:text-3xl font-semibold text-blue-600 mb-4">
          Maraqlı səyahətlər
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {visibleCountryBlogs.map((country) => (
            <BlogItemAdmin
              key={country.id}
              blog={country}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
        {countryBlogs.length > 3 && (
          <div className="text-center mt-4">
            <button
              onClick={() => setShowAllCountryBlogs(!showAllCountryBlogs)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              {showAllCountryBlogs ? 'Daha Az Göstər' : 'Daha Çox Göstər'}
            </button>
          </div>
        )}
      </div>

      {/* Visa Blogs Bölməsi */}
      <div>
        <h3 className="text-2xl lg:text-3xl font-semibold text-green-600 mb-4">
          Vizalar haqqında
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {visibleVisaBlogs.map((visa) => (
            <BlogItemAdmin
              key={visa.id}
              blog={visa}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
        {visaBlogs.length > 3 && (
          <div className="text-center mt-4">
            <button
              onClick={() => setShowAllVisaBlogs(!showAllVisaBlogs)}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              {showAllVisaBlogs ? 'Daha Az Göstər' : 'Daha Çox Göstər'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default BlogListAdmin
