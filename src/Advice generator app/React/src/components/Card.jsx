import { useState, useEffect } from "react";

import iconDice from "../images/icon-dice.svg";
import patternDividerDesktop from "../images/pattern-divider-desktop.svg";
import patternDividerMobile from "../images/pattern-divider-mobile.svg";
import imgSpinner from "../images/spinner.svg";

const Card = () => {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState();
  const [spinner, setSpinner] = useState(false);

  const getAdvice = async () => {
    setSpinner(true);
    try {
      // no-cache because the api caches the advice for 2 seconds.
      const response = await fetch("https://api.adviceslip.com/advice", {
        cache: "no-cache",
      });

      const data = await response.json();

      setAdvice(data.slip.advice);
      setAdviceId(data.slip.id);
    } catch (err) {
      console.log(err);
    }
    setSpinner(false);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="card">

      {spinner && (
        <div className="mb-12">
          <img src={imgSpinner} alt="" />
        </div>
      )}

      {!spinner && (
        <>
          <div className="advice_id">ADVICE #{adviceId}</div>
          <div className="advice_text">"{advice}"</div>
        </>
      )}
      
      <div className="divider">
        <div>
          <img className="divider_desktop" src={patternDividerDesktop} alt="" />
        </div>
        <div>
          <img className="divider_mobile" src={patternDividerMobile} alt="" />
        </div>
      </div>
      <div onClick={() => getAdvice()} className="getAdvice_button">
        <img src={iconDice} alt="" />
      </div>
    </div>
  );
};

export default Card;
