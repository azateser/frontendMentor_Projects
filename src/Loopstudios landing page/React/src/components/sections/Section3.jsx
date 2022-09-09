import imgDeepEarth from '../../assets/images/desktop/image-deep-earth.jpg'
import imgNightArcade from '../../assets/images/desktop/image-night-arcade.jpg'
import imgSoccerTeam from '../../assets/images/desktop/image-soccer-team.jpg'
import imgGrid from '../../assets/images/desktop/image-grid.jpg'
import imgFromAbove from '../../assets/images/desktop/image-from-above.jpg'
import imgPocketBorealis from '../../assets/images/desktop/image-pocket-borealis.jpg'
import imgCuriosity from '../../assets/images/desktop/image-curiosity.jpg'
import imgFishEye from '../../assets/images/desktop/image-fisheye.jpg'

import imgDeepEarthM from '../../assets/images/mobile/image-deep-earth.jpg'
import imgNightArcadeM from '../../assets/images/mobile/image-night-arcade.jpg'
import imgSoccerTeamM from '../../assets/images/mobile/image-soccer-team.jpg'
import imgGridM from '../../assets/images/mobile/image-grid.jpg'
import imgFromAboveM from '../../assets/images/mobile/image-from-above.jpg'
import imgPocketBorealisM from '../../assets/images/mobile/image-pocket-borealis.jpg'
import imgCuriosityM from '../../assets/images/mobile/image-curiosity.jpg'
import imgFishEyeM from '../../assets/images/mobile/image-fisheye.jpg'

const Section3 = () => {
  return (
    <section className='lg:mb-[7.5rem] mb-12 lg:px-[10.28rem] px-6 py-16'>
      <div className='flex justify-between items-center lg:mb-20 mb-12 lg:text-left text-center'>
        <div className='font-josefin uppercase lg:text-5xl text-4xl lg:w-max w-full'>Our creations</div>
        <div className='lg:flex hidden lg:px-10 lg:py-[6px] uppercase tracking-[0.2rem] border-2 border-black w-max '>See All</div>
      </div>
      <div className='grid lg:grid-cols-4 grid-cols-1 gap-4'>
        <div className='cursor-pointer'>
          <img className='lg:flex hidden brightness-75 hover:grayscale transition-all relative cursor-pointer' src={imgDeepEarth} alt='' />
          <img className='lg:hidden flex brightness-75 hover:grayscale transition-all relative cursor-pointer' src={imgDeepEarthM} alt='' />
          <div className='absolute lg:-mt-24 -mt-16 leading-6 lg:ml-8 ml-6 font-josefin lg:text-3xl text-2xl uppercase lg:w-40 w-32 text-white'>
            Deep Earth
          </div>
        </div>
        <div>
          <img
            className='lg:flex hidden brightness-75 hover:grayscale transition-all relative cursor-pointer'
            src={imgNightArcade}
            alt='Night arcade'
          />
          <img
            className='lg:hidden flex brightness-75 hover:grayscale transition-all relative cursor-pointer'
            src={imgNightArcadeM}
            alt='Night arcade'
          />
          <div className='absolute lg:-mt-24 -mt-16 leading-6 lg:ml-8 ml-6 font-josefin lg:text-3xl text-2xl uppercase lg:w-40 w-32 text-white'>
            Night arcade
          </div>
        </div>
        <div>
          <img
            className='lg:flex hidden brightness-75 hover:grayscale transition-all relative cursor-pointer'
            src={imgSoccerTeam}
            alt=' Soccer team VR'
          />
          <img
            className='lg:hidden flex brightness-75 hover:grayscale transition-all relative cursor-pointer'
            src={imgSoccerTeamM}
            alt=' Soccer team VR'
          />
          <div className='absolute lg:-mt-24 -mt-16 leading-6 lg:ml-8 ml-6 font-josefin lg:text-3xl text-2xl uppercase lg:w-40 w-32 text-white'>
            Soccer team VR
          </div>
        </div>
        <div>
          <img
            className='lg:flex hidden brightness-75 hover:grayscale transition-all relative cursor-pointer'
            src={imgGrid}
            alt='The grid'
          />
          <img
            className='lg:hidden flex brightness-75 hover:grayscale transition-all relative cursor-pointer'
            src={imgGridM}
            alt='The grid'
          />
          <div className='absolute lg:-mt-24 -mt-16 leading-6 lg:ml-8 ml-6 font-josefin lg:text-3xl text-2xl uppercase lg:w-40 w-24 text-white'>
            The grid
          </div>
        </div>
        <div>
          <img
            className='lg:flex hidden brightness-75 hover:grayscale transition-all relative cursor-pointer'
            src={imgFromAbove}
            alt='From up above VR'
          />
          <img
            className='lg:hidden flex brightness-75 hover:grayscale transition-all relative cursor-pointer'
            src={imgFromAboveM}
            alt='From up above VR'
          />
          <div className='absolute lg:-mt-24 -mt-16 leading-6 lg:ml-8 ml-6 font-josefin lg:text-3xl text-2xl uppercase lg:w-40 w-32 text-white'>
            From up above VR
          </div>
        </div>
        <div>
          <img
            className='lg:flex hidden brightness-75 hover:grayscale transition-all relative cursor-pointer'
            src={imgPocketBorealis}
            alt='Pocket borealis'
          />
          <img
            className='lg:hidden flex brightness-75 hover:grayscale transition-all relative cursor-pointer'
            src={imgPocketBorealisM}
            alt='Pocket borealis'
          />
          <div className='absolute lg:-mt-24 -mt-16 leading-6 lg:ml-8 ml-6 font-josefin lg:text-3xl text-2xl uppercase lg:w-40 w-32 text-white'>
            Pocket borealis
          </div>
        </div>
        <div>
          <img
            className='lg:flex hidden brightness-75 hover:grayscale transition-all relative cursor-pointer'
            src={imgCuriosity}
            alt='The curiosity'
          />
          <img
            className='lg:hidden flex brightness-75 hover:grayscale transition-all relative cursor-pointer'
            src={imgCuriosityM}
            alt='The curiosity'
          />
          <div className='absolute lg:-mt-24 -mt-16 leading-6 lg:ml-8 ml-6 font-josefin lg:text-3xl text-2xl uppercase lg:w-40 w-32 text-white'>
            The curiosity
          </div>
        </div>
        <div>
          <img
            className='lg:flex hidden brightness-75 hover:grayscale transition-all relative cursor-pointer'
            src={imgFishEye}
            alt='Make it fisheye'
          />
          <img
            className='lg:hidden flex brightness-75 hover:grayscale transition-all relative cursor-pointer'
            src={imgFishEyeM}
            alt='Make it fisheye'
          />
          <div className='absolute lg:-mt-24 -mt-16 leading-6 lg:ml-8 ml-6 font-josefin lg:text-3xl text-2xl uppercase lg:w-40 w-32 text-white'>
            Make it fisheye
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center mt-10'>
        <div className='lg:hidden flex lg:px-10 px-12 lg:py-[6px] py-2 uppercase tracking-[0.2rem] border border-black w-max '>See All</div>
      </div>
    </section>
  )
}

export default Section3
