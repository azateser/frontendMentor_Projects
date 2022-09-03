import classNames from 'classnames'

import imgAvatar from '../../assets/images/image-jeremy.png'

const Left = ({ date, setDate }) => {
  return (
    <div className='left'>
      <div className='container'>
        <div className='top'>
          <div className='avatar'>
            <img src={imgAvatar} alt='jeremy-avatar' />
          </div>
          <div className='left-name-area'>
            <div className='top'>Report for</div>
            <div className='name'>Jeremy Robson</div>
          </div>
        </div>
        <div className='left-bottom'>
          <ul className='list'>
            <li
              onClick={() => setDate('Daily')}
              className={classNames({
                'daily': true,
                'day-hover': date === 'Daily'
              })}
            >
              Daily
            </li>
            <li
              onClick={() => setDate('Weekly')}
              className={classNames({
                'weekly': true,
                'day-hover': date === 'Weekly'
              })}
            >
              Weekly
            </li>
            <li
              onClick={() => setDate('Monthly')}
              className={classNames({
                'monthly': true,
                'day-hover': date === 'Monthly'
              })}
            >
              Monthly
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Left
