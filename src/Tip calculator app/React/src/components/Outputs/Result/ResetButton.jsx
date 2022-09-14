import React from 'react'

const ResetButton = ({resetAll, isReset}) => {
  return (
    <button
    onClick={resetAll}
    disabled={isReset ? false : true}
    className="reset-button"
  >
    REST
  </button>
  )
}

export default ResetButton