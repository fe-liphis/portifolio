import styled from "styled-components";

export const FormacaoTitulo = styled.h2`
  font-size: ${({ theme }) => theme.sizes.text.title.lg};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.principal};
  margin-bottom: 50px;

  @media (max-width: 1600px) {
    font-size: 70px;
  }

  @media (max-width: 1400px) {
    font-size: ${({ theme }) => theme.sizes.text.title.m};
  }

  @media (max-width: 1000px) {
    font-size: ${({ theme }) => theme.sizes.text.title.x};
  }

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 568px) {
    margin-bottom: 35px;
  }

  @media (max-width: 425px) {
    font-size: ${({ theme }) => theme.sizes.text.title.xx};
    margin-bottom: 20px;
  }
`;
