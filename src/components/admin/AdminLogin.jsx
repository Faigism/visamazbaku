import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  // Qeyd edilmiş istifadəçi adı və parol
  const adminCredentials = {
    username: `${import.meta.env.VITE_ADMIN_USERNAME}`,
    password: `${import.meta.env.VITE_ADMIN_PASSWORD}`,
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      username === adminCredentials.username &&
      password === adminCredentials.password
    ) {
      // Giriş uğurlu oldu
      localStorage.setItem('isAuthenticated', true) // Autentifikasiya vəziyyətini yadda saxlayırıq
      navigate(`/${import.meta.env.VITE_ADMIN_PANEL}`) // Admin panelinə yönləndiririk
    } else {
      setError('Yanlış istifadəçi adı və ya parol!')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-cyan-800">
          Admin Girişi
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700">İstifadəçi adı:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded w-full p-2"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Parol:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded w-full p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-cyan-800 text-white py-2 px-4 rounded hover:bg-cyan-900"
        >
          Daxil ol
        </button>
      </form>
    </div>
  )
}

export default AdminLogin
