import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const RedirectContact = () => {
  const { t } = useTranslation()
  return (
    <Link to="/contact-us">
      <button className="bg-primary text-white px-6 py-3 transition-bg hover:bg-white hover:text-primary rounded-xl shadow my-8">
        {t('apply')}
      </button>
    </Link>
  )
}
export default RedirectContact
