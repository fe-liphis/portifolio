import { Section } from "../UI/Section";
import List from "./List";
import { HabilidadesTitulo } from "./styles";

function Habilidades() {
  return (
    <Section $bgColor="secondary">
      <HabilidadesTitulo>Habilidades</HabilidadesTitulo>
      <List />
    </Section>
  );
}

export default Habilidades;
