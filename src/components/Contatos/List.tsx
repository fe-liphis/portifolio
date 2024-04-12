import github_icon from "../../assets/contatos-icon/github.svg";
import linkedin_icon from "../../assets/contatos-icon/linkedin.svg";
import email_icon from "../../assets/contatos-icon/email.svg";
import {
  ContatoImg,
  ContatoItem,
  ContatoLink,
  ContatoNome,
  ContatosList,
} from "./styles";

const contatosList: Array<{
  imgSrc: string;
  alt: string;
  nome: string;
  link?: string;
}> = [
  {
    imgSrc: linkedin_icon,
    alt: "Logo do Linkedin",
    nome: "fe-liphis",
    link: "https://www.linkedin.com/in/fe-liphis/",
  },
  {
    imgSrc: github_icon,
    alt: "Logo do Github",
    nome: "fe-liphis",
    link: "https://github.com/fe-liphis",
  },
  {
    imgSrc: email_icon,
    alt: "Logo de Email",
    nome: "felipeg.costaoliveira@gmail.com",
  },
];

function List() {
  return (
    <ContatosList>
      {contatosList.map((contato) => (
        <ContatoItem>
          <ContatoImg src={contato.imgSrc} alt={contato.alt} />
          {contato.link ? (
            <ContatoLink target="_blank" href={contato.link}>
              {contato.nome}
            </ContatoLink>
          ) : (
            <ContatoNome>{contato.nome}</ContatoNome>
          )}
        </ContatoItem>
      ))}
    </ContatosList>
  );
}

export default List;
