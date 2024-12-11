const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated')

  if (!isAuthenticated) {
    return window.location.replace(`${import.meta.env.VITE_ADMIN_LOGIN}`)
  }

  return children
}

export default ProtectedRoute
