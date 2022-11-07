import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <div className='shadow-md max-w-md m-auto flex flex-col gap-4 items-center p-4 sm:flex-row'>

      <div className='h-28 w-28'>

        <img src="https://i0.wp.com/mytechoffer.com/wp-content/uploads/2022/05/2e2fac9d4a392456e511345021592dd2.jpeg?resize=708%2C894&ssl=1" alt="" className='w-full h-full object-cover object-top rounded-full' />
      </div>

      <div className='basis-2/3'>
        <div className='mb-3 title relative'>Testando Tailwind</div>
        <blockquote className='text-xs'>
        I’ve written a few thousand words on why traditional “semantic class names” are the reason CSS is hard to maintain, but the truth is you’re never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance, I really think you’ll wonder how you ever worked with CSS any other way.
        </blockquote>
      </div>

    </div>


  )
}

export default App
