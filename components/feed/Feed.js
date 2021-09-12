//front-end
import {
  ChevronLeftIcon,
  SearchIcon,
  SwitchHorizontalIcon
} from '@heroicons/react/outline'
//back-end
import { useRouter } from 'next/router'

function Feed ({ chat, messages }) {
  const router = useRouter()
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
      h-[78px]'
      >
        <div className=' ml-5 flex space-x-4 items-center  text-gray-400'>
          <ChevronLeftIcon
            onClick={() => router.push('/')}
            className='h-10 cursor-pointer text-gray-600 active:text-gray-400 lg:hidden'
          />
          <div className='flex-col ml-3'>
            <h2 className='text-xl text-gray-500 font-semibold'>Username</h2>
            <p className='text-md text-gray-400 font-light'>timestamp</p>
          </div>
        </div>
        <div className='mr-5 space-x-3 flex items-center'>
          <SearchIcon className='feedHeaderIcons' />
          <SwitchHorizontalIcon className='feedHeaderIcons' />
        </div>
      </div>
      {/**Chat feed */}
      <div className=' h-[90vh]'></div>
      <form className='h-20 sticky bottom-0 z-50 bg-white border-t-2 border-gray-300'></form>
    </div>
  )
}

export default Feed
