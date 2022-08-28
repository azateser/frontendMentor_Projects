import imgDownArrow from '../../../images/icon-arrow-down.svg'

import iconTodo from '../../../images/icon-todo.svg'
import iconCalendar from '../../../images/icon-calendar.svg'
import iconReminders from '../../../images/icon-reminders.svg'
import iconPlanning from '../../../images/icon-planning.svg'

import classNames from 'classnames'

const DesktopMenu = ({features, setFeatures, company, setCompany}) => {
  return (
    <div className='ml-16 text-[#696969] text-sm lg:flex hidden'>
            <ul className='flex gap-12'>
                <li onClick={() => setFeatures(!features)} className='relative hover:text-[#141414] transition-all cursor-pointer'>Features <img className='inline-block' src={imgDownArrow} alt="downArrow" /></li>
                <div className={classNames({
                    'absolute mt-10 -ml-16 bg-white shadow-xl px-2 py-4 rounded-lg': true,
                    'hidden': !features
                })}>
                    <div>
                        <div className='flex items-center gap-2 mb-1 px-4 py-1'>
                            <div><img className='w-4 inline-block' src={iconTodo} alt="" /> </div>
                            <div>Todo List</div>
                        </div>
                        <div className='flex items-center gap-2 mb-1 px-4 py-1'>
                            <div><img className='w-4 inline-block' src={iconCalendar} alt="" /> </div>
                            <div>Calendar</div>
                        </div>
                        <div className='flex items-center gap-2 mb-1 px-4 py-1'>
                            <div><img className='w-4 inline-block' src={iconReminders} alt="" /> </div>
                            <div>Reminders</div>
                        </div>
                        <div className='flex items-center gap-2 px-4 py-1'>
                            <div><img className='w-4 inline-block' src={iconPlanning} alt="" /> </div>
                            <div>Planning</div>
                        </div>
                    </div>
                </div>
                <li onClick={() => setCompany(!company)} className='relative hover:text-[#141414] transition-all cursor-pointer'>Company <img className='inline-block' src={imgDownArrow} alt="downArrow" /></li>
                <div className={classNames({
                    'absolute mt-10 ml-24 bg-white shadow-xl px-2 py-4 rounded-lg': true,
                    'hidden': !company
                })}>
                    <div>
                        <div className='flex items-center gap-2 mb-1 px-4 py-1'>
                            <div>History</div>
                        </div>
                        <div className='flex items-center gap-2 mb-1 px-4 py-1'>
                            <div>Our Team</div>
                        </div>
                        <div className='flex items-center gap-2 mb-1 px-4 py-1'>
                            <div>Blog</div>
                        </div>
                    </div>
                </div>
                <li className='hover:text-[#141414] transition-all cursor-pointer'>Careers</li>
                <li className='hover:text-[#141414] transition-all cursor-pointer'>About</li>
            </ul>
        </div>
  )
}

export default DesktopMenu