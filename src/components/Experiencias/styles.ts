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
    gap: 15px;
  }
`;

export const NomeDoCargo = styled.h5`
  font-size: ${({ theme }) => theme.sizes.text.default.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: bold;

  @media (max-width: 1280px) {
    font-size: 30px;
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.sizes.text.default.m};
  }
`;

export const NomeDaEmpresa = styled.h6`
  font-size: ${({ theme }) => theme.sizes.text.default.m};
  color: ${({ theme }) => theme.colors.text.navyBlue};
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 20px;
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
`;

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TimelineText = styled.p.attrs<{
  $color?: keyof typeof theme.colors.text;
  $bold?: boolean;
  $padding?: boolean;
}>(({ $color = "principal", $bold, $padding }) => ({
  $color: $color,
  $bold: $bold,
  $padding: $padding,
}))`
  font-size: ${({ theme }) => theme.sizes.text.default.x};
  color: ${({ $color }) => $color && theme.colors.text[$color]};
  font-weight: ${({ $bold }) => $bold && "bold"};
  padding: ${({ $padding }) => $padding && "10px 0"};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.sizes.text.default.xx};
  }
`;
