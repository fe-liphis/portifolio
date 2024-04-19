import { Element } from "react-scroll";
import { Section } from "../UI/Section";
import List from "./List";
import { HabilidadesTitulo } from "./styles";

function Habilidades() {
  return (
    <Element name="habilidades">
      <Section $bgColor="secondary">
        <HabilidadesTitulo>Habilidades</HabilidadesTitulo>
        <List />
      </Section>
    </Element>
  );
}

export default Habilidades;
