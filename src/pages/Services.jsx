import React from 'react'
import RedirectContact from '../components/RedirectContact'
import { useTranslation } from 'react-i18next'

const Services = () => {
  const { t } = useTranslation()
  return (
    <div className="container mx-auto py-8 px-4 md:py-12 md:px-8 mt-28">
      <div className="text-center mb-12">
        <h2 className="text-[#61cad0] text-3xl lg:text-4xl font-bold mb-4">
          {t('Services')}
        </h2>
        <div className="text-center mb-7">
          <RedirectContact />
        </div>
      </div>

      <section className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4">
          Viza Növləri
        </h2>
        <p className="text-gray-700 text-sm md:text-base mb-4">
          Biz müxtəlif növ vizaların alınmasında köməklik göstəririk: turist
          vizası, iş vizası, təhsil vizası, tibbi müalicə vizası və daha çox.
        </p>
      </section>

      <section className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4">
          Ölkələr üzrə Viza Dəstəyi
        </h2>
        <p className="text-gray-700 text-sm md:text-base mb-4">
          Hər bir ölkə üçün fərqli sənədlər və prosedurlar mövcuddur. Biz sizə
          təyin etdiyiniz ölkəyə uyğun sənədləri hazırlamaqda kömək edirik.
        </p>
      </section>

      <section className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4">
          Sənəd Hazırlığı və Yoxlanışı
        </h2>
        <p className="text-gray-700 text-sm md:text-base mb-4">
          Viza üçün lazım olan bütün sənədlərin düzgün şəkildə hazırlanmasını və
          yoxlanmasını təmin edirik.
        </p>
      </section>

      <section className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4">
          Müraciət Doldurma Dəstəyi
        </h2>
        <p className="text-gray-700 text-sm md:text-base mb-4">
          Biz müraciət formalarının düzgün və tam şəkildə doldurulmasında
          köməklik göstəririk.
        </p>
      </section>

      <section className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4">
          Müsahibə Hazırlığı
        </h2>
        <p className="text-gray-700 text-sm md:text-base mb-4">
          Konsulluq müsahibəsinə hazırlıq və məsləhətlər təqdim edirik ki, siz
          daha hazırlıqlı olun.
        </p>
      </section>

      <section className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4">
          Qiymət Paketləri
        </h2>
        <p className="text-gray-700 text-sm md:text-base mb-4">
          Müxtəlif ehtiyaclara uyğun paketlərimiz mövcuddur: standart, təcili və
          premium xidmət paketləri. Hər bir paketin detallarını və qiymətini
          öyrənə bilərsiniz.
        </p>
      </section>

      <section className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4">
          Müştəri Rəyləri
        </h2>
        <p className="text-gray-700 text-sm md:text-base mb-4">
          Xidmətlərimizdən istifadə etmiş müştərilərin rəylərini oxuyun və
          keyfiyyətimizə dair fikirlərini öyrənin.
        </p>
      </section>

      <section className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4">
          Tez-Tez Verilən Suallar
        </h2>
        <p className="text-gray-700 text-sm md:text-base mb-4">
          Viza prosesi ilə bağlı tez-tez verilən suallara cavab tapın. Əgər daha
          ətraflı məlumat istəyirsinizsə, bizimlə əlaqə saxlayın.
        </p>
      </section>
    </div>
  )
}

export default Services
