import styled from "styled-components";

export const ExperienciasTitulo = styled.h3`
  font-size: ${({ theme }) => theme.sizes.text.title.lg};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: end;
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
    margin-bottom: 35px;
  }

  @media (max-width: 425px) {
    font-size: ${({ theme }) => theme.sizes.text.title.xx};
    margin-bottom: 20px;
  }
`;

export const NomeDoCargo = styled.h5`
  font-size: ${({ theme }) => theme.sizes.text.default.lg};
  font-weight: bold;
`;

export const NomeDaEmpresa = styled.h6`
  font-size: ${({ theme }) => theme.sizes.text.default.m};
  color: ${({ theme }) => theme.colors.text.navyBlue};
  font-weight: bold;
`;
