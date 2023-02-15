import React from "react";
import Step from "../step";

import * as S from "./styled";

import thankYouIcon from "../../assets/images/icon-thank-you.svg";

function Step5(props) {
  return (
    <Step {...props}>
      <S.Message>
        <S.Icon src={thankYouIcon} alt="Thank You Icon" />
        <S.Title>Thank you!</S.Title>
        <S.Description>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </S.Description>
      </S.Message>
    </Step>
  );
}

export default Step5;
