import { useState } from 'react'
import MobileMenu from './MobileMenu/MobileMenu'
import DesktopMenu from './DesktopMenu/DesktopMenu'

import imgLogo from '../../images/logo.svg'
import imgMobileMenu from '../../images/icon-menu.svg'

const Header = () => {
const [features,setFeatures] = useState(false);
const [company,setCompany] = useState(false);

const [mobileMenu, setMobileMenu] = useState(false);

const [featuresMobile,setFeaturesMobile] = useState(false);
const [companyMobile,setCompanyMobile] = useState(false);

  return (
    <header className='flex justify-between py-6 lg:px-10 px-6 items-center'>
       <MobileMenu featuresMobile={featuresMobile} setFeaturesMobile={setFeaturesMobile} companyMobile={companyMobile} setCompanyMobile={setCompanyMobile} mobileMenu={mobileMenu} setMobileMenu={setMobileMenu}  />
    <div className='flex'>
        <div><img src={imgLogo} alt="" /></div>
       <DesktopMenu features={features} setFeatures={setFeatures} company={company} setCompany={setCompany} mobileMenu={mobileMenu} />
    </div>
    <div className='flex items-center text-[#696969] text-base gap-10'>
        <div className='lg:flex hidden hover:text-[#141414] transition-all'><button>Login</button></div>
        <div className='lg:flex hidden'><button className='rounded-2xl border-2 border-[#696969] hover:border-[#141414] px-4 py-2 hover:text-[#141414] transition-all'>Register</button></div>
        <div onClick={() => setMobileMenu(true)} className='lg:hidden flex'><img src={imgMobileMenu} alt="mobileMenuIcon" /></div>
    </div>
</header>
  )
}

export default Header