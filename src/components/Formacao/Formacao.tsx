import Xarrow from "react-xarrows";
import { Section } from "../UI/Section";
import { FormacaoTitulo } from "./styles";

function Formacao() {
  return (
    <Section $bgColor="primary">
      <FormacaoTitulo>Formação</FormacaoTitulo>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div id="timeline_start"></div>
        <div id="timeline_end"></div>
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
      </div>
    </Section>
  );
}

export default Formacao;
