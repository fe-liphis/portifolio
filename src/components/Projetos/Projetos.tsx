import { Section } from "../UI/Section";
import List from "./List";
import { ProjetosTitulo } from "./styles";

function Projetos() {
  return (
    <Section $bgColor="primary">
      <ProjetosTitulo>Projetos</ProjetosTitulo>
      <List />
    </Section>
  );
}

export default Projetos;