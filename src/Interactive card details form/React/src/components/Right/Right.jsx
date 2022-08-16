import Complate from "./Complate";
import Form from "./Form";
import { useState } from "react";


const Right = ({
  cardName,
  cardNumber,
  expDateMonth,
  expDateYear,
  cvc,

  changeCardName,
  changeCardNumber,
  changeExpDateMonth,
  changeExpDateYear,
  changeCvc,
}) => {

    const [isSubmit, setIsSubmit] = useState(false);
    const [isConfirm, setIsConfrim ] = useState(false);

    const handleConfirm = function () {
        if (cardNumber.length > 16 && expDateMonth.length > 1 && expDateMonth <= 12 && expDateYear.length === 2 && expDateYear >= 22 && cvc.length === 3) {
            setIsConfrim(true);
        }else(setIsConfrim(false));
    }


    const handleSubmit = function () {
        if(isConfirm){
            setIsSubmit(true);
        }else{
            setIsSubmit(false);
        }
    }

  return (
    <div className="md:w-full flex flex-col justify-center items-center md:px-0 px-6 md:ml-32 md:mt-0 mt-16">
      <Form
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
        isSubmit={isSubmit}
        handleSubmit={handleSubmit}
        isConfirm={isConfirm}
        handleConfirm={handleConfirm}

      />
      <Complate isSubmit={isSubmit} isConfirm={isConfirm}  />
    </div>
  );
};

export default Right;
