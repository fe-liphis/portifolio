import React from "react";
import { Section } from "../UI/Section";
import { ContatosTitulo } from "./styles";
import List from "./List";

function Contatos() {
  return (
    <Section $bgColor="secondary">
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
