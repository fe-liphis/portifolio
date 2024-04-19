import { Section } from "../UI/Section";
import { ContatosTitulo } from "./styles";
import List from "./List";

function Contatos() {
  return (
    <Section $bgColor="secondary" id="contatos">
      <ContatosTitulo>Contatos</ContatosTitulo>
      <address>
        <nav>
          <List />
        </nav>
      </address>
    </Section>
  );
}

export default Contatos;
