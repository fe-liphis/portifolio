import React from "react";
import github_icon from "../../assets/contatos-icon/github.svg";
import linkedin_icon from "../../assets/contatos-icon/linkedin.svg";
import email_icon from "../../assets/contatos-icon/email.svg";
import { Section } from "../UI/Section";
import { ContatosTitulo } from "./styles";

function Contatos() {
  return (
    <Section $bgColor="secondary">
      <ContatosTitulo>Contatos</ContatosTitulo>
      <address>
        <nav>
          <ul>
            <li>
              <img src={github_icon} alt="" />
              <a href="https://www.linkedin.com/in/fe-liphis/">fe-liphis</a>
            </li>
            <li>
              <img src={linkedin_icon} alt="" />
              <a href="https://github.com/fe-liphis">fe-liphis</a>
            </li>
            <li>
              <img src={email_icon} alt="" />
              <p>felipeg.costaoliveira@gmail.com</p>
            </li>
          </ul>
        </nav>
      </address>
    </Section>
  );
}

export default Contatos;
