import { useState } from 'react'
import { toast } from 'react-toastify'
import emailjs from '@emailjs/browser'
import db from '../server/firebase'
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from 'firebase/firestore'
import { useTranslation } from 'react-i18next'

export default function ContactForm() {
  const { t } = useTranslation()
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Viza sualları',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [remainingChars, setRemainingChars] = useState(200)

  const handleChange = (e) => {
    const { name, value } = e.target

    const trimmedValue = value.replace(/^\s+/, '')

    if (name === 'name' && trimmedValue.length > 30) {
      return
    }

    if (name === 'email') {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        message: '',
      }))
    }

    if (name === 'message') {
      if (trimmedValue.length <= 200) {
        setFormData((prevData) => ({ ...prevData, [name]: trimmedValue }))
        setRemainingChars(200 - trimmedValue.length)
      }
      return
    }

    setFormData((prevData) => ({ ...prevData, [name]: trimmedValue }))
  }

  async function checkEmailExists(email) {
    const apiKey = import.meta.env.VITE_EMAIL_VALIDATION_API_KEY

    const response = await fetch(
      `https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${email}`
    )
    const data = await response.json()
    return data.is_valid_format.value && data.deliverability === 'DELIVERABLE'
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting) return

    setFormErrors({
      name: '',
      email: '',
      message: '',
    })

    let errors = {}

    if (!formData.name) {
      errors.name = 'Adınızı daxil edin.'
    }
    if (!formData.email.endsWith('@gmail.com')) {
      errors.email = t('requests.errorEmailValidation')
    }
    if (!formData.message) {
      errors.message = 'Mesajınızı daxil edin.'
    }

    // Yalnız emailin doğruluğunu yoxlamağa davam edirik, əgər limit aşılmayıbsa
    let emailValid = true
    const userRef = doc(db, 'messages', formData.email)
    const userDoc = await getDoc(userRef)

    if (userDoc.exists()) {
      const userData = userDoc.data()
      const lastMessageDate = userData.lastMessageDate
      let messageCount = userData.messageCount || 0

      // Əgər eyni gündə artıq 2 sorğu göndərilibsə, email yoxlanmasına ehtiyac yoxdur
      if (
        lastMessageDate === new Date().toISOString().slice(0, 10) &&
        messageCount >= 2
      ) {
        errors.message = t('requests.errorEmailLimited')
        setFormErrors(errors)
        setIsSubmitting(false)
        return
      }

      // Əgər son göndərilən tarix bu gündən fərqlidirsə, sayacı sıfırlayırıq
      if (lastMessageDate !== new Date().toISOString().slice(0, 10)) {
        messageCount = 0
      }

      // Əgər emailin artıq düzgünlüyü yoxlanılıbsa və limit aşılmayıbsa, `checkEmailExists` funksiyasını çağırmağa ehtiyac yoxdur
      emailValid = true
    }

    // Eyni email ilə limitə çatmamışsa, emaili yoxlayaq
    if (emailValid && !userDoc.exists()) {
      emailValid = await checkEmailExists(formData.email)
    }

    if (!emailValid) {
      errors.email = t('requests.errorEmailValidation2')
    }

    // Əgər səhv varsa, onları göstəririk və submit etməyə icazə vermirik
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      setIsSubmitting(false)
      return
    }

    setIsSubmitting(true)

    try {
      const today = new Date().toISOString().slice(0, 10)
      let messageCount = 0

      // Emaili göndəririk
      const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY

      const templateParams = {
        name: formData.name,
        reply_to: formData.email,
        message: formData.message,
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      console.log('Email sent successfully!')
      toast.success(t('requests.successFormMessage'))

      // Yeni məlumatları Firebase-ə yazırıq
      await setDoc(userRef, {
        messageCount: messageCount + 1,
        lastMessageDate: today,
      })

      setRemainingChars(200)
      setFormData({
        name: '',
        email: '',
        inquiryType: 'Viza sualları',
        message: '',
      })
    } catch (error) {
      toast.error(t('requests.errorOther'))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            {t('contactForm.title')}
          </h2>
          <p className="text-gray-600 text-lg mb-8">{t('contactForm.desc')}</p>
          <div className="flex items-center">
            <img
              src="/assets/photos/contactImg.jpg"
              alt="Envelope"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-medium" htmlFor="name">
                {t('contactForm.fullName')}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className={`w-full mt-1 p-3 border ${
                  formErrors.name ? 'border-red-500' : 'border-gray-300'
                } rounded-md`}
                value={formData.name}
                onChange={handleChange}
                required
              />
              {formErrors.name && (
                <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
              )}
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium"
                htmlFor="email"
              >
                {t('contactForm.email')}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className={`w-full mt-1 p-3 border ${
                  formErrors.email ? 'border-red-500' : 'border-gray-300'
                } rounded-md`}
                value={formData.email}
                onChange={handleChange}
                required
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
              )}
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium"
                htmlFor="inquiryType"
              >
                {t('contactForm.request')}
              </label>
              <select
                name="inquiryType"
                id="inquiryType"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                value={formData.inquiryType}
                onChange={handleChange}
              >
                <option value="Viza sualları">
                  {t('contactForm.requestVisa')}
                </option>
                <option value="Səyahət planlaşdırma">
                  {t('contactForm.requestTravel')}
                </option>
                <option value="Digər">{t('contactForm.requestOther')}</option>
              </select>
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium"
                htmlFor="message"
              >
                {t('contactForm.requestYour')}
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                className={`w-full mt-1 p-3 border ${
                  formErrors.message ? 'border-red-500' : 'border-gray-300'
                } rounded-md`}
                value={formData.message}
                onChange={handleChange}
                required
              />
              {formErrors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.message}
                </p>
              )}
              <p className="text-gray-500 text-sm mt-1">
                {t('contactForm.symbols')}: {remainingChars}
              </p>
            </div>

            <button
              type="submit"
              className={`w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? t('loading') : t('contactForm.formBtn')}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
