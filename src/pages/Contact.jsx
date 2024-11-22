import { useTranslation } from 'react-i18next'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  const { t } = useTranslation()
  const whatsappNumber = '994501234567'

  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank')
  }

  return (
    <div className="mx-auto px-6 py-8">
      <div className="text-center mb-12">
        <h2 className="text-primary text-3xl lg:text-4xl font-bold mb-4">
          {t('aboutUs.aboutH2')}
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 mb-12 justify-around items-center">
        <div className="bg-[#004653] text-white p-8 rounded-[50px] flex-1 max-w-3xl h-[450px] leading-10">
          <div className="text-4xl mb-4">
            <svg
              className="pk kf jl"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="ic-chat-dark-1 1">
                <path
                  id="Vector"
                  d="M47.6016 26C47.7016 26.7 47.8016 27.4 47.8016 28.2V28.7C47.8016 27.7 47.7016 26.8 47.6016 26Z"
                  fill="#E7EEEF"
                ></path>
                <path
                  id="Vector_2"
                  d="M61.3 22.6996V24.9996C61.3 27.3996 61.3 29.2996 61.2 30.8996C61.1 32.4996 60.9 33.8996 60.3 35.0996C59 38.1996 56.5 40.6996 53.4 41.9996C53.3 41.9996 53.2 42.0996 53.2 42.0996C52.8 42.1996 52.5 42.3996 52.2 42.4996H49.8V28.1996C49.8 20.4996 43.6 14.1996 35.9 14.1996H15.5C15.7 12.0996 16.2 10.2996 17.1 8.69961C18.2 6.99961 19.6 5.59961 21.3 4.49961C23 3.49961 24.8 2.99961 27 2.79961C29.2 2.59961 31.8 2.59961 35.2 2.59961H41.2C44.6 2.59961 47.3 2.59961 49.4 2.79961C51.6 2.99961 53.5 3.49961 55.1 4.49961C57 5.59961 58.4 6.99961 59.5 8.69961C60.5 10.3996 61 12.1996 61.2 14.3996C61.3 16.5996 61.3 19.2996 61.3 22.6996Z"
                  fill="white"
                ></path>
                <path
                  id="Vector_3"
                  // fill-rule="evenodd"
                  // clip-rule="evenodd"
                  d="M46.1992 21.4996C45.2992 19.9996 43.9992 18.6996 42.4992 17.7996C39.7992 16.0996 36.0992 16.0996 28.6992 16.0996H21.8992C14.4992 16.0996 10.7992 16.0996 8.09922 17.7996C6.59922 18.6996 5.29922 19.9996 4.39922 21.4996C2.69922 24.1996 2.69922 27.8996 2.69922 35.2996V37.5996C2.69922 42.8996 2.69922 45.4996 3.59922 47.5996C4.69922 50.3996 6.89922 52.5996 9.69922 53.6996C10.9992 54.1996 12.5992 54.3996 14.7992 54.4996C17.1992 54.5996 18.4992 54.5996 19.3992 55.1996C20.2992 55.7996 20.8992 56.6996 22.0992 58.6996L22.7992 59.8996C23.8992 61.6996 26.5992 61.6996 27.6992 59.8996L28.3992 58.6996C29.5992 56.6996 30.1992 55.6996 31.0992 55.1996C31.9992 54.5996 33.2992 54.5996 35.6992 54.4996C37.9992 54.3996 39.4992 54.1996 40.7992 53.6996C43.5992 52.5996 45.7992 50.3996 46.8992 47.5996C47.7992 45.4996 47.7992 42.8996 47.7992 37.5996V35.2996C47.8992 27.8996 47.8992 24.1996 46.1992 21.4996ZM15.3992 38.6996C14.3992 38.6996 13.5992 38.1996 13.0992 37.4996C12.7992 36.9996 12.5992 36.4996 12.5992 35.8996C12.5992 34.2996 13.8992 33.0996 15.3992 33.0996C16.3992 33.0996 17.1992 33.5996 17.6992 34.2996C17.9992 34.7996 18.1992 35.2996 18.1992 35.8996C18.1992 37.3996 16.9992 38.6996 15.3992 38.6996ZM25.2992 38.6996C24.0992 38.6996 23.0992 37.9996 22.6992 36.9996C22.5992 36.6996 22.4992 36.2996 22.4992 35.8996C22.4992 34.2996 23.7992 33.0996 25.2992 33.0996C26.2992 33.0996 27.1992 33.6996 27.6992 34.4996C27.7992 34.6996 27.8992 34.9996 27.9992 35.2996V35.3996C27.9992 35.5996 28.0992 35.7996 28.0992 35.9996C28.0992 37.3996 26.7992 38.6996 25.2992 38.6996ZM35.1992 38.6996C33.9992 38.6996 32.9992 37.9996 32.5992 36.9996C32.4992 36.6996 32.3992 36.2996 32.3992 35.8996C32.3992 34.2996 33.6992 33.0996 35.1992 33.0996C36.1992 33.0996 36.9992 33.5996 37.4992 34.2996C37.7992 34.7996 37.9992 35.2996 37.9992 35.8996C37.9992 37.3996 36.6992 38.6996 35.1992 38.6996Z"
                  fill="white"
                ></path>
              </g>
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mb-2">{t('aboutUs.chatH2')}</h2>
          <p className="font-semibold mb-1">{t('aboutUs.chatP1')}</p>
          <p className="mb-6">
            {t('aboutUs.chatP2')}
            <br />
            {t('aboutUs.chatP3')}
          </p>
          <button
            onClick={handleWhatsAppRedirect}
            className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:from-green-500 hover:via-green-600 hover:to-green-700 transition-colors duration-700 flex items-center justify-center gap-2 w-full h-[50px]"
          >
            {t('aboutUs.chatWpBtn')}
            <svg
              className="w-3"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
            </svg>
          </button>
        </div>

        <div className="flex items-center justify-center relative bg-[#d5e1e2] rounded-[50px]">
          <img
            src="https://d16zz69zs6o3lx.cloudfront.net/img/v2/contact-us-agent.webp"
            alt="Support Person"
            className="w-[400px] -mt-8"
          />
        </div>
      </div>

      <ContactForm />
    </div>
  )
}

export default Contact
