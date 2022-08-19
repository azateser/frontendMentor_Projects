const Chart = () => {
  const data = [
    { height: 10, day: "mon", balance: "$20.51" },
    { height: 20, day: "tue", balance: "$51.93" },
    { height: 32, day: "wed", balance: "$70.86" },
    { height: 16, day: "thu", balance: "$30.12" },
    { height: 14, day: "fri", balance: "$25.52" },
    { height: 24, day: "sat", balance: "$62.21" },
    { height: 16, day: "sun", balance: "$30.33" },
  ];
  return (
    <>
      {data.map(({ height, day, balance }) => [
        <div className="flex flex-col items-center  justify-start group cursor-pointer">
          <div className="bg-[#382314] text-[#FFFAF5] text-xs p-2 rounded-md font-bold -mt-10 absolute hidden group-hover:!block transition-all">
            {balance}
          </div>
          <div
            className={`w-8 sm:w-10 h-${height} bg-[#EC775F] rounded-md hover:bg-[#76B5BC] transition-colors`}
          ></div>
          <div className="text-[#93867B] text-sm">{day}</div>
        </div>,
      ])}
    </>
  );
};

export default Chart;
