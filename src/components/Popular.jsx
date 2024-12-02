/* eslint-disable react/prop-types */
import { useTranslation } from 'react-i18next'
import { HiLocationMarker } from 'react-icons/hi'
import { Link } from 'react-router-dom'

export default function Popular() {
  const { t } = useTranslation()
  const Card = ({ image, text, location }) => {
    return (
      <div>
        <div className="overflow-hidden relative my-0 mx-auto rounded-2xl">
          <img
            src={image}
            alt=""
            className="rounded-2xl w-[300px] h-[300px] box-border hoverImg"
          />
          {/* <p className="bg-white rounded-lg p-1 text-sm absolute top-4 right-4">
            20% off
          </p> */}
        </div>
        <div>
          <h5 className="text-xl pt-2 font-semibold">{text}</h5>
          <div className="flex items-center gap-2 py-3">
            <HiLocationMarker size={20} className="text-primary" />
            <p className="text-gray text-light">{location}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-3">
      <section className="pt-16">
        <div>
          <div className="lg:flex justify-between text-center">
            <span>
              <h2 className="text-4xl lg:text-5xl font-bold text-left">
                {t('popular.title1')}
              </h2>
              <p className="py-4 text-left lg:text-lg">{t('popular.title2')}</p>
            </span>
            <p className="text-light lg:w-2/5 text-right lg:text-lg">
              {t('popular.title3')}
            </p>
          </div>
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 my-12 relative z-10">
            <Card
              image="/assets/photos/popularBerlin.jpeg"
              location="Berlin, Germany"
              text="The Brandenburg Gate"
            />
            <Card
              image="/assets/photos/disney.jpeg"
              location="Tokyo, Japan"
              text="DisneyLand Tokyo"
            />
            <Card
              image="/assets/photos/java.jpg"
              location="Java, Indonesia"
              text="Tousand Island"
            />
            <Card
              image="/assets/photos/venice.jpeg"
              location="Venice, Italy"
              text="Baslika Santo"
            />
          </div>
        </div>
      </section>
      <section className="py-16">
        <span className="flex flex-col items-center text-center gap-2">
          <h2 className="text-4xl font-bold lg:text-5xl">
            {t('popular.travel_make')}
          </h2>
          <p className="lg:text-lg">{t('popular.travel_make_title')}</p>
        </span>
        <div className="lg:flex items-center justify-between py-16">
          <div className="lg:w-1/2">
            <div>
              <span className="bg-[#7bbbde] text-white px-3 py-1 rounded-xl lg:text-2xl">
                01
              </span>
              <h2 className="font-bold text-lg py-4 lg:text-3xl">
                {t('popular.travel_make1')}
              </h2>
              <p className="text-light pb-6 lg:w-1/2 lg:text-lg">
                {t('popular.travel_make1_title')}
              </p>
            </div>
            <div>
              <span className="bg-[#8196e9] text-white px-3 py-1 rounded-xl lg:text-2xl">
                02
              </span>
              <h2 className="font-bold text-lg py-4 lg:text-3xl">
                {t('popular.travel_make2')}
              </h2>
              <p className="text-light pb-6 lg:w-1/2 lg:text-lg">
                {t('popular.travel_make2_title')}
              </p>
            </div>
            <div>
              <span className="bg-primary text-white px-3 py-1 rounded-xl lg:text-2xl">
                03
              </span>
              <h2 className="font-bold text-lg py-4 lg:text-3xl">
                {t('popular.travel_make3')}
              </h2>
              <p className="text-light pb-6 lg:w-1/2 lg:text-lg">
                {t('popular.travel_make3_title')}
              </p>
            </div>
            <Link to="/blog">
              <button className="bg-[#61cad0] text-white px-6 py-3 transition-bg hover:bg-[#439fa4] hover:text-white rounded-xl shadow my-8">
                {t('popular.travel_make_btn')}
              </button>
            </Link>
          </div>
          <div className="lg:w-1/2 h-full overflow-hidden rounded-2xl">
            <img
              src="/assets/photos/img1.jpeg"
              alt="popularImg"
              className="rounded-2xl w-full h-full hoverImg"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
