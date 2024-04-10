import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.background.tertiary};
  padding: 17.5px 0;
  position: fixed;
  width: 100%;
  box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.4);
`;

export const HeaderNav = styled.nav.attrs<{ $isOpen: boolean }>((props) => ({
  $isOpen: props.$isOpen || false,
}))`
  display: flex;
  align-items: center;
  gap: 50px;
  justify-content: center;

  @media (max-width: 1400px) {
    gap: 35px;
  }

  @media (max-width: 1000px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.$isOpen ? "block" : "none")};
  }
`;

export const HeaderLink = styled.a`
  font-size: ${(props) => props.theme.sizes.text.default.m};
  color: ${(props) => props.theme.colors.text.principal};
  text-decoration: none;
  font-weight: 400;

  @media (max-width: 1400px) {
    font-size: ${({ theme }) => theme.sizes.text.default.x};
  }

  @media (max-width: 1000px) {
    font-size: ${({ theme }) => theme.sizes.text.default.xx};
  }
`;

export const MenuButton = styled.button`
  display: none;
  font-size: ${(props) => props.theme.sizes.text.default.m};
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.text.principal};
  margin: auto;

  @media (max-width: 768px) {
    display: block;
  }
`;
