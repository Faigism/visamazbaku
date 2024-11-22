import React, { useState, useEffect, useCallback } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import db from '../server/firebase'
import _ from 'lodash'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState('')
  const [blogs, setBlogs] = useState([])
  const [filteredBlogs, setFilteredBlogs] = useState([])
  const [showAllResults, setShowAllResults] = useState(false)

  const { t } = useTranslation()

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'blogs'))
        const blogsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setBlogs(blogsData)
      } catch (error) {
        console.error('Error fetching blogs:', error)
      }
    }

    fetchBlogs()
  }, [])

  const debouncedSearch = useCallback(
    _.debounce((term) => {
      if (term) {
        const results = blogs.filter((blog) =>
          blog.title.toLowerCase().includes(term.toLowerCase())
        )
        setFilteredBlogs(results)
      } else {
        setFilteredBlogs([])
      }
    }, 500),
    [blogs]
  )

  useEffect(() => {
    debouncedSearch(searchTerm)
  }, [searchTerm, debouncedSearch])

  const displayedBlogs = showAllResults
    ? filteredBlogs
    : filteredBlogs.slice(0, 3)

  return (
    <div className="container mx-auto px-6 pt-12">
      <div className="relative rounded-2xl lg:h-[70vh]">
        <div className="overflow-hidden relative h-full w-full">
          <img
            src="/bg2.jpg"
            alt=""
            className="lg:absolute top-0 w-full lg:h-[70vh] h-[30rem] object-cover rounded-2xl"
          />
        </div>
        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center h-full ">
          <h1 className="relative text-white text-3xl lg:text-6xl font-bold lg:w-4/5 mx-auto text-center drop-shadow-md before:content-[''] before:absolute before:inset-0 before:bg-slate-600 before:opacity-50 before:rounded-lg before:-z-10">
            {t('hero.title')}
          </h1>
          <p className="text-white text-lg lg:text-2xl mt-4 lg:mt-6 text-center font-medium lg:w-3/5 mx-auto opacity-80 drop-shadow-sm drop-shadow-md before:content-[''] before:absolute before:inset-0 before:bg-slate-600 before:opacity-50 before:rounded-lg before:-z-10">
            {t('hero.desc')}
          </p>
          <div className="mt-8 w-full max-w-lg px-4 relative">
            <input
              type="text"
              placeholder={t('hero.search')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 rounded-lg text-black outline-none"
            />
            {filteredBlogs.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg p-4 max-h-60 overflow-y-auto custom-scrollbar">
                {displayedBlogs.map((blog) => (
                  <a
                    href={`/blog/${blog.id}`}
                    key={blog.id}
                    className="block p-3 border-b border-gray-200 hover:bg-gray-100 transition"
                  >
                    <h2 className="text-lg font-semibold text-gray-800 truncate">
                      {blog.title.length > 30
                        ? blog.title.slice(0, 30) + '...'
                        : blog.title}
                    </h2>
                    <p className="text-sm text-gray-600 truncate">
                      {blog.description && blog.description.length > 50
                        ? blog.description.slice(0, 50) + '...'
                        : blog.description}
                    </p>
                  </a>
                ))}
                {filteredBlogs.length > 3 && !showAllResults && (
                  <button
                    onClick={() => setShowAllResults(true)}
                    className="block w-full text-center mt-3 text-blue-500 hover:text-blue-900 transition"
                  >
                    Show More
                  </button>
                )}
                {showAllResults && (
                  <button
                    onClick={() => setShowAllResults(false)}
                    className="block w-full text-center mt-3 text-blue-500 hover:text-blue-900 transition"
                  >
                    Show Less
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}