import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

const Language = () => {
  const { t, i18n } = useTranslation()
  const languageRef = useRef(null)
  const [languageDropdown, setLanguageDropdown] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem('i18nextLng') || i18n.language
  )

  const toggleLanguageDropdown = () => {
    setLanguageDropdown(!languageDropdown)
  }

  const clickHandle = async (lang) => {
    await i18n.changeLanguage(lang)
    setSelectedLanguage(lang)
    localStorage.setItem('i18nextLng', lang)
    setLanguageDropdown(false)
  }

  useEffect(() => {
    const storedLanguage = localStorage.getItem('i18nextLng') || 'az'
    i18n.changeLanguage(storedLanguage).then(() => {
      setSelectedLanguage(storedLanguage)
      setIsLoaded(true)
    })
  }, [i18n])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setLanguageDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <div className="relative flex gap-4 z-[100]" ref={languageRef}>
      <img
        src="/assets/photos/langGlobe.png"
        alt="globe"
        className="w-[2rem] h-[2rem] cursor-pointer"
        onClick={toggleLanguageDropdown}
      />
      {languageDropdown && (
        <div className="absolute top-16 right-0 w-32 bg-white shadow-lg rounded-lg py-2">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => clickHandle('en')}
          >
            English
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => clickHandle('az')}
          >
            Azerbaijani
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => clickHandle('ru')}
          >
            Russian
          </a>
        </div>
      )}
    </div>
  )
}
export default Language
