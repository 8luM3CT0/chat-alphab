//front-end
import {
  SearchIcon,
  MenuIcon,
  ChevronDownIcon,
  QuestionMarkCircleIcon,
  CogIcon
} from '@heroicons/react/outline'
import { Apps } from '@material-ui/icons'
//back-end
import { creds, store } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

function Header () {
  const [user] = useAuthState(creds)

  return (
    <div
      className='
      bg-white
        top-0
        sticky
        z-50 
        flex
        items-center
        justify-betweeen
        border-b-2
        border-gray-200
        h-20
        px-3
        space-x-4
        '
    >
      {/**Logo */}
      <div
        className='
      flex-[0.3]
        flex
      items-center
      space-x-4
      ml-3
      '
      >
        <MenuIcon className='h-8 text-gray-500' />
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Google_Chat_icon_%282020%29.svg/1200px-Google_Chat_icon_%282020%29.svg.png'
          alt=''
          className='h-8 w-8  md:h-10 md:w-10'
        />
        <h2 className='hidden md:inline-flex text-3xl text-gray-500 '>Chat</h2>
      </div>
      {/**Search bar */}
      <div
        className='
      flex-[0.4]
      flex
      items-center
      rounded-md
      py-2
      px-3
      space-x-3
      bg-gray-100
      '
      >
        <SearchIcon className='hidden md:inline-flex h-7 text-gray-500' />
        <input
          placeholder='Search in chat'
          type='text'
          className='
        bg-transparent
        outline-none
        border-0
        flex-grow
        placeholder-gray-400
        '
        />
      </div>
      {/**User */}
      <div
        className='
      flex-[0.3]
      justify-end
      flex
      items-center
      space-x-3
      '
      >
        <span className='hidden cursor-pointer md:inline-flex px-7 py-2 rounded-full space-x-2 items-center border-2 border-gray-200'>
          <h2 className='text-xl text-gray-500'>Active</h2>
          <ChevronDownIcon className='h-5 text-gray-500' />
        </span>
        <QuestionMarkCircleIcon className='userIcons' />
        <CogIcon className='userIcons' />
        <Apps className='userIcons' />
        <img
          onClick={() => creds.signOut()}
          src={user?.photoURL}
          alt=''
          className='h-9 ml-4 mr-2 rounded-full cursor-pointer'
        />
      </div>
    </div>
  )
}

export default Header
