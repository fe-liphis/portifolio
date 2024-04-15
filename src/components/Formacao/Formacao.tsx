import Xarrow from "react-xarrows";
import { Section } from "../UI/Section";
import {
  FormacaoTitulo,
  TimelineArrowContainer,
  TimelineDescriptionContainer,
  TimelineText,
  TimelineWrapper,
} from "./styles";

function Formacao() {
  return (
    <Section $bgColor="primary">
      <FormacaoTitulo>Formação</FormacaoTitulo>
      <TimelineWrapper>
        <TimelineDescriptionContainer>
          <TimelineText id="graduacao_date_start" $bold $paddingLeftAndRight>
            07/2023{" "}
          </TimelineText>
          <TimelineText id="graduacao_date_end" $bold $paddingLeftAndRight>
            {" "}
            12/2025{" "}
          </TimelineText>
          <Xarrow
            start={"graduacao_date_start"}
            end={"graduacao_date_end"}
            dashness={true}
            showHead={false}
            labels={
              <TimelineText $color="aqua" $paddingBottom>
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
          />
        </TimelineArrowContainer>
        <TimelineDescriptionContainer>
          <TimelineText $color="aqua" id="graduacao_name">
            Análise e desenvolvimento de sistemas <br /> Unicesumar
          </TimelineText>
          <TimelineText>Conclusão prevista</TimelineText>
        </TimelineDescriptionContainer>
      </TimelineWrapper>
    </Section>
  );
}

export default Formacao;
