import iconDollar from '../../../assets/images/icon-dollar.svg'


const Bill = ({billHandler, inputData}) => {
  return (
    <div>
      <div className='bill-title'>Bill</div>
      <div className='bill-container'>
        <label htmlFor='bill_input' className='bill-icon'>
          <img className='w-3' src={iconDollar} alt='' />
        </label>
        <input
          onChange={billHandler}
          value={inputData.bill}
          id='bill_input'
          className='bill-input'
          type='number'
          placeholder='0'
        />
      </div>
    </div>
  )
}

export default Bill
