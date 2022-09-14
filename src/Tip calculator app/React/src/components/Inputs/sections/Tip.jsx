import Button from '../components/Button'

const Tip = ({inputData, setInputData, tipHandler}) => {
  return (
    <div className='mt-12'>
    <div className='tip-title'>Select Tip %</div>
    <div className='tip-button-container'>
    <Button text="5%"  inputData={inputData} setInputData={setInputData} value={5} />
    <Button text="10%" inputData={inputData} setInputData={setInputData} value={10} />
    <Button text="15%" inputData={inputData} setInputData={setInputData} value={15} />
    <Button text="25%" inputData={inputData} setInputData={setInputData} value={25} />
    <Button text="50%" inputData={inputData} setInputData={setInputData} value={50} />
   <button className='tip-input-button'>
        <input onChange={tipHandler} value={inputData.tip} type="number" className='tip-input' placeholder='Custom' />
   </button>
    </div>
  </div>
  )
}

export default Tip