import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

export const uploadImageToFirebase = async (file) => {
  try {
    const storage = getStorage() // Firebase Storage obyektini əldə edir
    const storageRef = ref(storage, `images/${file.name}-${Date.now()}`) // Unikal bir fayl adı yaradır
    const snapshot = await uploadBytes(storageRef, file) // Faylı yükləyir
    const downloadURL = await getDownloadURL(snapshot.ref) // Faylın URL-ni əldə edir
    return downloadURL
  } catch (error) {
    console.error('Error uploading image:', error)
    throw error
  }
}
