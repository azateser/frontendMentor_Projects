
const Balance = () => {
  return (
    <div className="flex justify-between items-center bg-[#EC775F] rounded-2xl w-[350px] sm:w-[430px] p-6 text-white mb-5">
        <div>
          <div className="text-sm">My balance</div>
          <div className="font-bold text-2xl">$921.48</div>
        </div>
        <div className="flex">
          <div className="w-10 h-10 border-2 border-[#FFFAF5] rounded-full absolute -ml-5"></div>
          <div className="w-10 h-10 bg-[#382314] rounded-full"></div>
        </div>
      </div>
  )
}

export default Balance