const Left = ({ cardName, cardNumber, expDateMonth, expDateYear, cvc }) => {
  return (
    <div className="flex flex-col md:bg-main-deskto bg-main-mobile bg-cover md:w-1/3 items-center justify-center relative">
      <div className="z-[2] bg-card-front md:w-[21.6rem] w-[20rem] md:h-[12rem] h-[11rem] md:top-auto md:left-auto top-24 left-6 p-5 md:ml-56 mt-12 absolute md:relative rounded-lg bg-cover shadow-lg">
        <div className="flex items-center gap-4 mb-12">
          <div className="bg-white w-9 h-9 rounded-full"></div>
          <div className="border border-white w-4 h-4 rounded-full"></div>
        </div>
        <div className="text-white md:text-2xl text-xl tracking-[0.12rem] font-normal mb-5">
          {cardNumber || "1234 5678 9123 0000"}
        </div>
        <div className="flex justify-between text-white text-xs tracking-[0.12rem] font-light uppercase">
          <div>{cardName || "Jane Appleseed"}</div>
          <div>{expDateMonth || "00"}/{expDateYear || "00"}</div>
        </div>
      </div>

      <div className="z-[1] relative bg-card-back md:w-[21.6rem] w-[20rem] md:h-[12rem] h-[11rem] md:mt-10 left-6 md:left-auto p-5 md:ml-[24rem] mt-10 mb-16 rounded-lg bg-cover shadow-lg">
        <div className="text-white items-center flex justify-end mr-3 -mt-[1px] h-full font-light text-xs tracking-[0.12rem]">
          {cvc || "000"}
        </div>
      </div>
    </div>
  );
};

export default Left;
