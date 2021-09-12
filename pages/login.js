//front-end
import { UserCircleIcon } from '@heroicons/react/outline'
//back-end
import { creds, provider } from '../firebase'

function Login () {
  const logIn = () => {
    creds.signInWithPopup(provider).catch(alert)
  }

  return (
    <div
      className='
        grid 
        h-screen 
        place-items-center
        bg-white
        '
    >
      <div
        className='
            rounded-lg
            shadow-md
            p-[120px]
            place-items-center
            text-center
            bg-gray-50
            space-y-4
            grid
            '
      >
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Google_Chat_icon_%282020%29.svg/1200px-Google_Chat_icon_%282020%29.svg.png'
          alt=''
          className='mt-1 h-16 md:h-32'
        />
        <h2
          className='
          font-medium
          text-gray-500
          text-xl
          '
        >
          Hello!
        </h2>
        <h2
          className=' 
          font-light 
        text-gray-700 
        text-md'
        >
          To start, please login
        </h2>
        <button
          onClick={logIn}
          className='
        rounded-xl
        text-white
        bg-blue-600
        hover:bg-blue-500
        mt-3
        px-8
        py-2
        '
        >
          Sign in
        </button>
      </div>
    </div>
  )
}

export default Login
