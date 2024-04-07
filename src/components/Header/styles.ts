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

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 50px;
  justify-content: center;
`;

export const HeaderLink = styled.a`
  font-size: ${(props) => props.theme.sizes.text.default.m};
  color: ${(props) => props.theme.colors.text.principal};
  text-decoration: none;
  font-weight: 400;
`;
