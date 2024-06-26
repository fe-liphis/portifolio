import styled from "styled-components";
import { Link } from "react-scroll";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.background.tertiary};
  padding: 17.5px 0;
  position: fixed;
  width: 100%;
  box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.4);
  z-index: 1000;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const HeaderNav = styled.nav.attrs<{ $isOpen: boolean }>((props) => ({
  $isOpen: props.$isOpen || false,
}))`
  display: flex;
  align-items: center;
  gap: 50px;
  justify-content: center;
  animation-duration: 1s;
  animation-name: opacity;

  @media (max-width: 1400px) {
    gap: 35px;
  }

  @media (max-width: 1000px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.$isOpen ? "flex" : "none")};
  }

  @media (max-width: 700px) {
    gap: 15px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
  }

  @keyframes opacity {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

export const HeaderLink = styled(Link)`
  font-size: ${(props) => props.theme.sizes.text.default.m};
  color: ${(props) => props.theme.colors.text.principal};
  text-decoration: none;
  font-weight: 400;
  cursor: pointer;
  transition: color 0.5s, font-weight 0.5s;

  &.active {
    color: ${(props) => props.theme.colors.text.orange};
    font-weight: bold;
  }

  @media (max-width: 1400px) {
    font-size: ${({ theme }) => theme.sizes.text.default.x};
  }

  @media (max-width: 1000px) {
    font-size: ${({ theme }) => theme.sizes.text.default.xx};
  }

  @media (max-width: 768px) {
    color: ${({ theme }) => theme.colors.text.principal};
  }

  @media (max-width: 700px) {
    font-size: 15px;
  }

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.sizes.text.default.xx};
  }
`;

export const MenuButton = styled.button.attrs<{ $color?: string }>((props) => ({
  $color: props.$color || props.theme.colors.text.principal,
}))`
  display: none;
  font-size: ${(props) => props.theme.sizes.text.default.m};
  border: none;
  background-color: transparent;
  color: ${(props) => props.$color};
  margin: auto;

  @media (max-width: 768px) {
    display: block;
  }

  @media (max-width: 700px) {
    font-size: ${(props) => props.theme.sizes.text.default.x};
  }
`;
