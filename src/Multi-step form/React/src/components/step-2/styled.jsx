import styled, { css } from "styled-components";

export const Step2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 16px;
`;

export const RadioGroup = styled.div`
  width: 100%;
  display: flex;
  gap: 18px;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const RadioLabel = styled.label`
  flex: 1;
  border: 1px solid var(--light-gray);
  padding: 18px;
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 200ms ease;

  @media only screen and (max-width: 900px) {
    display: flex;
    gap: 24px;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: var(--alabaster);
      border-color: var(--purplish-blue);
    `}

  &:hover {
    border-color: var(--purplish-blue);
  }
`;

export const RadioInput = styled.input`
  display: none;
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Icon = styled.img`
  margin-bottom: 42px;
  @media only screen and (max-width: 900px) {
    margin-bottom: 0;
  }
`;

export const Title = styled.div`
  font-weight: 700;
`;

export const Subtitle = styled.div`
  font-size: 14px;
  color: var(--cool-gray);
`;

export const Description = styled.p`
  font-size: 12px;
  color: var(--cool-gray);
`;

export const BillingGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: center;
  background-color: var(--alabaster);
  padding: 12px 0;
  border-radius: 8px;
  margin-top: 14px;
`;

export const BillingText = styled.span`
  ${({ isSelected }) =>
    isSelected &&
    css`
      font-weight: 500;
    `}
`;

export const BillingLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const BillingSpan = styled.span`
  position: relative;
  width: 42px;
  height: 20px;
  background: var(--marine-blue);
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`;

export const BillingInput = styled.input`
  opacity: 0;
  position: absolute;
  display: none;

  &:checked + ${BillingSpan} {
    &:before {
      transform: translate(20px, -50%);
    }
  }
`;
