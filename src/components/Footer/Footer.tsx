import {
  FooterArticle,
  FooterContainer,
  FooterLink,
  FooterNav,
  FooterParagraph,
  FooterTitulo,
  LinkHTML,
} from "./styles";

function Footer() {
  return (
    <FooterContainer>
      <FooterTitulo>Links</FooterTitulo>
      <FooterNav>
        <FooterLink to="resumo" smooth duration={500}>
          Resumo
        </FooterLink>
        <FooterLink to="habilidades" smooth duration={500}>
          Habilidades
        </FooterLink>
        <FooterLink to="formacao" smooth duration={500}>
          Formação
        </FooterLink>
        <FooterLink to="experiencias" smooth duration={500}>
          Experiências
        </FooterLink>
        <FooterLink to="projetos" smooth duration={500}>
          Projetos
        </FooterLink>
        <FooterLink to="contatos" smooth duration={500}>
          Contatos
        </FooterLink>
      </FooterNav>
      <FooterArticle>
        <FooterParagraph>
          <strong>@2024</strong> Felipe Gabriel Costa de Oliveira
        </FooterParagraph>
        <LinkHTML
          href="https://github.com/fe-liphis/portifolio"
          target="_blank"
        >
          Código fonte
        </LinkHTML>
      </FooterArticle>
    </FooterContainer>
  );
}

export default Footer;
