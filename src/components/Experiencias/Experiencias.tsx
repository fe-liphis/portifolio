import { Section } from "../UI/Section";
import List from "./List";
import { ExperienciasTitulo, NomeDaEmpresa, NomeDoCargo } from "./styles";

function Experiencias() {
  return (
    <Section $bgColor="secondary">
      <ExperienciasTitulo>Experiências</ExperienciasTitulo>
      <ol>
        <li>
          <NomeDoCargo>Estágio em desenvolvimento front-end</NomeDoCargo>
          <NomeDaEmpresa>Compass.UOL, Remoto</NomeDaEmpresa>
          <List
            descricao="Estágio focado em aprofundar os conhecimentos em AWS e React com uma trilha de aprendizado em sprints de 1 semana;
            Aprender sobre como é trabalhar em modelo ágil com Scrum e Kanban em prática;
            Criar códigos em JavaScript e TypeScript com as boas práticas de versionamento;
            Construir aplicações com React utilizando Redux e rotas inteligentes com React Router;
            Construir testes unitários utilizando Vitest e Jest e entender como funciona TDD;
            Estudos para a realização da prova de Certificação de Cloud Practitioner da AWS;"
          />
        </li>
      </ol>
    </Section>
  );
}

export default Experiencias;
