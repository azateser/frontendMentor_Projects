import complateIcon from '../../images/icon-complete.svg'

import classNames from 'classnames'

const Confrim = ({isSubmit}) => {
  return (
    <div className={classNames({
      'flex flex-col items-center justify-center md:w-1/2 w-full': true,
      'hidden': !isSubmit,
    })}>
      <div><img src={complateIcon} alt="complate" width={64} /></div>
      <div className='text-[#21092F] tracking-[0.15rem] text-2xl mt-6'>THANK YOU!</div>
      <div className='text-[#8E8593] text-sm mt-3 mb-8'>We've added your card details</div>
      <button className='bg-[#21092F] text-white w-full rounded-md text-center text-sm font-normal py-3 shadow-md cursor-pointer'>
      Continue
        </button>
    </div>
  )
}

export default Confrim