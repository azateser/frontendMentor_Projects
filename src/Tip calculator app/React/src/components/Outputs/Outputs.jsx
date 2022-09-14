import React from "react";
import OutputResult from "./Result/OutputResult";
import ResetButton from "./Result/ResetButton";

const Outputs = ({ tipAmount, total, resetAll, isReset }) => {
  return (
    <div className="outputs">
      <div className="result-container">
        <OutputResult title="Tip Amount" desc="person" value={tipAmount} />
        <OutputResult title="Total" desc="person" value={total} />
      </div>

      <div>
        <div>
        <ResetButton resetAll={resetAll} isReset={isReset} />
        </div>
      </div>
    </div>
  );
};

export default Outputs;
