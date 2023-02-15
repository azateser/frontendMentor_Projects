import styled from "styled-components";

export const StepForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 40px 85px 15px 90px;

  @media only screen and (max-width: 900px) {
    box-shadow: 0 5px 10px 10px rgba(0, 0, 0, 0.02);
    background-color: var(--white);
    padding: 30px;
    width: 90%;
    border-radius: 16px;
    margin-top: -60px;
  }
`;

export const StepHeader = styled.div``;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 1px;

  @media only screen and (max-width: 900px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.h3`
  margin-top: 10px;
  color: var(--cool-gray);

  @media only screen and (max-width: 900px) {
    font-size: 14px;
  }
`;

export const Body = styled.div`
  flex: 1;
`;

export const StepFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BackStepButton = styled.button`
  color: var(--cool-gray);

  @media only screen and (max-width: 900px) {
    font-size: 14px;
  }

  &:hover {
    color: inherit;
  }
`;

export const NextStepButton = styled.button`
  margin-left: auto;
  background-color: var(--marine-blue);
  color: var(--white);
  padding: 16px 24px;
  border-radius: 8px;
  transition: all 200ms ease-in-out;

  @media only screen and (max-width: 900px) {
    padding: 14px 22px;
    font-size: 14px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const ConfirmButton = styled.button`
  margin-left: auto;
  background-color: var(--purplish-blue);
  color: var(--white);
  padding: 16px 32px;
  border-radius: 8px;
  transition: all 200ms ease-in-out;

  @media only screen and (max-width: 900px) {
    padding: 14px 22px;
    font-size: 14px;
  }

  &:hover {
    opacity: 0.8;
  }
`;
