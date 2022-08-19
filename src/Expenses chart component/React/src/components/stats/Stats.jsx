import Chart from "./components/Chart";
import Total from "./components/Total";

const Stats = () => {
  return (
    <div className="flex flex-col justify-center bg-[#FFFAF5] rounded-2xl w-[350px] sm:w-[430px] p-6">
      <div className="text-2xl font-bold text-[#382314] mb-6">
        Spending - Last 7 days
      </div>
      <div className="flex items-end sm:gap-4 gap-3">
        <Chart />
      </div>
      <hr className="my-6" />
      <Total />
    </div>
  );
};

export default Stats;
