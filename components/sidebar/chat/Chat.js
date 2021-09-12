//front-end
import { DotsVerticalIcon, TrendingDownIcon } from '@heroicons/react/outline'
//back-end
import getReceiver from '../../../utilities/getReceiver'
import { creds, store } from '../../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useRouter } from 'next/router'

function Chat ({ id, users }) {
  const [user] = useAuthState(creds)
  const router = useRouter()
  const [receiverSnapshot] = useCollection(
    store.collection('peeps').where('email', '==', getReceiver(users, user))
  )
  const receiver = getReceiver(users, user)
  const receiverPhoto = receiverSnapshot?.docs?.[0]?.data()

  return (
    <div
      className='
    
    py-6
    flex 
    items-center 
    rounded-full
    cursor-pointer 
    justify-between 
    hover:bg-green-50'
    >
      <div
        onClick={() => router.push(`/chat/${id}`)}
        className='flex items-center space-x-3 ml-3'
      >
        {receiver ? (
          <img
            src={receiverPhoto?.profilePhoto}
            alt=''
            className='rounded-full h-10'
          />
        ) : (
          <img className='rounded-full h-10'>{receiver[0]}</img>
        )}
        <h2 className='font-semibold text-gray-400 text-md'>
          {receiverPhoto?.username}
        </h2>
      </div>
      <div className=' flex items-center space-x-3 mr-3'>
        <TrendingDownIcon className='text-gray-400 h-7' />
        <DotsVerticalIcon className='text-gray-400 h-7' />
      </div>
    </div>
  )
}

export default Chat
