import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.background.tertiary};
  padding: 17.5px 0;
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
