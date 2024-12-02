import { useTranslation } from 'react-i18next'

const PopularCountry = () => {
  const { t } = useTranslation()

  const countries = [
    { name: t('popularCountry.germany'), flag: '/assets/photos/germany.png' },
    { name: t('popularCountry.italy'), flag: '/assets/photos/italy.png' },
    { name: t('popularCountry.thailand'), flag: '/assets/photos/thailand.png' },
    { name: t('popularCountry.austria'), flag: '/assets/photos/austria.png' },
    { name: t('popularCountry.france'), flag: '/assets/photos/france.png' },
    { name: t('popularCountry.usa'), flag: '/assets/photos/united-states.png' },
    { name: t('popularCountry.canada'), flag: '/assets/photos/canada.png' },
  ]

  return (
    <div className="container mx-auto px-3">
      <section className="pt-8 sm:pt-16">
        <div className="relative">
          {/* Background Image Section */}
          <div className="text-center">
            <div className="relative w-full h-[66vh] sm:h-[55vh] overflow-hidden rounded-lg">
              <img
                src="/assets/photos/popularBg.png"
                alt="popularBg"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-0 flex flex-col items-center justify-center text-center text-black px-4">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold">
                {t('popularCountry.title1')}
              </h2>
              <p className="text-md sm:text-xl font-bold pt-2 sm:pt-4">
                {t('popularCountry.title2')}
              </p>
            </div>
          </div>

          {/* Grid Section */}
          <div className="absolute top-[150px] sm:top-[150px] left-1/2 transform -translate-x-1/2 w-full px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-14">
              {countries.map((country, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-2"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20">
                    <img
                      src={country.flag}
                      alt={country.name}
                      className="w-full h-full rounded-full object-cover cursor-pointer"
                    />
                  </div>
                  <p className="text-sm sm:text-lg font-semibold">
                    {country.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default PopularCountry
