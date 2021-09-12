//front-end
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/outline'
import Chat from './chat/Chat'
//back-end
import { creds, store } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useState } from 'react'
import * as EmailValidation from 'email-validator'

function Sidebar () {
  const [user] = useAuthState(creds)
  const userChatRef = store
    .collection('chats')
    .where('users', 'array-contains', user.email)
  const [chatSnapshot] = useCollection(userChatRef)

  const addChat = () => {
    const input = prompt('Enter the mail of the person you want to chat:...')

    if (!input) return alert('Error: please enter the email again')

    if (EmailValidation.validate(input) && input !== user.email) {
      store.collection('chats').add({
        users: [user.email, input]
      })
    }
  }

  return (
    <div
      className='
      flex-1
      flex
      flex-col
      xl:max-w-[400px]
      xl:min-w-[360px]
      border-r-2
      border-gray-200
      h-screen
      bg-white
    '
    >
      {/**header */}
      <div
        className='
      top-0 
      sticky 
      z-50
      justify-between
      flex
      items-center
      space-x-3
      p-2
      '
      >
        <div className='flex items-center ml-2 space-x-2'>
          <ChevronDownIcon className='h-8 text-gray-600' />
          <h3 className='text-gray-600 text-lg'>Chat</h3>
        </div>
        <PlusIcon
          onClick={addChat}
          className='text-green-700 cursor-pointer mr-2 h-8 font-bold active:text-green-600'
        />
      </div>
      {/**user list */}
      <div
        className='
      h-[90vh]
      flex-col
      scrollbar-hide
      '
      >
        {chatSnapshot?.docs.map(chat => (
          <Chat key={chat.id} id={chat.id} users={chat.data().users} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
