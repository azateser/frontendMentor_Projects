import { useState, useEffect } from 'react'

import imgLogo from '../assets/images/logo.svg'

import Inputs from './Inputs/Inputs'
import Outputs from './Outputs/Outputs'

import './main.css'

const Home = () => {
  const [inputData, setInputData] = useState({
    bill: '',
    tip: '',
    people: ''
  })

  const resetAll = () => {
    isReset &&
      setInputData({
        bill: '',
        tip: '',
        people: ''
      })
  }

  const billHandler = (e) => {
    setInputData({ ...inputData, bill: Math.max(1, Math.min(9999999, Number(e.target.value))) })
  }

  const tipHandler = (e) => {
    setInputData({ ...inputData, tip: Math.max(0, Math.min(999, Number(e.target.value))) })
  }

  const peopleHandler = (e) => {
    setInputData({ ...inputData, people: Math.max(1, Math.min(999, Number(e.target.value))) })
  }

  // eslint-disable-next-line
  useEffect(() => {
    if (inputData.bill || inputData.tip || inputData.people) {
      setIsReset(true)
    } else setIsReset(false)
  })

  let tipAmount = (inputData.bill * inputData.tip) / 100 / inputData.people
  let total = (Number(inputData.bill) + (inputData.bill * inputData.tip) / 100) / Number(inputData.people)

  const [isReset, setIsReset] = useState(false)

  return (
    <div className='home-container'>
      <div>
        <img src={imgLogo} alt='logo' />
      </div>
      <div className='main-box'>
        <Inputs
          inputData={inputData}
          setInputData={setInputData}
          billHandler={billHandler}
          tipHandler={tipHandler}
          peopleHandler={peopleHandler}
        />
        <Outputs tipAmount={tipAmount} total={total} resetAll={resetAll} isReset={isReset} />
      </div>
    </div>
  )
}

export default Home
