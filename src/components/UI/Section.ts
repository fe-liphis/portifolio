import styled from "styled-components";

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  padding: 5% 15%;

  @media (max-width: 1400px) {
    padding: 5% 12.5%;
  }

  @media (max-width: 900px) {
    padding: 5% 10%;
  }

  @media (max-width: 768px) {
    padding: 7.5%;
  }
`;
