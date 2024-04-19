import {
  FooterArticle,
  FooterContainer,
  FooterLink,
  FooterNav,
  FooterParagraph,
  FooterTitulo,
} from "./styles";

function Footer() {
  return (
    <FooterContainer>
      <FooterTitulo>Links</FooterTitulo>
      <FooterNav>
        <FooterLink href="#resumo">Resumo</FooterLink>
        <FooterLink href="#habilidades">Habilidades</FooterLink>
        <FooterLink href="#formacao">Formação</FooterLink>
        <FooterLink href="#experiencias">Experiências</FooterLink>
        <FooterLink href="#projetos">Projetos</FooterLink>
        <FooterLink href="#contatos">Contatos</FooterLink>
      </FooterNav>
      <FooterArticle>
        <FooterParagraph>
          <strong>@2024</strong> Felipe Gabriel Costa de Oliveira
        </FooterParagraph>
        <FooterLink
          href="https://github.com/fe-liphis/portifolio"
          target="_blank"
        >
          Código fonte
        </FooterLink>
      </FooterArticle>
    </FooterContainer>
  );
}

export default Footer;
