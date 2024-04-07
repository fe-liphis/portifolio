import styled from "styled-components";

export const HabilidadesTitulo = styled.h2`
  font-size: ${({ theme }) => theme.sizes.text.title.lg};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: end;
  margin-bottom: 5%;

  @media (max-width: 1600px) {
    font-size: 70px;
  }

  @media (max-width: 1400px) {
    font-size: ${({ theme }) => theme.sizes.text.title.m};
  }

  @media (max-width: 1000px) {
    font-size: ${({ theme }) => theme.sizes.text.title.x};
  }
`;

export const HabilidadesSection = styled.section`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  padding: 5% 15%;

  @media (max-width: 1400px) {
    padding: 5% 12.5%;
  }

  @media (max-width: 900px) {
    padding: 5% 10%;
  }
`;

export const ListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, min-content);
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media (max-width: 1400px) {
    gap: 40px;
  }

  @media (max-width: 1200px) {
    gap: 35px;
  }

  @media (max-width: 1000px) {
    gap: 25px;
  }

  @media (max-width: 900px) {
    gap: 20px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.background.quaternary};
`;

export const ListItemIMG = styled.img`
  width: 150px;

  @media (max-width: 1600px) {
    width: 125px;
  }

  @media (max-width: 1400px) {
    width: 100px;
  }

  @media (max-width: 1000px) {
    width: 75px;
  }
`;

export const ListItemLabel = styled.figcaption`
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 1400px) {
    font-size: ${({ theme }) => theme.sizes.text.default.m};
  }

  @media (max-width: 1000px) {
    font-size: ${({ theme }) => theme.sizes.text.default.x};
  }
`;
