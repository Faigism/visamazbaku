import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HiMenuAlt3 } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'
import Language from './Language'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false)
  const { t, i18n } = useTranslation()
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language)
  const location = useLocation()
  const noHeaderFooterRoutes = [
    `/${import.meta.env.VITE_ADMIN_PANEL}`,
    `/${import.meta.env.VITE_ADMIN_LOGIN}`,
  ]

  const hideHeaderFooter = noHeaderFooterRoutes.includes(location.pathname)

  const showDropdown = () => {
    setDropdown(!dropdown)
  }

  useEffect(() => {
    document.body.style.overflow = dropdown ? 'hidden' : 'auto'
  }, [dropdown])

  const closeDropdown = () => {
    setDropdown(false)
  }

  useEffect(() => {
    const handleLanguageChange = () => {
      setCurrentLanguage(i18n.language)
    }
    i18n.on('languageChanged', handleLanguageChange)
    return () => {
      i18n.off('languageChanged', handleLanguageChange)
    }
  }, [i18n])

  return (
    <>
      {!hideHeaderFooter && (
        <nav className="w-full flex flex-col justify-center items-center absolute top-0 z-50">
          <div className="pl-4 pr-4 mx-auto lg:px-3 w-full h-16 bg-slate-500">
            <div className="lg:w-full w-11/12 mx-auto h-full top-0 flex justify-between items-center">
              <div className="flex flex-col gap-y-4">
                <div className="flex items-center gap-x-2">
                  <Link to="/" onClick={closeDropdown}>
                    <div className="text-center font-extrabold text-white">
                      <div
                        className="text-2xl italic"
                        style={{ fontFamily: 'Trebuchet MS' }}
                      >
                        VİSAM AZ BAKU
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
                <Link
                  to="/services"
                  className="leading-normal no-underline text-white text-lg hover:text-black"
                >
                  {t('Services')}
                </Link>
                <Link
                  to="/blog"
                  className="leading-normal no-underline text-white text-lg hover:text-black"
                >
                  {t('Blog')}
                </Link>
                <Link
                  to="contact-us"
                  className="leading-normal no-underline text-white text-lg hover:text-black"
                >
                  {t('ContactUs')}
                </Link>
                <Link
                  to="/about"
                  className="leading-normal no-underline text-white text-lg hover:text-black"
                >
                  {t('AboutUs')}
                </Link>
                <Link
                  to="/səfirliklər"
                  className="leading-normal no-underline text-white text-lg hover:text-black"
                >
                  səfirliklər
                </Link>
              </ul>
              <div className="flex items-center gap-7">
                <Language />
                {dropdown ? (
                  <div
                    onClick={showDropdown}
                    className="lg:hidden text-[22px] cursor-pointer text-black"
                  >
                    <MdClose />
                  </div>
                ) : (
                  <div
                    onClick={showDropdown}
                    className="lg:hidden text-[22px] cursor-pointer text-black"
                  >
                    <HiMenuAlt3 />
                  </div>
                )}
              </div>
            </div>
            {dropdown && (
              <div className="lg:hidden fixed inset-0 top-16 bg-slate-500 flex flex-col justify-center items-center text-center z-40">
                <ul className="flex flex-col gap-6">
                  <Link
                    to="/services"
                    className="text-white font-bold text-lg hover:bg-white/20 px-4 py-2 rounded transition"
                    onClick={closeDropdown}
                  >
                    {t('Services')}
                  </Link>
                  <Link
                    to="/blog"
                    className="text-white font-bold text-lg hover:bg-white/20 px-4 py-2 rounded transition"
                    onClick={closeDropdown}
                  >
                    {t('Blog')}
                  </Link>
                  <Link
                    to="/contact-us"
                    className="text-white font-bold text-lg hover:bg-white/20 px-4 py-2 rounded transition"
                    onClick={closeDropdown}
                  >
                    {t('ContactUs')}
                  </Link>
                  <Link
                    to="/about"
                    className="text-white font-bold text-lg hover:bg-white/20 px-4 py-2 rounded transition"
                    onClick={closeDropdown}
                  >
                    {t('AboutUs')}
                  </Link>
                </ul>
              </div>
            )}
          </div>
        </nav>
      )}
    </>
  )
}
