import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './components/Home'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Blog from './pages/Blog'
import BlogDetail from './components/BlogDetail'
import Error from './pages/Error'
import { useEffect, useState } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import db from './server/firebase'
import Services from './pages/Services'
import ScrollToTop from './components/ScrollToTop'
import Loading from './components/Loading'
import { useTranslation } from 'react-i18next'

function App() {
  const [blogs, setBlogs] = useState([])
  const { i18n } = useTranslation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = () => {
      const unsubscribe = onSnapshot(
        collection(db, 'blogs'),
        (querySnapshot) => {
          const blogData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          setBlogs(blogData)
          setLoading(false)
        }
      )

      return () => unsubscribe()
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

  const addBlog = (newBlog) => {
    setBlogs([newBlog, ...blogs])
  }

  if (loading) {
    return <Loading />
  }

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes basename={window.location.pathname || ''}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/blog" element={<Blog blogs={blogs} />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
