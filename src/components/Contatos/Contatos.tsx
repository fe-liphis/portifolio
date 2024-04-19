import { Section } from "../UI/Section";
import { ContatosTitulo } from "./styles";
import List from "./List";
import { Element } from "react-scroll";

function Contatos() {
  return (
    <Element name="contatos">
      <Section $bgColor="secondary" id="contatos">
        <ContatosTitulo>Contatos</ContatosTitulo>
        <address>
          <nav>
            <List />
          </nav>
        </address>
      </Section>
    </Element>
  );
}

export default Contatos;
