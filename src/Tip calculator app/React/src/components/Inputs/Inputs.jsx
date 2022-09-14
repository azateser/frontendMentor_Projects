import Bill from './sections/Bill'
import People from './sections/People'
import Tip from './sections/Tip'

const Inputs = ({ inputData, setInputData, billHandler, tipHandler, peopleHandler }) => {
  return (
    <div className='md:w-1/2'>
      <Bill billHandler={billHandler} inputData={inputData} />
      <Tip inputData={inputData} setInputData={setInputData} tipHandler={tipHandler} />
      <People peopleHandler={peopleHandler} inputData={inputData} />
    </div>
  )
}

export default Inputs
