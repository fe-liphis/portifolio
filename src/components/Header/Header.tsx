import { HeaderContainer, HeaderLink, HeaderNav } from "./styles";

function Header() {
  return (
    <HeaderContainer>
      <HeaderNav>
        <HeaderLink href="">Resumo</HeaderLink>
        <HeaderLink href="">Habilidades</HeaderLink>
        <HeaderLink href="">Formação</HeaderLink>
        <HeaderLink href="">Experiências</HeaderLink>
        <HeaderLink href="">Projetos</HeaderLink>
        <HeaderLink href="">Contatos</HeaderLink>
      </HeaderNav>
    </HeaderContainer>
  );
}

export default Header;
