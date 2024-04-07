import styled from "styled-components";

export const HabilidadesTitulo = styled.h2`
  font-size: ${({ theme }) => theme.sizes.text.title.lg};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.principal};
  margin-bottom: 15px;
`;
