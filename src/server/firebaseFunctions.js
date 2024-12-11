// src/firebaseFunctions.js
import db from './firebase'
import { collection, addDoc, getDocs } from 'firebase/firestore'

export const addCountryBlog = async (blogData) => {
  const blogRef = collection(db, 'blogs', 'countryBlogs', 'entries')
  const newBlog = await addDoc(blogRef, blogData)
  return newBlog.id
}

export const addVisaBlog = async (blogData) => {
  const blogRef = collection(db, 'blogs', 'visaBlogs', 'entries')
  const newBlog = await addDoc(blogRef, blogData)
  return newBlog.id
}

// Countries kolleksiyasını əldə etmək funksiyası
export const fetchCountriesBlogs = async () => {
  try {
    // 'blogs/countryBlogs/entries' subkoleksiyasını oxuyur
    const querySnapshot = await getDocs(
      collection(db, 'blogs', 'countryBlogs', 'entries')
    )
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  } catch (error) {
    console.error('Error fetching country blogs: ', error)
    throw error
  }
}

// Visa kolleksiyasını əldə etmək funksiyası
export const fetchVisaBlogs = async () => {
  try {
    // 'blogs/visaBlogs/entries' subkoleksiyasını oxuyur
    const querySnapshot = await getDocs(
      collection(db, 'blogs', 'visaBlogs', 'entries')
    )
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  } catch (error) {
    console.error('Error fetching visa blogs: ', error)
    throw error
  }
}
