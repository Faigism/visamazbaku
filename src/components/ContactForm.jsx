import { useState } from 'react'
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
    const apiKey = 'e6f6577e1f43406a8e0dd3350f77739f'
    const response = await fetch(
      `https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${email}`
    )
    const data = await response.json()
    return data.is_valid_format.value && data.deliverability === 'DELIVERABLE'
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting) return

    if (!formData.email.endsWith('@gmail.com')) {
      alert(
        'Zəhmət olmasa yalnız Gmail ünvanı daxil edin (nümunə: example@gmail.com)'
      )
      return
    }

    setIsSubmitting(true)

    try {
      const emailValid = await checkEmailExists(formData.email)
      if (!emailValid) {
        alert('Daxil etdiyiniz email ünvanı düzgün deyil.')
        setIsSubmitting(false)
        return
      }

      const userRef = doc(db, 'messages', formData.email)
      const userDoc = await getDoc(userRef)

      const today = new Date().toISOString().slice(0, 10)
      let messageCount = 0

      if (userDoc.exists()) {
        const userData = userDoc.data()
        const lastMessageDate = userData.lastMessageDate
        messageCount = userData.messageCount || 0

        if (lastMessageDate === today && messageCount >= 2) {
          alert('Siz yalnız gün ərzində 2 dəfə mesaj göndərə bilərsiniz.')
          setIsSubmitting(false)
          return
        }

        if (lastMessageDate !== today) {
          messageCount = 0
        }
      }

      const serviceId = 'service_dg79q4m'
      const templateId = 'template_utw90yp'
      const publicKey = 'Dr77EQg5SdQTGJ1cO'

      const templateParams = {
        name: formData.name,
        reply_to: formData.email,
        message: formData.message,
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      console.log('Email sent successfully!')
      await setDoc(userRef, {
        messageCount: messageCount + 1,
        lastMessageDate: today,
      })

      setFormData({
        name: '',
        email: '',
        inquiryType: 'Viza sualları',
        message: '',
      })
    } catch (error) {
      console.log('Error sending email:', error)
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
            <img src="/contactImg.jpg" alt="Envelope" className="rounded-lg" />
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
                className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                value={formData.name}
                onChange={handleChange}
                required
              />
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
                className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                value={formData.email}
                onChange={handleChange}
                required
              />
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
                className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                value={formData.message}
                onChange={handleChange}
                required
              />
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
