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
        <FooterLink href="">Resumo</FooterLink>
        <FooterLink href="">Habilidades</FooterLink>
        <FooterLink href="">Formação</FooterLink>
        <FooterLink href="">Experiências</FooterLink>
        <FooterLink href="">Projetos</FooterLink>
        <FooterLink href="">Contatos</FooterLink>
      </FooterNav>
      <FooterArticle>
        <FooterParagraph>
          <strong>@2024</strong> Felipe Gabriel Costa de Oliveira
        </FooterParagraph>
        <FooterLink href="">Código fonte</FooterLink>
      </FooterArticle>
    </FooterContainer>
  );
}

export default Footer;
