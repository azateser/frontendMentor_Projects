import dataPart1 from '../../data/data.json'
import dataPart2 from '../../data/data2.json'

import imgDots from '../../assets/images/icon-ellipsis.svg'
import classNames from 'classnames'

const Right = ({ date }) => {
  const listItemsPart1 = dataPart1.map((data) => (
    <div
      className={classNames({
        'rounded-xl lg:ml-7 lg:mt-0 mt-6 lg:w-64 w-80': true,
        'bg-work': data.attributes === 'work',
        'bg-play': data.attributes === 'play',
        'bg-study': data.attributes === 'study',
        'bg-exercise': data.attributes === 'exercise',
        'bg-social': data.attributes === 'social',
        'bg-self_care': data.attributes === 'self_care'
      })}
    >
      <div className='flex items-center justify-end lg:h-12 h-10 mx-4 overflow-hidden'>
        <div
          className={classNames({
            'bg-center bg-no-repeat w-20 h-20 mt-2': true,
            'bg-img-work': data.attributes === 'work',
            'bg-img-play': data.attributes === 'play',
            'bg-img-study': data.attributes === 'study',
            'bg-img-exercise': data.attributes === 'exercise',
            'bg-img-social': data.attributes === 'social',
            'bg-img-self_care': data.attributes === 'self_care'
          })}
        ></div>
      </div>
      <div className='card'>
        <div className='flex items-center justify-between'>
          <div className='card-title'>{data.title}</div>
          <div>
            <img src={imgDots} alt='' />
          </div>
        </div>
        <div className='card-text-area'>
          <div className='card-hour'>
            {date === 'Daily' && `${data.timeframes.daily.current}hrs`}
            {date === 'Weekly' && `${data.timeframes.weekly.current}hrs`}
            {date === 'Monthly' && `${data.timeframes.monthly.current}hrs`}
          </div>
          <div className='card-previous'>
            {date === 'Daily' && `Last Day - ${data.timeframes.daily.previous}hrs`}
            {date === 'Weekly' && `Last Week - ${data.timeframes.weekly.previous}hrs`}
            {date === 'Monthly' && `Last Month - ${data.timeframes.monthly.previous}hrs`}
          </div>
        </div>
      </div>
    </div>
  ))

  const listItemsPart2 = dataPart2.map((data) => (
    <div
      className={classNames({
        'rounded-xl lg:ml-7 lg:mt-0 mt-6 lg:w-64 w-80': true,
        'bg-work': data.attributes === 'work',
        'bg-play': data.attributes === 'play',
        'bg-study': data.attributes === 'study',
        'bg-exercise': data.attributes === 'exercise',
        'bg-social': data.attributes === 'social',
        'bg-self_care': data.attributes === 'self_care'
      })}
    >
      <div className='flex items-center justify-end lg:h-12 h-10 mx-4 overflow-hidden'>
        <div
          className={classNames({
            'bg-center bg-no-repeat w-20 h-20 mt-2': true,
            'bg-img-work': data.attributes === 'work',
            'bg-img-play': data.attributes === 'play',
            'bg-img-study': data.attributes === 'study',
            'bg-img-exercise': data.attributes === 'exercise',
            'bg-img-social': data.attributes === 'social',
            'bg-img-self_care': data.attributes === 'self_care'
          })}
        ></div>
      </div>
      <div className='card'>
        <div className='flex items-center justify-between'>
          <div className='card-title'>{data.title}</div>
          <div>
            <img src={imgDots} alt='' />
          </div>
        </div>
        <div className='card-text-area'>
          <div className='card-hour'>
            {date === 'Daily' && `${data.timeframes.daily.current}hrs`}
            {date === 'Weekly' && `${data.timeframes.weekly.current}hrs`}
            {date === 'Monthly' && `${data.timeframes.monthly.current}hrs`}
          </div>
          <div className='card-previous'>
            {date === 'Daily' && `Last Day - ${data.timeframes.daily.previous}hrs`}
            {date === 'Weekly' && `Last Week - ${data.timeframes.weekly.previous}hrs`}
            {date === 'Monthly' && `Last Month - ${data.timeframes.monthly.previous}hrs`}
          </div>
        </div>
      </div>
    </div>
  ))
  return (
    <div>
      <div className='right'>{listItemsPart1}</div>
      <div className='right mt-8'>{listItemsPart2}</div>
    </div>
  )
}

export default Right
