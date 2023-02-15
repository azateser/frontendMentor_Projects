import React from "react";
import Step4 from "../step-4";

import * as S from "./styled";

function Step({
  component,
  onBack,
  handleSubmit,
  title,
  subtitle,
  hasBackButton,
  hasNextButton,
  children,
}) {
  return (
    <S.StepForm onSubmit={handleSubmit}>
      <S.StepHeader>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.StepHeader>
      <S.Body>{children}</S.Body>
      <S.StepFooter>
        {hasBackButton && (
          <S.BackStepButton onClick={onBack}>Go Back</S.BackStepButton>
        )}
        {hasNextButton && (
          <S.NextStepButton type="submit">Next Step</S.NextStepButton>
        )}
        {component === Step4 && (
          <S.ConfirmButton type="submit">Confirm</S.ConfirmButton>
        )}
      </S.StepFooter>
    </S.StepForm>
  );
}

export default Step;
