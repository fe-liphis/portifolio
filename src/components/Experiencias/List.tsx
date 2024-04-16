import { DescricaoItemsContainer, ItemDescritivo } from "./styles";

function List({ descricao }: { descricao: string }) {
  const descricaoFormatada = descricao.split(";");
  return (
    <DescricaoItemsContainer>
      {descricaoFormatada.map((desc) => {
        if (desc.length === 0) return;
        return <ItemDescritivo key={desc}>{`${desc};`}</ItemDescritivo>;
      })}
    </DescricaoItemsContainer>
  );
}

export default List;
