import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDVlRzfLEHgZDHF8brQyVqoQvIvgIkrcnA',
  authDomain: 'visamaz-69bdf.firebaseapp.com',
  projectId: 'visamaz-69bdf',
  storageBucket: 'visamaz-69bdf.firebasestorage.app',
  messagingSenderId: '521376424647',
  appId: '1:521376424647:web:d74bf4909c2c2e096b14e2',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
