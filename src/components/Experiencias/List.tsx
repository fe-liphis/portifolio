import { ItemDescritivo } from "./styles";

function List({ descricao }: { descricao: string }) {
  const descricaoFormatada = descricao.split(";");
  return (
    <ul>
      {descricaoFormatada.map((desc) => {
        if (desc.length === 0) return;
        return <ItemDescritivo key={desc}>{`${desc};`}</ItemDescritivo>;
      })}
    </ul>
  );
}

export default List;
