import styled from "styled-components";

export const ProjetosTitulo = styled.h3`
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

  @media (max-width: 425px) {
    font-size: ${({ theme }) => theme.sizes.text.title.xx};
  }
`;

export const ProjetoList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, min-content);
  justify-content: space-between;
`;

export const ProjetoItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  gap: 15px;
  padding-top: 40px;
  padding-bottom: 20px;
  border-radius: 40px;
  box-shadow: 10px 15px 5px 0px rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 10px 15px 5px 0px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 10px 15px 5px 0px rgba(0, 0, 0, 0.19);
`;

export const ProjetoImg = styled.img`
  height: 200px;
`;

export const ProjetoLink = styled.a`
  font-size: ${({ theme }) => theme.sizes.text.default.m};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: bold;
  text-decoration: none;

  @media (max-width: 1000px) {
    font-size: ${({ theme }) => theme.sizes.text.default.x};
  }

  @media (max-width: 425px) {
    font-size: ${({ theme }) => theme.sizes.text.default.xx};
  }
`;
