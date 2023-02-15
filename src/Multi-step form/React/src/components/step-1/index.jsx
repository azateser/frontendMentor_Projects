import React from "react";
import Step from "../step";
import FormsJSON from "../../form.json";

import * as S from "./styled";

const { step1 } = FormsJSON;

function Step1({ goToStep, formData, ...props }) {
  const hasError = false;

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formProperties = Object.fromEntries(formData);
    goToStep("step1", "step2", formProperties);
  };

  return (
    <Step {...props} handleSubmit={onSubmit}>
      <S.Step1>
        {step1.map((item) => (
          <S.FormItem key={item.id} hasError={hasError}>
            <S.Label>{item.label}</S.Label>
            <S.Input
              defaultValue={formData.step1[item.id]}
              id={item.id}
              name={item.id}
              type={item.type}
              placeholder={item.placeholder}
            />
            {hasError && (
              <S.ErrorMessage>This field is required</S.ErrorMessage>
            )}
          </S.FormItem>
        ))}
      </S.Step1>
    </Step>
  );
}

export default Step1;
