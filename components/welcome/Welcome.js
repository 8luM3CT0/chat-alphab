//front-end
import { ChatAltIcon } from '@heroicons/react/outline'
//back-end

function Welcome () {
  return (
    <div
      className='
    hidden
    lg:grid
    place-items-center
    flex-grow 
    h-screen '
    >
      <div
        className='
      place-items-center
       grid 
      rounded-full
      bg-gray-200
      p-[150px]
      '
      >
        <ChatAltIcon
          className='
        h-32
        text-gray-500
        mb-5
        '
        />
        <h2 className='text-gray-700 font-semibold text-lg'>
          No conversation selected
        </h2>
      </div>
    </div>
  )
}

export default Welcome
