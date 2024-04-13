import projeto_1 from "../../assets/projetos-img/projeto-1.png";
import projeto_2 from "../../assets/projetos-img/projeto-2.png";
import projeto_3 from "../../assets/projetos-img/projeto-3.png";
import { ProjetoImg, ProjetoItem, ProjetoLink, ProjetoList } from "./styles";

const projetosList: Array<{ imgSrc: string; imgAlt: string; link: string }> = [
  {
    imgSrc: projeto_1,
    imgAlt: "",
    link: "https://github.com/fe-liphis/felipe-gabriel-1-desafio-pb-aws-react",
  },
  {
    imgSrc: projeto_2,
    imgAlt: "",
    link: "https://github.com/fe-liphis/FloriculturaGrupo04",
  },
  {
    imgSrc: projeto_3,
    imgAlt: "",
    link: "https://github.com/fe-liphis/locofy-myride",
  },
];

function List() {
  return (
    <ProjetoList>
      {projetosList.map((projeto) => (
        <ProjetoItem key={projeto.link}>
          <ProjetoImg src={projeto.imgSrc} alt={projeto.imgAlt} />
          <ProjetoLink href={projeto.link} target="_blank">
            Ver projeto
          </ProjetoLink>
        </ProjetoItem>
      ))}
    </ProjetoList>
  );
}

export default List;
