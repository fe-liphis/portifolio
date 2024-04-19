import { Element } from "react-scroll";
import { Section } from "../UI/Section";
import List from "./List";
import { ProjetosTitulo } from "./styles";

function Projetos() {
  return (
    <Element name="projetos">
      <Section $bgColor="primary">
        <ProjetosTitulo>Projetos</ProjetosTitulo>
        <List />
      </Section>
    </Element>
  );
}

export default Projetos;
