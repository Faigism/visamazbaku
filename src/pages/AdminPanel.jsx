import React, { useState, useEffect } from 'react'
import BlogForm from '../components/BlogForm'
import BlogListAdmin from '../components/admin/BlogListAdmin' // Yeni komponent
import db from '../server/firebase'
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from 'firebase/firestore'
import EditBlogForm from '../components/admin/EditBlogForm'

const AdminPanel = ({ blogs, setBlogs }) => {
  const [editMode, setEditMode] = useState(false) // Redaktə rejimini idarə edir
  const [selectedBlog, setSelectedBlog] = useState(null) // Redaktə olunacaq blogu saxlayır

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
          type: 'country',
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
      }
    }

    fetchBlogs()
  }, [])

  const handleCreate = (newBlog) => {
    setBlogs((prevBlogs) => [newBlog, ...prevBlogs])
  }

  const handleDelete = async (id, type) => {
    try {
      // Firebase-də sənədi silmək
      const blogRef = doc(db, 'blogs', `${type}Blogs`, 'entries', id)
      await deleteDoc(blogRef)

      // State-dən silmək
      setBlogs((prevBlogs) => {
        const currentBlogs = prevBlogs[`${type}Blogs`] || [] // Default boş array
        return {
          ...prevBlogs,
          [`${type}Blogs`]: currentBlogs.filter((blog) => blog.id !== id),
        }
      })
    } catch (error) {
      console.error('Error deleting blog:', error)
    }
  }

  const handleEdit = (blog) => {
    setSelectedBlog(blog) // Redaktə olunacaq blogu seçin
    setEditMode(true) // Redaktə rejimini aktiv edin
  }

  const handleUpdate = async (updatedBlog) => {
    try {
      if (!updatedBlog || !updatedBlog.id || !updatedBlog.type) {
        console.error('Invalid blog data:', updatedBlog)
        return
      }

      // Firebase sənədinin yeri
      const blogRef = doc(
        db,
        'blogs',
        `${updatedBlog.type}Blogs`,
        'entries',
        updatedBlog.id
      )

      // Sənədin mövcudluğunu yoxlamaq üçün getDoc istifadə edin
      const blogSnapshot = await getDoc(blogRef)

      // Əgər sənəd yoxdursa, loglayın və qaytarın
      if (!blogSnapshot.exists()) {
        console.error('Blog not found at:', blogRef.path) // Sənədin yolunu göstərmək
        return
      }

      // Firebase sənədini yeniləyin
      await updateDoc(blogRef, updatedBlog)

      // Admin paneldəki blog siyahısını yeniləyin
      setBlogs((prevBlogs) => ({
        ...prevBlogs,
        [`${updatedBlog.type}Blogs`]: prevBlogs[`${updatedBlog.type}Blogs`].map(
          (blog) => (blog.id === updatedBlog.id ? updatedBlog : blog)
        ),
      }))

      setEditMode(false) // Redaktə rejimini bağlayın
      setSelectedBlog(null)
    } catch (error) {
      console.error('Error updating blog:', error)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated')
    window.location.href = '/'
  }

  return (
    <div className="mt-28 p-4">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Çıxış
      </button>
      {!editMode ? (
        <>
          <BlogForm onCreate={handleCreate} />
          <BlogListAdmin
            blogs={blogs}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </>
      ) : (
        <EditBlogForm
          blog={selectedBlog}
          onUpdate={handleUpdate}
          onCancel={() => {
            setEditMode(false)
            setSelectedBlog(null)
          }}
        />
      )}
    </div>
  )
}

export default AdminPanel
