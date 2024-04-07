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
`;

export const HabilidadesSection = styled.section`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  padding: 5% 15%;
`;

export const ListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, min-content);
  align-items: center;
  justify-content: center;
  gap: 50px;
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
`;

export const ListItemLabel = styled.figcaption`
  font-size: 24px;
  font-weight: bold;
`;
