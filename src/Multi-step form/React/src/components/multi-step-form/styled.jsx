import styled from "styled-components";

export const MultiStepForm = styled.div`
  display: flex;
  gap: 12px;
  padding: 16px;
  background-color: var(--white);
  border-radius: 16px;
  min-height: 600px;
  min-width: 940px;
  margin-top: 105px;
  margin-bottom: 100px;
  box-shadow: 0 5px 10px 10px rgba(0, 0, 0, 0.02);

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    min-width: auto;
    min-height: auto;
    width: 100%;
    padding: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
    border-radius: 0px;
    box-shadow: none;
    background-color: transparent;
  }
`;
