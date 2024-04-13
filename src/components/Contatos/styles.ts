import styled from "styled-components";

export const ContatosTitulo = styled.h4`
  font-size: ${({ theme }) => theme.sizes.text.title.lg};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: end;
  margin-bottom: 30px;

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

export const ContatosList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1000px) {
    gap: 15px;
  }
`;

export const ContatoItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 1000px) {
    gap: 15px;
  }

  @media (max-width: 425px) {
    gap: 10px;
  }
`;

export const ContatoLink = styled.a`
  font-size: ${({ theme }) => theme.sizes.text.default.m};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: bold;
  word-break: break-all;

  @media (max-width: 1000px) {
    font-size: ${({ theme }) => theme.sizes.text.default.x};
  }

  @media (max-width: 425px) {
    font-size: ${({ theme }) => theme.sizes.text.default.xx};
  }
`;

export const ContatoNome = styled.p`
  font-size: ${({ theme }) => theme.sizes.text.default.m};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: bold;
  word-break: break-all;

  @media (max-width: 1000px) {
    font-size: ${({ theme }) => theme.sizes.text.default.x};
  }

  @media (max-width: 425px) {
    font-size: ${({ theme }) => theme.sizes.text.default.xx};
  }
`;

export const ContatoImg = styled.img`
  @media (max-width: 1024px) {
    width: 45px;
  }

  @media (max-width: 768px) {
    width: 40px;
  }

  @media (max-width: 425px) {
    width: 35px;
  }
`;
