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
          <HeaderLink
            to="resumo"
            smooth
            duration={500}
            offset={-70}
            activeClass="active"
            spy
          >
            Resumo
          </HeaderLink>
          <HeaderLink
            to="habilidades"
            smooth
            duration={500}
            offset={-70}
            activeClass="active"
            spy
          >
            Habilidades
          </HeaderLink>
          <HeaderLink
            to="formacao"
            smooth
            duration={500}
            offset={-70}
            activeClass="active"
            spy
          >
            Formação
          </HeaderLink>
          <HeaderLink
            to="experiencias"
            smooth
            duration={500}
            offset={-70}
            activeClass="active"
            spy
          >
            Experiências
          </HeaderLink>
          <HeaderLink
            to="projetos"
            smooth
            duration={500}
            offset={-70}
            activeClass="active"
            spy
          >
            Projetos
          </HeaderLink>
          <HeaderLink
            to="contatos"
            smooth
            duration={500}
            offset={-70}
            activeClass="active"
            spy
          >
            Contatos
          </HeaderLink>
        </HeaderNav>
      </HeaderContainer>
    </>
  );
}

export default Header;
