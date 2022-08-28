import imgHeroDesktop from '../../images/image-hero-desktop.png'
import imgHeroMobile from '../../images/image-hero-mobile.png'

import imgClient1 from '../../images/client-databiz.svg'
import imgClient2 from '../../images/client-audiophile.svg'
import imgClient3 from '../../images/client-meet.svg'
import imgClient4 from '../../images/client-maker.svg'

const Main = () => {
  return (
    <main className='flex lg:flex-row flex-col'>
            <div className='lg:w-1/2 w-full lg:ml-[10.5rem] lg:py-36 lg:pr-[10.5rem] lg:text-left text-center lg:mt-0 mt-12 lg:px-0 px-4'>
                <div className='lg:text-7xl text-3xl font-bold'>Make remote work</div>
                <div className='text-[#696969] lg:mt-16 mt-4 lg:text-lg text-sm'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</div>
                <div><button className='text-[#FAFAFA] bg-[#141414] rounded-2xl lg:px-8 px-6 lg:py-4 py-3 lg:text-lg text-base lg:mt-14 mt-8 hover:bg-transparent hover:text-[#141414] hover:border-2 hover:border-[#141414] transition-all'>Learn more</button></div>
                <div className='lg:mt-20 mt-8'>
                    <ul className='flex gap-10 items-center'>
                        <li><img src={imgClient1} alt="clinet-databiz" /></li>
                        <li><img src={imgClient2} alt="client-audiophile" /></li>
                        <li><img src={imgClient3} alt="client-meet" /></li>
                        <li><img src={imgClient4} alt="client-maker" /></li>
                    </ul>
                </div>
            </div>
            <div className='lg:w-1/2 w-full lg:mt-10 lg:order-last order-first'>
                <img className='w-3/4 lg:flex hidden' src={imgHeroDesktop} alt="" />
                <img className='lg:hidden flex' src={imgHeroMobile} alt="" />
                </div>
        </main>
  )
}

export default Main