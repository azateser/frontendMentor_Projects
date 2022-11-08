import { useState } from "react";


const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <div className="flex items-center justify-between">
      <div>
        <img className="w-12 md:w-max" src="./assets/images/logo.svg" alt="" />
      </div>
      <div className="hidden md:flex">
        <ul className="flex gap-[2.7rem] text-dark-grayish-blue">
          <li className="cursor-pointer transition-all hover:text-soft-orange">Home</li>
          <li className="cursor-pointer transition-all hover:text-soft-orange">New</li>
          <li className="cursor-pointer transition-all hover:text-soft-orange">Popular</li>
          <li className="cursor-pointer transition-all hover:text-soft-orange">Trending</li>
          <li className="cursor-pointer transition-all hover:text-soft-orange">Categories</li>
        </ul>
      </div>
      <div onClick={() => setActiveMenu(true)} className="flex md:hidden">
        <img src="./assets/images/icon-menu.svg" alt="" />
      </div>
      {activeMenu && <div className="fixed top-0 left-0 h-screen w-full bg-black/50"></div>}
      {activeMenu && (
        <div className="fixed right-0 top-0 h-screen w-2/3 bg-off-white px-5 py-6">
          <div onClick={() => setActiveMenu(false)} className="flex justify-end">
            <img src="./assets/images/icon-menu-close.svg" alt="" />
          </div>
          <div className="mt-24">
            <ul className="flex flex-col gap-5 text-lg text-dark-grayish-blue">
              <li className="cursor-pointer transition-all hover:text-soft-orange">Home</li>
              <li className="cursor-pointer transition-all hover:text-soft-orange">New</li>
              <li className="cursor-pointer transition-all hover:text-soft-orange">Popular</li>
              <li className="cursor-pointer transition-all hover:text-soft-orange">Trending</li>
              <li className="cursor-pointer transition-all hover:text-soft-orange">Categories</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
