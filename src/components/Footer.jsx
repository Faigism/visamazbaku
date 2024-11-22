import { useTranslation } from 'react-i18next'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="bg-white border-t border-solid mt-10">
      <div className="container mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-4 py-8">
        <div>
          <Link
            to="/"
            className="text-3xl font-bold bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 text-transparent bg-clip-text"
          >
            visamazbaku
          </Link>
          <p className="text-gray-600 text-sm lg:text-base py-2">
            30 Great Peter St, WestMinister, London SWIP 28J, United Kingdom
          </p>
          <div className="flex items-center gap-3 pt-2">
            <FaFacebook
              size={20}
              className="text-primary cursor-pointer hover:text-gray-700"
            />
            <FaInstagram
              size={20}
              className="text-primary cursor-pointer hover:text-gray-700"
            />
            <FaYoutube
              size={20}
              className="text-primary cursor-pointer hover:text-gray-700"
            />
          </div>
        </div>

        <div className="w-36">
          <h5 className="font-semibold text-lg pb-4">{t('footer.aboutH5')}</h5>
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
              <Link to="/contact-us">{t('footer.support.supportCenter')}</Link>
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
  )
}
