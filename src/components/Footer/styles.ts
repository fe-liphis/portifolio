import styled from "styled-components";

export const FooterTitulo = styled.h4`
  font-size: ${({ theme }) => theme.sizes.text.title.lg};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.principal};
  margin-bottom: 15px;

  @media (max-width: 1600px) {
    font-size: 70px;
  }

  @media (max-width: 1400px) {
    font-size: ${({ theme }) => theme.sizes.text.title.m};
    margin-bottom: 10px;
  }

  @media (max-width: 1000px) {
    font-size: ${({ theme }) => theme.sizes.text.title.x};
    margin-bottom: 5px;
  }

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 20px;
  }

  @media (max-width: 425px) {
    font-size: ${({ theme }) => theme.sizes.text.title.xx};
  }
`;
