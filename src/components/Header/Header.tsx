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
          <HeaderLink href="#resumo">Resumo</HeaderLink>
          <HeaderLink href="#habilidades">Habilidades</HeaderLink>
          <HeaderLink href="#formacao">Formação</HeaderLink>
          <HeaderLink href="#experiencias">Experiências</HeaderLink>
          <HeaderLink href="#projetos">Projetos</HeaderLink>
          <HeaderLink href="#contatos">Contatos</HeaderLink>
        </HeaderNav>
      </HeaderContainer>
    </>
  );
}

export default Header;
