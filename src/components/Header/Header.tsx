import { useState } from "react";
import { HeaderContainer, HeaderLink, HeaderNav, MenuButton } from "./styles";

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleOnClickMenu() {
    setMenuIsOpen((prevState) => !prevState);
  }

  return (
    <>
      <HeaderContainer>
        <MenuButton
          onClick={handleOnClickMenu}
          $color={menuIsOpen ? "#FFDC57" : undefined}
        >
          {menuIsOpen ? "X" : "MENU"}
        </MenuButton>
        <HeaderNav $isOpen={menuIsOpen}>
          <HeaderLink href="">Resumo</HeaderLink>
          <HeaderLink href="">Habilidades</HeaderLink>
          <HeaderLink href="">Formação</HeaderLink>
          <HeaderLink href="">Experiências</HeaderLink>
          <HeaderLink href="">Projetos</HeaderLink>
          <HeaderLink href="">Contatos</HeaderLink>
        </HeaderNav>
      </HeaderContainer>
    </>
  );
}

export default Header;
