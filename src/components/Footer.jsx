import { useTranslation } from 'react-i18next'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

export default function Footer() {
  const { t } = useTranslation()

  const location = useLocation()
  const noHeaderFooterRoutes = [
    `/${import.meta.env.VITE_ADMIN_PANEL}`,
    `/${import.meta.env.VITE_ADMIN_LOGIN}`,
  ]
  const hideHeaderFooter = noHeaderFooterRoutes.includes(location.pathname)

  return (
    <>
      {!hideHeaderFooter && (
        <footer className="bg-white border-t border-solid mt-10">
          <div className="container mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-4 py-8">
            <div>
              <div className="text-center font-extrabold text-[#4577b2]">
                <div
                  className="text-2xl italic"
                  style={{ fontFamily: 'Trebuchet MS' }}
                >
                  VİSAM AZ BAKU
                </div>
              </div>
              {/* <p className="text-gray-600 text-sm lg:text-base py-2">
            30 Great Peter St, WestMinister, London SWIP 28J, United Kingdom
          </p> */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.facebook.com/profile.php?id=61560855894972&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook
                    size={20}
                    className="text-primary cursor-pointer hover:text-gray-700"
                  />
                </a>
                <a
                  href="https://www.instagram.com/visam.az.baku/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram
                    size={20}
                    className="text-primary cursor-pointer hover:text-gray-700"
                  />
                </a>
                <a
                  href="https://youtube.com/@jabrayilmirzayev8359?si=DAkmQrlcgX_FPSj_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube
                    size={20}
                    className="text-primary cursor-pointer hover:text-gray-700"
                  />
                </a>
              </div>
              <div className="pt-3 space-y-2">
                <p className="text-gray-600 font-medium hover:text-blue-800">
                  +994502247802
                </p>
                <p className="text-gray-600 font-medium hover:text-blue-800">
                  +994102247802
                </p>
              </div>
            </div>

            <div className="w-36">
              <h5 className="font-semibold text-lg pb-4">
                {t('footer.aboutH5')}
              </h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="hover:text-primary cursor-pointer">
                  <Link to="/about">{t('footer.about.features')}</Link>
                </li>
                <li className="hover:text-primary cursor-pointer">
                  <Link to="/about">{t('footer.about.news')}</Link>
                </li>
                <li className="hover:text-primary cursor-pointer">
                  <Link to="/about">{t('footer.about.plans')}</Link>
                </li>
              </ul>
            </div>

            <div className="w-36">
              <h5 className="font-semibold text-lg pb-4">
                {t('footer.businessH5')}
              </h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="hover:text-primary cursor-pointer">
                  <Link to="/services">{t('footer.business.whyBusiness')}</Link>
                </li>
                <li className="hover:text-primary cursor-pointer">
                  <Link to="/services">{t('footer.business.faq')}</Link>
                </li>
                <li className="hover:text-primary cursor-pointer">
                  <Link to="/blog">{t('footer.business.blog')}</Link>
                </li>
              </ul>
            </div>

            <div className="w-36">
              <h5 className="font-semibold text-lg pb-4">
                {t('footer.supportH5')}
              </h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="hover:text-primary cursor-pointer">
                  <Link to="/contact-us">
                    {t('footer.support.supportCenter')}
                  </Link>
                </li>
                <li className="hover:text-primary cursor-pointer">
                  <Link to="/contact-us">{t('footer.support.feedback')}</Link>
                </li>
                <li className="hover:text-primary cursor-pointer">
                  <Link to="contact-us">{t('footer.support.contactUs')}</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500 py-4 border-t">
            Copyright © visamazbaku.az. 2022-{new Date().getFullYear()}{' '}
          </div>
        </footer>
      )}
    </>
  )
}
