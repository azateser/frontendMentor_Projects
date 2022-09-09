import imgLogo from '../../assets/images/logo.svg'

import iconFacebook from '../../assets/images/icon-facebook.svg'
import iconTwitter from '../../assets/images/icon-twitter.svg'
import iconPinterest from '../../assets/images/icon-pinterest.svg'
import iconInstagram from '../../assets/images/icon-instagram.svg'

const Section4 = () => {
  return (
    <footer className='bg-black text-white lg:px-[10.28rem] py-12'>
      <div className='flex lg:flex-row flex-col lg:justify-between justify-center text-center items-center'>
        <div className='flex lg:justify-start justify-center'>
          <img className='w-3/4' src={imgLogo} alt='logo' />
        </div>
        <div>
          <ul className='lg:flex hidden items-center gap-4'>
            <li className='cursor-pointer hover:-translate-y-1 transition-all '>
              <img src={iconFacebook} alt='facebook-icın' />
            </li>
            <li className='cursor-pointer hover:-translate-y-1 transition-all '>
              <img src={iconTwitter} alt='twitter-icon' />
            </li>
            <li className='cursor-pointer hover:-translate-y-1 transition-all '>
              <img src={iconPinterest} alt='pinterest-icon' />
            </li>
            <li className='cursor-pointer hover:-translate-y-1 transition-all '>
              <img src={iconInstagram} alt='instagram-icon' />
            </li>
          </ul>
        </div>
      </div>
      <div className='mt-6 flex lg:flex-row flex-col lg:justify-between justify-center  items-center lg:items-end lg:text-[#8C8C8C] text-white'>
        <div>
          <ul className='flex lg:flex-row items-center flex-col lg:gap-8 gap-4'>
            <li className='hover:border-[#8C8C8C] border-b-2 border-transparent transition-all cursor-pointer'>About</li>
            <li className='hover:border-[#8C8C8C] border-b-2 border-transparent transition-all cursor-pointer'>Careers</li>
            <li className='hover:border-[#8C8C8C] border-b-2 border-transparent transition-all cursor-pointer'>Events</li>
            <li className='hover:border-[#8C8C8C] border-b-2 border-transparent transition-all cursor-pointer'>Products</li>
            <li className='hover:border-[#8C8C8C] border-b-2 border-transparent transition-all cursor-pointer'>Support</li>
          </ul>
        </div>
        <div>
          <ul className='lg:hidden flex mt-12 mb-4 items-center gap-4'>
            <li className='cursor-pointer hover:-translate-y-1 transition-all '>
              <img src={iconFacebook} alt='' />
            </li>
            <li className='cursor-pointer hover:-translate-y-1 transition-all '>
              <img src={iconTwitter} alt='' />
            </li>
            <li className='cursor-pointer hover:-translate-y-1 transition-all '>
              <img src={iconPinterest} alt='' />
            </li>
            <li className='cursor-pointer hover:-translate-y-1 transition-all '>
              <img src={iconInstagram} alt='' />
            </li>
          </ul>
        </div>
        <div className='lg:text-white text-[#8C8C8C]'>© 2021 Loopstudios. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Section4
