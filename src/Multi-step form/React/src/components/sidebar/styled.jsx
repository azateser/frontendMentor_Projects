import styled, { css } from "styled-components";

import SidebarBgDesktop from "../../assets/images/bg-sidebar-desktop.svg";
import SidebarBgMobile from "../../assets/images/bg-sidebar-mobile.svg";

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  background-image: url(${SidebarBgDesktop});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--white);
  width: 30%;
  padding-left: 32px;
  padding-top: 38px;
  border-radius: 8px;

  @media only screen and (max-width: 900px) {
    flex: 0;
    width: 100%;
    background-size: cover;
    flex-direction: row;
    padding: 12px;
    justify-content: center;
    border-radius: 0px;
    min-height: 150px;
    gap: 28px;
    background-image: url(${SidebarBgMobile});
  }
`;

export const ItemNumber = styled.span`
  min-width: 32px;
  min-height: 32px;
  border: 1px solid white;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;

  @media only screen and (max-width: 900px) {
    margin-top: -40px;
    min-width: 36px;
    min-height: 36px;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  ${ItemNumber} {
    ${({ isActive }) =>
      isActive &&
      css`
        background-color: var(--magnolia);
        color: var(--marine-blue);
        border-color: var(--magnolia);
      `}
  }
`;

export const ItemBody = styled.div``;

export const Subtitle = styled.h5`
  font-size: 12px;
  text-transform: uppercase;
  opacity: 0.6;
  margin-bottom: 2px;

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const Title = styled.h5`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;
