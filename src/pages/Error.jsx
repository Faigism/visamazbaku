import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-900 mb-4">404</h1>
        <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
          Oops, This Page Not Found!
        </p>
        <p className="text-gray-500 mb-6">
          The link might be corrupted, or the page may have been removed.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-black text-white font-medium rounded hover:bg-gray-800 transition duration-300"
        >
          GO BACK HOME
        </Link>
      </div>
    </div>
  )
}

export default Error
