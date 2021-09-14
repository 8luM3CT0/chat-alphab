//front-end
import styled from 'styled-components'
import TimeAgo from 'timeago-react'
//back-end
import { useAuthState } from 'react-firebase-hooks/auth'
import { creds } from '../../firebase'

function Message ({ user, message }) {
  const [userLoggedIn] = useAuthState(creds)

  return (
    <div
      className='
        p-8
        flex 
        items-center 
        space-x-3 
        min-w-[120px] 
        lg:min-w-[190px]
        hover:bg-gray-200
        rounded-full
        '
    >
      <img
        src={message?.photoURL}
        alt=''
        className='h-8 lg:h-12 rounded-full'
      />
      <div>
        <div>
          <div className='flex items-center space-x-3'>
            <h3
              className='
          text-lg 
          font-bold 
          text-gray-700'
            >
              {message.displayName}
            </h3>
            <p className='text-gray-300 font-normal text-sm'>
              <TimeAgo datetime={message.timestamp} />
            </p>
          </div>

          <h3 className='text-md font-medium'>{message.message}</h3>
        </div>
      </div>
    </div>
  )
}

export default Message
