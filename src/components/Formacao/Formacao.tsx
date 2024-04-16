import Xarrow from "react-xarrows";
import { Section } from "../UI/Section";
import useMediaMatches from "./hook";
import {
  FormacaoTitulo,
  TimelineArrowContainer,
  TimelineDescriptionContainer,
  TimelineText,
  TimelineWrapper,
} from "./styles";

function Formacao() {
  const matches = useMediaMatches("(max-width: 568px)");

  return (
    <Section $bgColor="primary">
      <FormacaoTitulo>Formação</FormacaoTitulo>
      <TimelineWrapper>
        <TimelineDescriptionContainer>
          <TimelineText id="graduacao_date_start" $paddingLeftAndRight>
            07/2023{" "}
          </TimelineText>
          <TimelineText id="graduacao_date_end" $paddingLeftAndRight>
            {" "}
            12/2025{" "}
          </TimelineText>
          <Xarrow
            start={"graduacao_date_start"}
            end={"graduacao_date_end"}
            dashness={true}
            showHead={false}
            labels={
              <TimelineText $color="aqua" $paddingBottom $bold>
                2° Semestre
              </TimelineText>
            }
            color="white"
            showTail={false}
          />
        </TimelineDescriptionContainer>
        <TimelineArrowContainer>
          <span id="timeline_start"></span>
          <span id="timeline_end"></span>
          <Xarrow
            start={"timeline_start"}
            end={"timeline_end"}
            lineColor={"white"}
            headShape={"arrow1"}
            headColor={"white"}
            tailShape={"circle"}
            tailColor={"white"}
            showTail={true}
            startAnchor={matches ? "bottom" : "left"}
            endAnchor={matches ? "top" : "right"}
          />
        </TimelineArrowContainer>
        <TimelineDescriptionContainer>
          <TimelineText
            $color="aqua"
            id="graduacao_name"
            $vertical={matches}
            $bold
          >
            Análise e desenvolvimento de sistemas <br /> Unicesumar
          </TimelineText>
          <TimelineText $vertical={matches}>Conclusão prevista</TimelineText>
        </TimelineDescriptionContainer>
      </TimelineWrapper>
    </Section>
  );
}

export default Formacao;
