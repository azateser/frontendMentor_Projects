const Main = () => {
  return (
    <div className="mt-8 grid grid-cols-3 gap-8 md:mt-[3.5rem]">
      <div className="col-span-3 md:col-span-2">
        <div>
          <img className="hidden md:inline-block" src="./assets/images/image-web-3-desktop.jpg" alt="" />
          <img className="inline-block md:hidden" src="./assets/images/image-web-3-mobile.jpg" alt="" />
        </div>
        <div className="mt-8 grid grid-cols-4 gap-4 md:gap-8">
          <div className="col-span-4 text-[2.5rem] font-extrabold leading-[2.5rem] text-very-dark-blue md:col-span-2 md:text-[3.6rem] md:leading-[3.5rem]">The Bright Future of Web 3.0?</div>
          <div className="col-span-4 text-dark-grayish-blue md:col-span-2">
            <div>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</div>
            <div className="mt-10 w-max cursor-pointer bg-soft-red px-9 py-4 text-sm font-bold uppercase tracking-[0.2rem] text-off-white transition-all hover:bg-very-dark-blue">Read more</div>
          </div>
        </div>
      </div>
      <div className="col-span-3 bg-very-dark-blue px-6 py-8 text-off-white md:col-span-1">
        <div className="text-4xl font-bold text-soft-orange">New</div>
        <div className="mt-8">
          <div className="cursor-pointer text-xl font-bold transition-all hover:text-soft-orange">Hydrogen VS Electric Cars</div>
          <div className="mt-2 text-grayish-blue">Will hydrogen-fueled cars ever catch up to EVs?</div>
          <hr className="mt-8 border-grayish-blue" />
        </div>
        <div className="mt-8">
          <div className="cursor-pointer text-xl font-bold transition-all hover:text-soft-orange">The Downsides of AI Artistry</div>
          <div className="mt-2 text-grayish-blue">What are the possible adverse effects of on-demand AI image generation?</div>
          <hr className="mt-8 border-grayish-blue" />
        </div>
        <div className="mt-8">
          <div className="cursor-pointer text-xl font-bold transition-all hover:text-soft-orange">Is VC Funding Drying Up?</div>
          <div className="mt-2 text-grayish-blue">Private funding by VC firms is down 50% YOY. We take a look at what that means.</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
