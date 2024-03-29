import React from "react";

import Step from "../step";

import * as S from "./styled";

function Step4({ goToStep, formData, ...props }) {
  const { billingType, plan } = formData.step2;
  const { selectedAddons } = formData.step3;

  const onSubmit = (e) => {
    e.preventDefault();

    goToStep("step4", "step5");
  };

  const changeBilling = () => {
    goToStep("step4", "step2");
  };

  return (
    <Step {...props} handleSubmit={onSubmit}>
      <S.Step4>
        <S.MainRow>
          <S.Title>
            {plan.title} ({billingType})
            <S.Change onClick={changeBilling}>Change</S.Change>
          </S.Title>
          <S.Price>{plan.price}</S.Price>
        </S.MainRow>
        {selectedAddons.length > 0 &&
          selectedAddons.map((item) => (
            <S.SubRow>
              <S.Title>{item.title}</S.Title>
              <S.Price>{item.price}</S.Price>
            </S.SubRow>
          ))}
        <S.TotalRow>
          <S.Title>Total (per {billingType})</S.Title>
          <S.TotalAmount>
            +$
            {selectedAddons.reduce(
              (acc, curr) => acc + curr.priceAmount,
              plan.priceAmount
            )}
            /{billingType === "monthly" ? "mo" : "yr"}
          </S.TotalAmount>
        </S.TotalRow>
      </S.Step4>
    </Step>
  );
}

export default Step4;
