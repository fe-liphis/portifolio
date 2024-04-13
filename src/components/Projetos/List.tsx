import projeto_1 from "../../assets/projetos-img/projeto-1.png";
import projeto_2 from "../../assets/projetos-img/projeto-2.png";
import projeto_3 from "../../assets/projetos-img/projeto-3.png";

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
    <ul>
      {projetosList.map((projeto) => (
        <li>
          <img src={projeto.imgSrc} alt={projeto.imgAlt} />
          <a href={projeto.link}>Ver projeto</a>
        </li>
      ))}
    </ul>
  );
}

export default List;
