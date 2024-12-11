import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import db from '../server/firebase'

const PopularCountry = () => {
  const { t } = useTranslation()
  const [visaBlogs, setVisaBlogs] = useState([])

  useEffect(() => {
    const fetchVisaBlogs = async () => {
      try {
        const snapshot = await getDocs(
          collection(db, 'blogs', 'visaBlogs', 'entries')
        )
        const blogs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setVisaBlogs(blogs)
      } catch (error) {
        console.error('Error fetching visa blogs:', error)
      }
    }

    fetchVisaBlogs()
  }, [])

  const countries = [
    {
      name: t('popularCountry.germany'),
      flag: '/assets/photos/germany.png',
      countryCode: 'germany-visa',
    },
    {
      name: t('popularCountry.italy'),
      flag: '/assets/photos/italy.png',
      countryCode: 'italy-visa',
    },
    {
      name: t('popularCountry.thailand'),
      flag: '/assets/photos/thailand.png',
      countryCode: 'thailand-visa',
    },
    {
      name: t('popularCountry.austria'),
      flag: '/assets/photos/austria.png',
      countryCode: 'austria-visa',
    },
    {
      name: t('popularCountry.france'),
      flag: '/assets/photos/france.png',
      countryCode: 'france-visa',
    },
    {
      name: t('popularCountry.usa'),
      flag: '/assets/photos/united-states.png',
      countryCode: 'unitedstate-visa',
    },
    {
      name: t('popularCountry.canada'),
      flag: '/assets/photos/canada.png',
      countryCode: 'canada-visa',
    },
  ]

  const getBlogIdByCountry = (countryCode) => {
    const blog = visaBlogs.find(
      (visaBlog) => visaBlog.countryCode === countryCode
    )
    return blog ? blog.id : null
  }

  return (
    <div className="container mx-auto px-3">
      <section className="pt-8 sm:pt-16">
        <div className="relative">
          {/* Background Image Section */}
          <div className="text-center">
            <div className="relative w-full h-[66vh] sm:h-[55vh] overflow-hidden rounded-lg">
              <img
                src="/assets/photos/popularBg.png"
                alt="popularBg"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-0 flex flex-col items-center justify-center text-center text-black px-4">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold">
                {t('popularCountry.title1')}
              </h2>
              <p className="text-md sm:text-xl font-bold pt-2 sm:pt-4">
                {t('popularCountry.title2')}
              </p>
            </div>
          </div>

          {/* Grid Section */}
          <div className="absolute top-[150px] sm:top-[150px] left-1/2 transform -translate-x-1/2 w-full px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-14">
              {countries.map((country, index) => {
                const blogId = getBlogIdByCountry(country.countryCode)
                console.log(blogId)

                return blogId ? (
                  <Link to={`/blog/${blogId}`} key={index}>
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="w-16 h-16 sm:w-20 sm:h-20">
                        <img
                          src={country.flag}
                          alt={country.name}
                          className="w-full h-full rounded-full object-cover cursor-pointer"
                        />
                      </div>
                      <p className="text-sm sm:text-lg font-semibold">
                        {country.name}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center space-y-2"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20">
                      <img
                        src={country.flag}
                        alt={country.name}
                        className="w-full h-full rounded-full object-cover cursor-pointer opacity-50"
                      />
                    </div>
                    <p className="text-sm sm:text-lg font-semibold">
                      {country.name}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default PopularCountry
