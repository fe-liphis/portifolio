import styled from "styled-components";
import theme from "../../styles/theme";

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

export const ExperienciasWrapper = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ExperienciaContainer = styled.li`
  background-color: ${({ theme }) => theme.colors.background.quinary};
  width: 800px;
  padding: 60px;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: 1280px) {
    width: 650px;
  }

  @media (max-width: 1024px) {
    box-sizing: border-box;
    width: 100%;
    padding: 50px;
  }

  @media (max-width: 768px) {
    padding: 40px;
    gap: 15px;
  }

  @media (max-width: 568px) {
    padding: 35px;
    border-radius: 35px;
  }

  @media (max-width: 425px) {
    padding: 30px;
  }

  @media (max-width: 320px) {
    padding: 25px;
  }
`;

export const NomeDoCargo = styled.h5`
  font-size: ${({ theme }) => theme.sizes.text.subtitle.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: bold;

  @media (max-width: 1280px) {
    font-size: ${({ theme }) => theme.sizes.text.subtitle.m};
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.sizes.text.subtitle.x};
  }

  @media (max-width: 568px) {
    font-size: ${({ theme }) => theme.sizes.text.subtitle.xx};
  }
`;

export const NomeDaEmpresa = styled.h6`
  font-size: ${({ theme }) => theme.sizes.text.default.m};
  color: ${({ theme }) => theme.colors.text.navyBlue};
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.sizes.text.default.x};
  }

  @media (max-width: 568px) {
    font-size: ${({ theme }) => theme.sizes.text.default.xx};
  }
`;

export const ItemDescritivo = styled.li`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.sizes.text.default.m};
  list-style: disc;
  text-align: justify;
  text-justify: inter-word;
  font-weight: 500;
  margin-bottom: 15px;

  @media (max-width: 1280px) {
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.sizes.text.default.xx};
    margin-bottom: 7.5px;
  }
`;

export const DescricaoContainer = styled.section`
  display: flex;
  gap: 50px;

  @media (max-width: 568px) {
    align-items: center;
    width: 100%;
  }
`;

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 568px) {
    flex-direction: row;
    width: 100%;
  }
`;

export const TimelineText = styled.p.attrs<{
  $color?: keyof typeof theme.colors.text;
  $bold?: boolean;
  $padding?: boolean;
  $timelineLabel?: boolean;
}>(({ $color = "principal", $bold, $padding, $timelineLabel }) => ({
  $color: $color,
  $bold: $bold,
  $padding: $padding,
  $timelineLabel: $timelineLabel,
}))`
  font-size: ${({ theme }) => theme.sizes.text.default.x};
  color: ${({ $color }) => $color && theme.colors.text[$color]};
  font-weight: ${({ $bold }) => $bold && "bold"};
  padding: ${({ $padding }) => $padding && "10px 0"};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.sizes.text.default.xx};
  }

  @media (max-width: 568px) {
    display: ${({ $timelineLabel }) => $timelineLabel && "none"};
    padding: ${({ $padding }) => $padding && "0 10px"};
  }
`;

export const DescricaoItemsContainer = styled.ul.attrs<{
  $visibility: boolean;
}>(({ $visibility }) => ({
  $visibility: $visibility,
}))`
  @media (max-width: 568px) {
    display: ${({ $visibility }) => ($visibility ? "block" : "none")};
  }
`;

export const Button = styled.button`
  display: none;
  font-size: ${({ theme }) => theme.sizes.text.default.x};
  background-color: transparent;
  font-weight: bold;
  border: none;

  @media (max-width: 568px) {
    display: block;
  }
`;
