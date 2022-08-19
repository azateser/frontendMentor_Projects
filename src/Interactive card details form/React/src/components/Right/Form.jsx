import MaskInput from "react-maskinput";
import classNames from "classnames";

const Form = ({
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
  isSubmit,
  handleSubmit,
  isConfirm,
  handleConfirm,
}) => {
  return (
    <>
      <div
        className={classNames({
          "md:w-1/2 w-full": true,
          hidden: isSubmit,
        })}
      >
        <div className="flex flex-col md:mb-6 mb-2">
          <div className="text-[#21092F] tracking-[0.1rem] text-xs mb-2">
            CARDHOLDER NAME
          </div>
          <input
            className="border border-[#DEDDDF] rounded-lg py-2 pl-4 text-sm placeholder:text-[#DEDDDF] focus:border-[#6448FE] outline-none"
            type="text"
            placeholder="e.g. Jane Appleseed"
            onChange={changeCardName}
          />
        </div>

        <div className="flex flex-col md:mb-6 mb-2">
          <div className="text-[#21092F] tracking-[0.1rem] text-xs mb-2">
            CARD NUMBER
          </div>

          <MaskInput
            className={classNames({
              "border border-[#DEDDDF] rounded-lg py-2 pl-4 text-sm placeholder:text-[#DEDDDF] focus:border-[#6448FE] outline-none": true,
              "border-[#FF5252]": cardNumber.length < 19,
              "!border-[#DEDDDF]": null || cardNumber === "",
            })}
            autoComplete="off"
            placeholder="e.g. 1234 5678 9123 0000"
            maskChar="0"
            mask="0000 0000 0000 0000"
            size={20}
            onChange={changeCardNumber}
            id="cardNumber"
            onBlur={handleConfirm}
          />
          <label
            htmlFor="cardNumber"
            className={classNames({
              "text-xs mt-2 text-[#FF5252]": true,
              hidden: cardNumber.length >= 19 || cardNumber.length === 0,
            })}
          >
            Card number must be 20 digits.
          </label>
        </div>

        <div className="flex lg:flex-row flex-col md:gap-4 gap-2 justify-between">
          <div className="flex flex-col md:mb-6 mb-2">
            <div className="text-[#21092F] tracking-[0.1rem] text-xs mb-2">
              Exp. Date (MM/YY)
            </div>
            <div className="flex gap-2">
              <MaskInput
                className={classNames({
                  "lg:w-20 w-1/2 border border-[#DEDDDF] rounded-lg py-2 pl-4 text-sm placeholder:text-[#DEDDDF] focus:border-[#6448FE] outline-none": true,
                  "border-[#FF5252]":
                    expDateMonth.length < 2 || expDateMonth > 12,
                  "!border-[#DEDDDF]": expDateMonth === "",
                })}
                placeholder="MM"
                maskChar="0"
                mask="00"
                size={2}
                onChange={changeExpDateMonth}
                id="expDateMonth"
                onBlur={handleConfirm}
              />

              <MaskInput
                className={classNames({
                  "lg:w-20 w-1/2 border border-[#DEDDDF] rounded-lg py-2 pl-4 text-sm placeholder:text-[#DEDDDF] focus:border-[#6448FE] outline-none": true,
                  "border-[#FF5252]":
                    expDateYear.length < 2 || expDateYear < 22,
                  "!border-[#DEDDDF]": expDateYear === "",
                })}
                placeholder="YY"
                maskChar="0"
                mask="00"
                size={2}
                onChange={changeExpDateYear}
                id="expDateYear"
                onBlur={handleConfirm}
              />
            </div>
            <label
              htmlFor="expDateMonth"
              className={classNames({
                "text-xs mt-2 text-[#FF5252]": true,
                hidden: expDateMonth.length >= 2 || expDateMonth.length === 0,
                "!inline": expDateMonth > 12,
              })}
            >
              Enter a valid month.
            </label>
            <label
              htmlFor="expDateYear"
              className={classNames({
                "text-xs mt-2 text-[#FF5252]": true,
                hidden: expDateYear.length === 0 || expDateYear >= 22,
              })}
            >
              Enter a valid year.
            </label>
          </div>
          <div className="flex flex-col md:mb-6 mb-2">
            <div className="text-[#21092F] tracking-[0.1rem] text-xs mb-2">
              CVC
            </div>

            <MaskInput
              className={classNames({
                "lg:w-32 w-full border border-[#DEDDDF] rounded-lg py-2 pl-4 text-sm placeholder:text-[#DEDDDF] focus:border-[#6448FE] outline-none": true,
                "border-[#FF5252]": cvc.length < 3,
                "!border-[#DEDDDF]": cvc === "",
              })}
              placeholder={`e.g. 123`}
              maskChar="0"
              mask="000"
              size={3}
              onChange={changeCvc}
              id="cvc"
              onBlur={handleConfirm}
            />
            <label
              htmlFor="expDateYear"
              className={classNames({
                "text-xs mt-2 text-[#FF5252]": true,
                hidden: cvc.length === 0 || cvc.length >= 3,
              })}
            >
              Enter a valid CVC.
            </label>
          </div>
        </div>

        <button
          className={classNames({
            "bg-[#21092F] text-white w-full rounded-md text-center text-sm font-normal py-3 shadow-md cursor-pointer": true,
            "!bg-[#21092fbb] !cursor-not-allowed": !isConfirm,
          })}
          onClick={handleSubmit}
        >
          Confrim
        </button>
      </div>
    </>
  );
};

export default Form;
