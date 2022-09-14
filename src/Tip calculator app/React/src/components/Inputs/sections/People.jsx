import iconPerson from '../../../assets/images/icon-person.svg'

const People = ({peopleHandler, inputData}) => {
  return (
    <div className='mt-8'>
    <div className='people-title'>Number of people</div>
      <div className='people-container'>
        <label htmlFor="people_input" className='people-icon'>
          <img className='w-3' src={iconPerson} alt="" />
        </label>
        <input onChange={peopleHandler} value={inputData.people}  id="people_input" className='people-input' type="number" placeholder='0' />
      </div>
    </div>
  )
}

export default People