import styled from "styled-components";
import theme from "../../styles/theme";

type SectionProps = {
  $bgColor: keyof typeof theme.colors.background;
};

export const Section = styled.section.attrs<SectionProps>((props) => ({
  $bgColor: props.$bgColor,
}))`
  background-color: ${({ $bgColor, theme }) =>
    theme.colors.background[$bgColor]};
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
