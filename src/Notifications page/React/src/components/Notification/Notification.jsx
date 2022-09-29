import classNames from 'classnames';


const Notification = ({data}) => {
  return (
   
    <div>
        { data.map((data) => 
        <div key={data.id} className={classNames({
         "flex bg-very-light-grayish-blue md:gap-5 gap-2 px-4 py-4 mb-2 rounded-lg md:text-base text-sm": true,
         "!bg-white": data.status === 0
        })}>
        <div className='md:w-1/12 w-2/12'><img src={`assets/images/${data['proifle-pic']}`} alt="" /></div>
        <div className='md:w-11/12 w-full'>
            <div className='flex justify-between items-start'>
               <div className='flex flex-col'>
               <p className='items-center w-full'>
                 <a className='font-semibold cursor-pointer hover:text-primary-blue'>{data.name} </a>
                <span className='text-dark-grayish-blue'> {data.description} </span>
                {data.link && data.type !== "group" && <span className='font-semibold text-dark-grayish-blue cursor-pointer hover:text-primary-blue'> {data.link} </span>}
                {data.type === "group" && <a className='font-semibold text-primary-blue'> {data.link} </a>}
                <div className={classNames({
                 "bg-primary-red w-2 h-2 rounded-full inline-block ml-2": true,
                 "hidden": data.status === 0
                })}></div></p>
               <div>
               <div className='text-grayish-blue'>{data.time}</div>
               </div>
               </div>
               {data.photo && <div className='md:w-12 w-16 md:ml-0 ml-1 cursor-pointer'>
                 {data.photo && <img src={data.photo}></img>}
               </div>}
            </div>
            <div className='flex flex-col'>
             {data.message && <div className='border rounded-md mt-2 px-4 py-5 text-dark-grayish-blue leading-5 cursor-pointer hover:bg-light-grayish-blue-1 hover:border-light-grayish-blue-1 transition-all'>{data.message}</div>}
            </div>
        </div>
          
       </div>
       )}
    </div>

  )
}

export default Notification