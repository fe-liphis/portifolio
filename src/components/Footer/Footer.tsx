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
        <FooterLink to="resumo" smooth duration={500} offset={-70}>
          Resumo
        </FooterLink>
        <FooterLink to="habilidades" smooth duration={500} offset={-70}>
          Habilidades
        </FooterLink>
        <FooterLink to="formacao" smooth duration={500} offset={-70}>
          Formação
        </FooterLink>
        <FooterLink to="experiencias" smooth duration={500} offset={-70}>
          Experiências
        </FooterLink>
        <FooterLink to="projetos" smooth duration={500} offset={-70}>
          Projetos
        </FooterLink>
        <FooterLink to="contatos" smooth duration={500} offset={-70}>
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
      <LinkHTML target="_blank" href="https://www.flaticon.com/">
        Icons by Flaticon
      </LinkHTML>
    </FooterContainer>
  );
}

export default Footer;
