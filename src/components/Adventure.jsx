import RedirectContact from './RedirectContact'
import { useTranslation } from 'react-i18next'

export default function Adventure() {
  const { t } = useTranslation()

  return (
    <div className="mx-auto max-lg:pt-[100px]">
      <section className="pb-10 pt-32 px-6">
        <div className="lg:flex justify-between items-center pb-8">
          <h2 className="text-lg font-bold lg:text-3xl">
            {t('adventure.tickets_btn')}
          </h2>
          <RedirectContact />
        </div>
        <div className="overflow-hidden rounded-2xl">
          <div className="w-full lg:h-[40rem] h-100 rounded-2xl">
            <video
              loop
              muted
              autoPlay
              playsInline
              className="pointer-events-none"
            >
              <source src="/assets/photos/video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </div>
  )
}
