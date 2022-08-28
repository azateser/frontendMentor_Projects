import imgDownArrow from '../../../images/icon-arrow-down.svg'
import imgMobileMenuClose from '../../../images/icon-close-menu.svg'

import iconTodo from '../../../images/icon-todo.svg'
import iconCalendar from '../../../images/icon-calendar.svg'
import iconReminders from '../../../images/icon-reminders.svg'
import iconPlanning from '../../../images/icon-planning.svg'

import classNames from 'classnames'

const MobileMenu = ({featuresMobile, setFeaturesMobile, companyMobile, setCompanyMobile, mobileMenu, setMobileMenu}) => {
  return (
    <div className={classNames({
        'fixed top-0 left-0': true,
        'hidden': !mobileMenu
    })}>
        <div className='lg:hidden flex flex-col fixed  text-[#696969] bg-white shadow-xl h-screen w-2/3 right-0'>
            <div onClick={() => setMobileMenu(false)} className='mt-5 right-5 absolute'><img src={imgMobileMenuClose} alt="" /></div>
            <div className='mt-20 ml-8 text-base'>
                <ul>
                    <li onClick={() => setFeaturesMobile(!featuresMobile)} className='mb-6 hover:text-[#141414] transition-all '>Features <img className={classNames({
                        'inline-block transition-all duration-300': true,
                        'origin-center rotate-180': featuresMobile
                    })} src={imgDownArrow} alt="downArrow" /></li>
                    <div className={classNames({
                        'ml-6': true,
                        'hidden': !featuresMobile
                    })}>
                        <div className='flex items-center gap-3 mb-4'>
                            <div><img className='w-5' src={iconTodo} alt="" /></div>
                            <div className='mt-1 hover:text-[#141414] transition-all '>Todo List</div>
                        </div>
                        <div className='flex items-center gap-3 mb-4'>
                            <div><img className='w-5' src={iconCalendar} alt="" /></div>
                            <div className='mt-1 hover:text-[#141414] transition-all '>Calendar</div>
                        </div>
                        <div className='flex items-center gap-3 mb-4'>
                            <div><img className='w-5' src={iconReminders} alt="" /></div>
                            <div className='mt-1 hover:text-[#141414] transition-all '>Reminders</div>
                        </div>
                        <div className='flex items-center gap-3 mb-4'>
                            <div><img className='w-5' src={iconPlanning} alt="" /></div>
                            <div className='mt-1 hover:text-[#141414] transition-all '>Planning</div>
                        </div>
                    </div>
                    <li onClick={() => setCompanyMobile(!companyMobile)} className='mb-4 hover:text-[#141414] transition-all '>Company <img className={classNames({
                        'inline-block transition-all duration-300': true,
                        'origin-center rotate-180': companyMobile
                    })} src={imgDownArrow} alt="downArrow" /></li>
                    <div className={classNames({
                        'ml-6': true,
                        'hidden': !companyMobile
                    })}>
                        <div className='mb-4 hover:text-[#141414] transition-all '>
                            History
                        </div>
                        <div className='mb-4 hover:text-[#141414] transition-all '>
                            Our Team
                        </div>
                        <div className='mb-4 hover:text-[#141414] transition-all '>
                            Blog
                        </div>
                        
                    </div>
                    <li className='mb-4 hover:text-[#141414] transition-all '>Careers</li>
                    <li className='hover:text-[#141414] transition-all '>About</li>
                </ul>
            </div>
            <div className='flex flex-col items-center justify-center text-center text-base mt-12 '>
                <div>Login</div>
                <div className='mt-4 rounded-2xl border-2 border-[#696969] hover:border-[#141414] px-16 py-2 hover:text-[#141414] transition-all'>Register</div>
            </div>
        </div>
        <div className='lg:w-0 w-screen h-screen bg-black/70'></div>
    </div>
  )
}

export default MobileMenu