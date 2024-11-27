import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()

  return (
    <div>
      <section>
        <div className="container mx-auto px-6 lg:px-20 bg-white bg-opacity-80 rounded-lg shadow-lg p-8">
          <div className="text-center mb-12">
            <h2 className="text-primary text-3xl lg:text-4xl font-bold mb-4">
              {t('aboutUs.aboutTitle')}
            </h2>
            <p className="text-gray-600 text-lg lg:text-xl max-w-2xl mx-auto">
              {t('aboutUs.aboutTitleDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                {t('aboutUs.aboutWhy')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('aboutUs.aboutWhyP1')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('aboutUs.aboutWhyP2')}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                {t('aboutUs.aboutVision')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('aboutUs.aboutVisionP1')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('aboutUs.aboutVisionP2')}
              </p>
            </div>
          </div>
        </div>
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-20">
            <h2 className="text-primary text-3xl lg:text-4xl font-bold mb-8 text-center">
              {t('aboutUs.aboutReviews')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <p className="text-gray-600 mb-4">
                  {t('aboutUs.aboutReviews1')}
                </p>
                <h4 className="font-semibold text-lg">Əli Hüseynov</h4>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <p className="text-gray-600 mb-4">
                  {t('aboutUs.aboutReviews2')}
                </p>
                <h4 className="font-semibold text-lg">Nigar Məmmədova</h4>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <p className="text-gray-600 mb-4">
                  {t('aboutUs.aboutReviews3')}
                </p>
                <h4 className="font-semibold text-lg">Orxan Rəsulov</h4>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-20">
            <h2 className="text-primary text-3xl lg:text-4xl font-bold mb-8 text-center">
              {t('aboutUs.aboutOurTeam')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <img
                  src="aboutUsProfile.jpg"
                  alt="Komanda üzvü"
                  className="rounded-full w-32 h-32 mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold">Cəbrayıl Mirzəyev</h3>
                <p className="text-gray-600">CEO</p>
              </div>
              <div className="text-center">
                <img
                  src="aboutUsProfile.jpg"
                  alt="Komanda üzvü"
                  className="rounded-full w-32 h-32 mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold">Nəcibə Mirzəyeva</h3>
                <p className="text-gray-600">{t('aboutUs.teamMarketing')}</p>
              </div>
              <div className="text-center">
                <img
                  src="aboutUsProfile.jpg"
                  alt="Komanda üzvü"
                  className="rounded-full w-32 h-32 mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold">Rəşad Quliyev</h3>
                <p className="text-gray-600">{t('aboutUs.teamCustomer')}</p>
              </div>
              <div className="text-center">
                <img
                  src="aboutUsProfile.jpg"
                  alt="Komanda üzvü"
                  className="rounded-full w-32 h-32 mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold">Faiq İsmayılov</h3>
                <p className="text-gray-600">{t('aboutUs.teamIT')}</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}
