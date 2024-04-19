import { useTheme } from "styled-components";
import profile from "../../assets/profile.jpg";
import {
  ProfileIMG,
  ResumoParagrah,
  ResumoContainer,
  ResumoTitulo,
  Strong,
} from "./styles";

function Resumo() {
  const {
    colors: { text },
  } = useTheme();
  return (
    <ResumoContainer id="resumo">
      <section>
        <ResumoTitulo>Resumo</ResumoTitulo>
        <ResumoParagrah>
          Desenvolvedor de Software com 5 meses de experiência em front-end.
          Principais habilidades com <Strong color={text.aqua}>React.JS</Strong>
          , <Strong color={text.yellow}>JavaScript</Strong>,{" "}
          <Strong color={text.blue}>TypeScript</Strong> e sou certificado{" "}
          <Strong color={text.orange}>Cloud Practitioner AWS</Strong>.
        </ResumoParagrah>
      </section>
      <ProfileIMG src={profile} alt="Foto de Perfil" />
    </ResumoContainer>
  );
}

export default Resumo;
