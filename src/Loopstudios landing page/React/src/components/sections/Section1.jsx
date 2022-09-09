import imgLogo from '../../assets/images/logo.svg'

import iconClose from '../../assets/images/icon-close.svg'
import iconMenu from '../../assets/images/icon-hamburger.svg'

import { useState } from 'react'
import classNames from 'classnames'

const Section1 = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <div
        className={classNames({
          'fixed z-40 w-screen h-screen bg-black px-6 py-10': true,
          'hidden': !showMenu
        })}
      >
        <div className='flex justify-between items-center'>
          <div>
            <img className='w-3/4' src={imgLogo} alt='logo' />
          </div>
          <div onClick={() => setShowMenu(false)} className='cursor-pointer'>
            <img src={iconClose} alt='Close Menu' />
          </div>
        </div>
        <div className='mt-40'>
          <ul className='text-white font-josefin uppercase gap-4 flex flex-col text-2xl cursor-pointer'>
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </div>
      </div>
      <div className='lg:px-[10.28rem] px-6 lg:py-16 py-10 lg:bg-hero-desktop bg-hero-mobile bg-cover bg-no-repeat brightness-90 text-white'>
        <header className='flex items-center justify-between'>
          <div>
            <img className='lg:w-full w-3/4' src={imgLogo} alt='logo' />
          </div>
          <div>
            <ul className='lg:flex hidden gap-8'>
              <li className='hover:border-white border-b-2 border-transparent transition-all cursor-pointer'>About</li>
              <li className='hover:border-white border-b-2 border-transparent transition-all cursor-pointer'>Careers</li>
              <li className='hover:border-white border-b-2 border-transparent transition-all cursor-pointer'>Events</li>
              <li className='hover:border-white border-b-2 border-transparent transition-all cursor-pointer'>Products</li>
              <li className='hover:border-white border-b-2 border-transparent transition-all cursor-pointer'>Support</li>
            </ul>
            <img onClick={() => setShowMenu(true)} className='lg:hidden flex cursor-pointer' src={iconMenu} alt='Open Menu' />
          </div>
        </header>

        <section className='font-josefin lg:text-7xl text-[2.5rem] leading-10 uppercase border-2 border-white lg:mt-32 mt-40 lg:p-10 p-6 lg:w-7/12 lg:mb-16 mb-44'>
          Immersive experiences that deliver
        </section>
      </div>
    </>
  )
}

export default Section1
