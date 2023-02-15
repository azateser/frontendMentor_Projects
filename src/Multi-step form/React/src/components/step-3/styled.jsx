import styled, { css } from "styled-components";

export const Step3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 16px;
`;

export const Item = styled.label`
  display: flex;
  align-items: center;
  padding: 20px 18px;
  gap: 22px;
  border: 1px solid var(--cool-gray);
  border-radius: 8px;

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

export const Input = styled.input`
  &:not(:checked) {
    -moz-appearance: none;
    -webkit-appearance: none;
    -o-appearance: none;
    width: 18px;
    height: 18px;
    border: 1px solid var(--cool-gray);
    border-radius: 4px;
  }
  &:checked {
    width: 18px;
    height: 18px;
    accent-color: var(--purplish-blue);
    border-radius: 4px;
  }
`;

export const InputBody = styled.div`
  flex: 1;
`;

export const Title = styled.h4`
  font-weight: 500;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: var(--cool-gray);
`;

export const Price = styled.p`
  color: var(--purplish-blue);
`;
