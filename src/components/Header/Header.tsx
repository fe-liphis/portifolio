import { HeaderContainer, HeaderLink, HeaderNav, MenuButton } from "./styles";

function Header() {
  return (
    <HeaderContainer>
      <MenuButton>MENU</MenuButton>
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
