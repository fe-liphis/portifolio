import htmlIMG from "../../assets/habilidades-icons/html.svg";
import cssIMG from "../../assets/habilidades-icons/css.svg";
import javascriptIMG from "../../assets/habilidades-icons/javascript.svg";
import reactjsIMG from "../../assets/habilidades-icons/react.svg";
import typescriptIMG from "../../assets/habilidades-icons/typescript.svg";
import nextjsIMG from "../../assets/habilidades-icons/nextjs.svg";
import awsIMG from "../../assets/habilidades-icons/aws.svg";
import gitIMG from "../../assets/habilidades-icons/git.svg";
import githubIMG from "../../assets/habilidades-icons/github.svg";
import vitestIMG from "../../assets/habilidades-icons/vitest.svg";
import sqlIMG from "../../assets/habilidades-icons/sql.svg";
import javaIMG from "../../assets/habilidades-icons/java.svg";
import { ListItem, ListItemIMG, ListItemLabel, ListWrapper } from "./styles";

type HabilidadesArray = Array<{ src: string; name: string }>;

const habilidades: HabilidadesArray = [
  {
    src: htmlIMG,
    name: "HTML",
  },
  {
    src: cssIMG,
    name: "CSS",
  },
  {
    src: javascriptIMG,
    name: "JavaScript",
  },
  {
    src: reactjsIMG,
    name: "React.JS",
  },
  {
    src: typescriptIMG,
    name: "TypeScript",
  },
  {
    src: nextjsIMG,
    name: "Next.JS",
  },
  {
    src: awsIMG,
    name: "AWS",
  },
  {
    src: gitIMG,
    name: "Git",
  },
  {
    src: githubIMG,
    name: "GitHub",
  },
  {
    src: vitestIMG,
    name: "Vitest",
  },
  {
    src: sqlIMG,
    name: "SQL",
  },
  {
    src: javaIMG,
    name: "Java",
  },
];

function List() {
  return (
    <ListWrapper>
      {habilidades.map((habilidade) => (
        <ListItem key={habilidade.name}>
          <ListItemIMG
            src={habilidade.src}
            alt={`Habilidade com ${habilidade.name}`}
          />
          <ListItemLabel>{habilidade.name}</ListItemLabel>
        </ListItem>
      ))}
    </ListWrapper>
  );
}

export default List;
