import styled from "styled-components";
import theme from "../../styles/theme";

export const FormacaoTitulo = styled.h2`
  font-size: ${({ theme }) => theme.sizes.text.title.lg};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.principal};
  margin-bottom: 75px;

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

  @media (max-width: 568px) {
    margin-bottom: 50px;
  }

  @media (max-width: 425px) {
    font-size: ${({ theme }) => theme.sizes.text.title.xx};
    margin-bottom: 35px;
  }
`;

export const TimelineWrapper = styled.section`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  gap: 30px;
  width: 100%;

  @media (max-width: 1024px) {
    gap: 25px;
  }

  @media (max-width: 568px) {
    grid-template-columns: repeat(3, min-content);
    grid-template-rows: 1fr;
    justify-content: center;
    gap: 40px;
  }
`;

export const TimelineArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  @media (max-width: 568px) {
    padding: 0;
    height: 500px;
    flex-direction: column;
  }
`;

export const TimelineDescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 0 50px;

  @media (max-width: 568px) {
    padding: 0;
    height: 500px;
    flex-direction: column;
  }
`;

export const TimelineText = styled.p.attrs<{
  $color?: keyof typeof theme.colors.text;
  $bold?: boolean;
  $paddingLeftAndRight?: boolean;
  $paddingBottom?: boolean;
  $vertical?: boolean;
}>(
  ({
    $color = "principal",
    $bold,
    $paddingLeftAndRight,
    $paddingBottom,
    $vertical,
  }) => ({
    $color: $color,
    $bold: $bold,
    $paddingLeftAndRight: $paddingLeftAndRight,
    $paddingBottom: $paddingBottom,
    $vertical: $vertical,
  })
)`
  font-weight: ${({ $bold }) => ($bold ? "bold" : "normal")};
  color: ${({ $color }) => $color && theme.colors.text[$color]};
  font-size: ${({ theme }) => theme.sizes.text.default.m};
  text-align: center;
  padding: ${({ $paddingLeftAndRight }) => $paddingLeftAndRight && "0 10px"};
  padding-bottom: ${({ $paddingBottom }) => $paddingBottom && "40px"};

  @media (max-width: 1024px) {
    font-size: ${({ theme }) => theme.sizes.text.default.x};
  }

  @media (max-width: 568px) {
    padding: ${({ $paddingLeftAndRight }) => $paddingLeftAndRight && "5px 0"};
    padding-bottom: ${({ $paddingBottom }) => $paddingBottom && "0px"};
    writing-mode: ${({ $vertical }) => $vertical && "vertical-rl"};
    text-orientation: ${({ $vertical }) => $vertical && "mixed"};
  }
`;
