import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './components/Home'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Blog from './pages/Blog'
import BlogDetail from './components/BlogDetail'
import Error from './pages/Error'
import { useEffect, useState } from 'react'
import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import db from './server/firebase'
import Services from './pages/Services'
import ScrollToTop from './components/ScrollToTop'
import Loading from './components/Loading'
import { useTranslation } from 'react-i18next'
import ComingSoon from './components/ComingSoon'
import AdminPanel from './pages/AdminPanel'
import AdminLogin from './components/admin/AdminLogin'
import ProtectedRoute from './components/admin/ProtectedRoute'

function App() {
  const [blogs, setBlogs] = useState({
    countryBlogs: [],
    visaBlogs: [],
  })
  const { i18n } = useTranslation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const countrySnapshot = await getDocs(
          collection(db, 'blogs', 'countryBlogs', 'entries')
        )
        const visaSnapshot = await getDocs(
          collection(db, 'blogs', 'visaBlogs', 'entries')
        )

        const countryData = countrySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        const visaData = visaSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))

        setBlogs({
          countryBlogs: countryData,
          visaBlogs: visaData,
        })
      } catch (error) {
        console.error('Error fetching blogs:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  useEffect(() => {
    const handleLanguageChange = () => {
      setLoading(false)
    }

    i18n.on('languageChanged', handleLanguageChange)

    return () => {
      i18n.off('languageChanged', handleLanguageChange)
    }
  }, [i18n])

  if (loading) {
    return <Loading />
  }

  // basename={window.location.pathname || ''}

  return (
    <Router basename="/">
      {/* <ComingSoon /> */}
      <ToastContainer />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route
          path={import.meta.env.VITE_ADMIN_PANEL}
          element={
            <ProtectedRoute>
              <AdminPanel blogs={blogs} setBlogs={setBlogs} />
            </ProtectedRoute>
          }
        />
        <Route
          path={import.meta.env.VITE_ADMIN_LOGIN}
          element={<AdminLogin />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/blog" element={<Blog blogs={blogs} />} />
        <Route
          path="/blog/:id"
          element={<BlogDetail blogs={blogs} setBlogs={setBlogs} />}
        />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
