import { useState } from 'react'

import Left from './Left/Left'
import Right from './Right/Right'

const Home = () => {
  const [date, setDate] = useState('Weekly')

  return (
    <div className='main-container'>
      <Left date={date} setDate={setDate} />
      <Right date={date} />
    </div>
  )
}

export default Home
