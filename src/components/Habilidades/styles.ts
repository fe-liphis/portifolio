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

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 7.5%;
  }

  @media (max-width: 425px) {
    font-size: ${({ theme }) => theme.sizes.text.title.xx};
  }
`;

export const ListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, min-content);
  align-items: center;
  justify-content: center;
  gap: 35px;

  @media (max-width: 1000px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, min-content);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, min-content);
  }

  @media (max-width: 375px) {
    gap: 12.5px;
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

  @media (max-width: 375px) {
    padding: 20px 15px;
  }
`;

export const ListItemIMG = styled.img`
  width: 125px;

  @media (max-width: 1400px) {
    width: 100px;
  }

  @media (max-width: 1000px) {
    width: 75px;
  }

  @media (max-width: 375px) {
    display: none;
  }
`;

export const ListItemLabel = styled.figcaption`
  font-size: ${({ theme }) => theme.sizes.text.default.m};
  font-weight: bold;

  @media (max-width: 1000px) {
    font-size: ${({ theme }) => theme.sizes.text.default.x};
  }

  @media (max-width: 375px) {
    font-size: ${({ theme }) => theme.sizes.text.default.xx};
  }
`;
