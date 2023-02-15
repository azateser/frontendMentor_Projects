import styled from "styled-components";

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  height: 100%;
`;

export const Icon = styled.img`
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  font-size: 32px;
  color: var(--marine-blue);
  font-weight: 700;
`;

export const Description = styled.p`
  text-align: center;
  max-width: 50ch;
  color: var(--cool-gray);
  line-height: 1.6;
  margin-bottom: 20px;
`;
