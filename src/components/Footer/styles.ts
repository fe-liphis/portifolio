import styled from "styled-components";

export const FooterTitulo = styled.h4`
  font-size: ${({ theme }) => theme.sizes.text.title.lg};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.principal};

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

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.background.primary};
  padding: 5% 15%;

  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 1400px) {
    padding: 5% 12.5%;
  }

  @media (max-width: 900px) {
    padding: 5% 10%;
    gap: 30px;
  }

  @media (max-width: 768px) {
    padding: 7.5%;
    gap: 25px;
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 600px) {
    align-items: center;
  }
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.text.principal};
  font-size: ${({ theme }) => theme.sizes.text.default.m};
  text-decoration: none;

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.sizes.text.default.x};
  }
`;

export const FooterArticle = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid white;
  padding-top: 20px;
  gap: 25px;

  a {
    @media (max-width: 768px) {
      font-size: ${({ theme }) => theme.sizes.text.default.x};
    }

    @media (max-width: 425px) {
      font-size: ${({ theme }) => theme.sizes.text.default.xx};
    }
  }
`;

export const FooterParagraph = styled.p`
  color: ${({ theme }) => theme.colors.text.principal};
  font-size: ${({ theme }) => theme.sizes.text.default.m};

  strong {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.sizes.text.default.x};
  }

  @media (max-width: 425px) {
    font-size: ${({ theme }) => theme.sizes.text.default.xx};
  }
`;
