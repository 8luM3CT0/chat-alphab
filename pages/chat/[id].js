//front-end
import Head from 'next/head'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
//back-end
import getReceiver from '../../utilities/getReceiver'
import { useAuthState } from 'react-firebase-hooks/auth'
import { creds, store } from '../../firebase'

function ChatPage ({ chat, messages }) {
  const [user] = useAuthState(creds)

  return (
    <div className='overflow-hidden'>
      <Head>
        <title>Chat-area</title>
      </Head>
      <Header />
      <main className='flex'>
        <div className='hidden lg:inline-flex'>
          <Sidebar />
        </div>
        <div
          className='
        flex-1
        overflow-scroll
        scrollbar-hide
        h-[100vh]
        '
        >
          {/**ChatFeed */}
          <Feed />
        </div>
      </main>
    </div>
  )
}

export default ChatPage

export async function getServerSideProps (context) {
  const ref = store.collection('chats').doc(context.query.id)

  const chatRes = await ref.get()
  const chat = {
    id: chatRes.id,
    ...chatRes.data()
  }

  return {
    props: {
      chat: chat
    }
  }
}
