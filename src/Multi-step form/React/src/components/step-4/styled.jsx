import styled, { css } from "styled-components";

const rowCommonCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Step4 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24;
  margin-top: 12px;
`;

export const Title = styled.h4`
  color: var(--cool-gray);
`;

export const Change = styled.h4`
  color: var(--cool-gray);
  text-decoration: underline;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  width: max-content;
  margin-top: 2px;

  &:hover {
    color: var(--purplish-blue);
  }
`;

export const Price = styled.h6``;

export const MainRow = styled.div`
  ${rowCommonCss}

  background-color: var(--alabaster);
  padding: 24px;
  border-bottom: 1px solid var(--light-gray);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  ${Title} {
    color: var(--marine-blue);
    font-weight: 500;
  }
  ${Price} {
    font-weight: 700;
  }
`;

export const SubRow = styled.div`
  background-color: var(--alabaster);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 14px;
  ${rowCommonCss}
`;

export const TotalRow = styled.div`
  ${rowCommonCss}
  padding-top: 40px;
  padding-left: 24px;
  padding-right: 24px;
  font-size: 14px;
`;

export const TotalAmount = styled.h3`
  color: var(--purplish-blue);
  font-size: 20px;
  font-weight: 700;
`;
