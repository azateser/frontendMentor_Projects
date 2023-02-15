import React, { useState } from "react";
import Step from "../step/index";
import FormsJSON from "../../form.json";

import * as S from "./styled";

import {
  Icons,
  DEFAULT_PLAN,
  DEFAULT_BILLING_TYPE,
  MONTHLY,
  YEARLY,
} from "./constants";

const { step2 } = FormsJSON;

function Step2({ goToStep, formData, ...props }) {
  const [plan, setPlan] = useState(formData.step2.plan ?? DEFAULT_PLAN);

  const [billingType, setBillingType] = useState(
    formData.step2.billingType ?? DEFAULT_BILLING_TYPE
  );

  const changePlan = (newPlan) => {
    setPlan(newPlan);
  };

  const changeBillingType = () => {
    if (billingType === MONTHLY) {
      setBillingType(YEARLY);
    } else {
      setBillingType(MONTHLY);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    goToStep("step2", "step3", {
      billingType,
      plan,
    });
  };

  return (
    <Step {...props} handleSubmit={onSubmit}>
      <S.Step2>
        <S.RadioGroup>
          {step2[billingType].map((item) => (
            <S.RadioLabel key={item.id} isSelected={item.id === plan.id}>
              <S.RadioInput
                name="plan-type"
                type="radio"
                onChange={() => changePlan(item)}
              />
              <S.Icon src={Icons[item.id]} />
              <S.TextGroup>
                <S.Title>{item.title}</S.Title>
                <S.Subtitle>{item.price}</S.Subtitle>

                {billingType === YEARLY && (
                  <S.Description>{item?.description}</S.Description>
                )}
              </S.TextGroup>
            </S.RadioLabel>
          ))}
        </S.RadioGroup>
        <S.BillingGroup>
          <S.BillingText isSelected={billingType === MONTHLY}>
            Monthly
          </S.BillingText>
          <S.BillingLabel>
            <S.BillingInput onChange={changeBillingType} type="checkbox" />
            <S.BillingSpan></S.BillingSpan>
          </S.BillingLabel>
          <S.BillingText isSelected={billingType === YEARLY}>
            Yearly
          </S.BillingText>
        </S.BillingGroup>
      </S.Step2>
    </Step>
  );
}

export default Step2;
