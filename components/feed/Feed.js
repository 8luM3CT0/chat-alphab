//front-end
import {
  ChevronLeftIcon,
  SearchIcon,
  SwitchHorizontalIcon,
  EmojiHappyIcon,
  DocumentAddIcon,
  ExternalLinkIcon,
  ArchiveIcon,
  VideoCameraIcon,
  CalendarIcon,
  ArrowCircleRightIcon
} from '@heroicons/react/outline'
//back-end
import firebase from 'firebase'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import getReceiver from '../../utilities/getReceiver'
import { creds, store } from '../../firebase'
import { useState, useRef } from 'react'
import TimeAgo from 'timeago-react'

function Feed ({ chat, messages }) {
  const router = useRouter()
  const [user] = useAuthState(creds)
  const [receiverSnapshot] = useCollection(
    store
      .collection('peeps')
      .where('email', '==', getReceiver(chat.users, user))
  )
  const receiver = receiverSnapshot?.docs?.[0]?.data()
  const receiverEmail = getReceiver(chat.users, user)
  //message parts
  const [input, setInput] = useState('')

  const chatUser = e => {
    e.preventDefault()

    store
      .collection('peeps')
      .doc(user.uid)
      .set(
        {
          lastSeen: firebase.firestore.FieldValue.serverTimestamp()
        },
        { merge: true }
      )

    store
      .collection('chats')
      .doc(router.query.id)
      .collection('messages')
      .add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        messgae: input,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL
      })
    setInput('')
    //scrollBelow()
  }

  return (
    <div>
      {/**Feed header */}
      <div
        className='
      border-b-2
      border-gray-200
      sticky 
      top-0 
      z-50 
      flex
      space-x-3 
      items-center 
      justify-between 
      h-20'
      >
        <div className=' ml-5 flex space-x-4 items-center  text-gray-400'>
          <ChevronLeftIcon
            onClick={() => router.push('/')}
            className='h-10 cursor-pointer text-gray-600 active:text-gray-400 lg:hidden'
          />

          <img
            src={receiver?.profilePhoto}
            alt=''
            className='h-8 md:h-10 rounded-full'
          />
          <div className='flex-col ml-3'>
            <h2 className='text-xl text-gray-500 font-semibold'>
              {receiver?.username}
            </h2>
            {receiverSnapshot ? (
              <p className='text-md text-gray-400 font-light'>
                {receiver?.lastActive?.toDate() ? (
                  <TimeAgo datetime={receiver?.lastActive?.toDate()} />
                ) : (
                  'Unavailable'
                )}
              </p>
            ) : (
              <p className='text-md text-gray-400 font-light'>Loading...</p>
            )}
          </div>
        </div>
        <div className='mr-5 space-x-3 flex items-center'>
          <SearchIcon className='feedHeaderIcons' />
          <SwitchHorizontalIcon className='feedHeaderIcons' />
        </div>
      </div>
      {/**Chat feed */}
      <div
        className=' 
      h-[100vh]
      overflow-y-scroll
      scrollbar-hide
      '
      >
        {/**chatOutput() */}
      </div>
      <form
        className='
      h-20 
      flex 
      items-center 
      justify-center 
      sticky 
      bottom-0 
      z-50 
      bg-white '
      >
        <div
          className='
        flex-[0.7] 
        bg-gray-100 
        flex 
        self-center 
        items-center 
        rounded-full 
        h-20'
        >
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            type='text'
            placeholder='History is on'
            className='
            placeholder-shown:text-lg
            ml-4
            outline-none
            border-0
            flex-grow 
            placeholder-gray-400 
            bg-transparent'
          />
          <button onClick={chatUser} hidden disabled={!input} className=''>
            Send
          </button>
          <div className='justify-end flex items-center space-x-4 mr-3'>
            <EmojiHappyIcon className='headerIcon' />
            <DocumentAddIcon className='headerIcon' />
            <ExternalLinkIcon className='headerIcon' />
            <ArchiveIcon className='headerIcon' />
            <VideoCameraIcon className='headerIcon' />
            <CalendarIcon className='headerIcon' />
          </div>
        </div>
        <ArrowCircleRightIcon
          onClick={chatUser}
          disabled={!input}
          className='
        text-gray-300 
        active:text-gray-400 
        cursor-pointer 
        h-8 
        ml-3'
        />
      </form>
    </div>
  )
}

export default Feed
