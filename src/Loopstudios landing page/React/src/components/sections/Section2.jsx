import imgInteractive from '../../assets/images/desktop/image-interactive.jpg'

const Section2 = () => {
  return (
    <section className='lg:h-96 lg:px-[10.2rem] px-6 lg:py-[10.2rem] py-24 lg:mb-[25rem]'>
      <div>
        <img src={imgInteractive} alt='Interactive' />
      </div>
      <div className='lg:absolute lg:-mt-80 bg-white lg:w-1/2 lg:right-0 lg:text-left text-center lg:px-28 lg:py-24'>
        <div className='font-josefin lg:text-5xl text-3xl uppercase lg:mt-0 mt-12'>The leader in interactive VR</div>
        <div className='text-[#8C8C8C] mt-6 lg:w-[28rem]'>
          Founded in 2011, Loopstudios has been producing world-className virtual reality projects for some of the best companies around the
          globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
        </div>
      </div>
    </section>
  )
}

export default Section2
