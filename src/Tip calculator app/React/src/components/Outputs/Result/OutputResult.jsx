import classNames from 'classnames'

const OutputResult = ({ title, desc, value }) => {
  return (
    <div className='result'>
      <div className='result-head'>
        <div className='result-title'>{title}</div>
        <div className='result-desc'>/ {desc}</div>
      </div>
      <div
        className={classNames({
          'result-value': true,
          '!text-red-600': value <= 0 || value === isNaN || value === Infinity
        })}
      >
        ${value >= 0 ? value.toFixed(2) : '0.00'}
      </div>
    </div>
  )
}

export default OutputResult
