import imgWomanDesktop from '../images/illustration-woman-online-desktop.svg'
import imgWomanMobile from '../images/illustration-woman-online-mobile.svg'
import imgBgPatternDesktop from '../images/bg-pattern-desktop.svg'
import imgBgPatternMobile from '../images/bg-pattern-mobile.svg'
import imgBoxDesktop from '../images/illustration-box-desktop.svg'
import imgDownIcon from '../images/icon-arrow-down.svg'

import Tabs from './Tabs';


function Home() {
    return (

            <div className="bg-white w-[900px] h-[500px] rounded-3xl grid grid-cols-1 md:grid-cols-2 relative shadow-2xl mx-5">
                <img src={imgBoxDesktop} alt="Box illustration desktop"
                     className="animate-bounce-slow  absolute -ml-24 mt-[12.5rem] z-20 hidden md:block" />
                    <div className="md:flex items-center relative overflow-hidden z-0 hidden">
                        <img src={imgWomanDesktop} alt="Desktop woman illustration"
                             className="-ml-14 overflow-hidden z-10 hidden md:block" />
                            <img src={imgBgPatternDesktop} alt=""
                                 className="absolute bottom-10 -left-40 transform scale-150 h-full hidden md:block" />
                    </div>
                    <div className="md:px-14 px-5">
                        <img src={imgWomanMobile} alt="Mobile woman illustration"
                             className="mt-[-6.25rem] mx-auto z-20 md:hidden"/>
                            <img src={imgBgPatternMobile} alt="Mobile pattern illustration"
                                 className="mt-[-6rem] mx-auto z-10 md:hidden" />
                                <h1 className="text-[32.5px] font-bold md:mt-14 mt-4 mb-2 md:mb-5 hidden md:block">FAQ</h1>
                                <h1 className="text-[32.5px] font-bold md:mt-14 mt-4 mb-2 md:mb-5 text-center md:hidden">FAQ</h1>
                              <Tabs />



                    </div>
            </div>


);
}

export default Home;