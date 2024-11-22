import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-8 text-center">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-4">Üzgünüz, sayfa bulunamadı.</p>
      <p className="text-lg text-gray-600 mb-8">
        Aradığınız sayfa mevcut değil veya adres yanlış girilmiş.
      </p>
      <Link
        to="/"
        className="text-blue-500 hover:underline text-xl font-medium"
      >
        Ana sayfaya dön
      </Link>
    </div>
  )
}

export default Error
