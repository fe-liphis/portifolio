import { FooterContainer, FooterLink, FooterNav, FooterTitulo } from "./styles";

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
      <article>
        <p>@2024 Felipe Gabriel Costa de Oliveira</p>
        <a href="">Código fonte</a>
      </article>
    </FooterContainer>
  );
}

export default Footer;
