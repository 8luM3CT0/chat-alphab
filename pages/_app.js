//front-end
import '../styles/globals.css'
import Login from './login'
import ProgressBar from '@badrap/bar-of-progress'
//back-end
import { creds, store } from '../firebase'
import firebase from 'firebase'
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

function MyApp ({ Component, pageProps }) {
  const [user] = useAuthState(creds)

  const progress = new ProgressBar({
    size: 4,
    color: '#90ee90',
    className: 'z-50',
    delay: 100
  })

  useEffect(() => {
    if (user) {
      store
        .collection('peeps')
        .doc(user.uid)
        .set(
          {
            email: user.email,
            username: user.displayName,
            profilePhoto: user.photoURL,
            lastActive: firebase.firestore.FieldValue.serverTimestamp()
          },
          {
            merge: true
          }
        )
    }
  }, [user])

  if (!user) return <Login />

  return <Component {...pageProps} />
}

export default MyApp
