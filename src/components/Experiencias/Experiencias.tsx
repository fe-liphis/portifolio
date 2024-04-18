import Xarrow from "react-xarrows";
import { Section } from "../UI/Section";
import List from "./List";
import {
  Button,
  DescricaoContainer,
  ExperienciaContainer,
  ExperienciasTitulo,
  ExperienciasWrapper,
  NomeDaEmpresa,
  NomeDoCargo,
  TimelineContainer,
  TimelineText,
} from "./styles";
import useMediaMatches from "../Formacao/hook";
import { useState } from "react";
import Modal from "../UI/Modal";

function Experiencias() {
  const matches = useMediaMatches("(max-width: 568px)");

  const [modalIsVisible, setModalIsVisible] = useState(false);

  function handleOnClick() {
    setModalIsVisible((prevState) => !prevState);
  }

  return (
    <Section $bgColor="secondary">
      <ExperienciasTitulo>Experiências</ExperienciasTitulo>
      <ExperienciasWrapper>
        <ExperienciaContainer>
          <NomeDoCargo>Estágio em desenvolvimento front-end</NomeDoCargo>
          <NomeDaEmpresa>Compass.UOL, Remoto</NomeDaEmpresa>
          <DescricaoContainer>
            <TimelineContainer>
              <TimelineText id="data_final" $padding $bold>
                04/2024
              </TimelineText>
              <TimelineText id="data_inicio" $padding $bold>
                11/2023
              </TimelineText>
              <Xarrow
                start={"data_inicio"}
                end={"data_final"}
                lineColor={"white"}
                dashness={true}
                labels={
                  <TimelineText $color="navyBlue" $bold $timelineLabel>
                    5 meses
                  </TimelineText>
                }
                headShape={"circle"}
                headSize={5}
                headColor={"white"}
                showHead={!matches}
              />
            </TimelineContainer>
            <List
              descricao="Estágio focado em aprofundar os conhecimentos em AWS e React com uma trilha de aprendizado em sprints de 1 semana;
              Aprender sobre como é trabalhar em modelo ágil com Scrum e Kanban em prática;
              Criar códigos em JavaScript e TypeScript com as boas práticas de versionamento;
              Construir aplicações com React utilizando Redux e rotas inteligentes com React Router;
              Construir testes unitários utilizando Vitest e Jest e entender como funciona TDD;
              Estudos para a realização da prova de Certificação de Cloud Practitioner da AWS;"
            />
          </DescricaoContainer>
          <Button onClick={handleOnClick}>Ver Descricao</Button>
          {modalIsVisible && (
            <Modal visibility={modalIsVisible} setVisibility={handleOnClick}>
              <List
                descricao="Estágio focado em aprofundar os conhecimentos em AWS e React com uma trilha de aprendizado em sprints de 1 semana;
              Aprender sobre como é trabalhar em modelo ágil com Scrum e Kanban em prática;
              Criar códigos em JavaScript e TypeScript com as boas práticas de versionamento;
              Construir aplicações com React utilizando Redux e rotas inteligentes com React Router;
              Construir testes unitários utilizando Vitest e Jest e entender como funciona TDD;
              Estudos para a realização da prova de Certificação de Cloud Practitioner da AWS;"
              modalVisibility
              />
            </Modal>
          )}
        </ExperienciaContainer>
      </ExperienciasWrapper>
    </Section>
  );
}

export default Experiencias;
