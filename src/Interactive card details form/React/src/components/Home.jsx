import React from "react";
import Left from "./Left/Left";
import Right from "./Right/Right";

import { useState } from "react";


const Home = () => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expDateMonth, setExpDateMouth] = useState("");
  const [expDateYear, setExpDateYear] = useState("");
  const [cvc, setCvc] = useState("");

  const changeCardName = (e) => setCardName(e.target.value);
  const changeCardNumber = (e) => setCardNumber(e.target.value);
  const changeExpDateMonth = (e) => setExpDateMouth(e.target.value.slice(0, 2));
  const changeExpDateYear = (e) => setExpDateYear(e.target.value.slice(0, 2));
  const changeCvc = (e) => setCvc(e.target.value.slice(0, 3));

  return (
    <div className="h-screen flex md:flex-row flex-col">
      
      <Left
        cardName={cardName}
        cardNumber={cardNumber}
        expDateMonth={expDateMonth}
        expDateYear={expDateYear}
        cvc={cvc}
      />
      <Right
        cardName={cardName}
        cardNumber={cardNumber}
        expDateMonth={expDateMonth}
        expDateYear={expDateYear}
        cvc={cvc}

        changeCardName={changeCardName}
        changeCardNumber={changeCardNumber}
        changeExpDateMonth={changeExpDateMonth}
        changeExpDateYear={changeExpDateYear}
        changeCvc={changeCvc}
        
      />
    </div>
  );
};

export default Home;
