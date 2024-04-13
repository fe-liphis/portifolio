import Xarrow from "react-xarrows";
import { Section } from "../UI/Section";
import { FormacaoTitulo } from "./styles";

function Formacao() {
  return (
    <Section $bgColor="primary">
      <FormacaoTitulo>Formação</FormacaoTitulo>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "1fr 1fr 1fr",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "60%",
            marginLeft: "auto",
            marginRight: "50px",
          }}
        >
          <p id="graduacao_date_start"> 07/2023 </p>
          <p id="graduacao_date_end"> 12/2025 </p>
          <Xarrow
            start={"graduacao_date_start"}
            end={"graduacao_date_end"}
            dashness={true}
            showHead={false}
            color="#57F7F2"
            showTail={false}
          />
        </div>
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "60%",
            marginLeft: "auto",
            alignItems: "center",
            marginRight: "50px",
          }}
        >
          <p id="graduacao_name">
            Análise e desenvolvimento de sistemas <br /> Unicesumar
          </p>
          <p>Conclusão prevista</p>
        </div>
      </div>
    </Section>
  );
}

export default Formacao;