const Total = () => {
  return (
    <div className="flex justify-between items-end">
      <div>
        <div className="text-sm text-[#93867B]">Total this month</div>
        <div className="text-4xl font-bold text-[#382314]">$478.33</div>
      </div>
      <div className="flex flex-col items-end">
        <div className="text-[#382314] font-bold text-sm">+2.4%</div>
        <div className="text-[#93867B] text-base">from last month</div>
      </div>
    </div>
  );
};

export default Total;
