import { DescricaoItemsContainer, ItemDescritivo } from "./styles";

function List({
  descricao,
  modalVisibility,
}: {
  descricao: string;
  modalVisibility?: boolean;
}) {
  const descricaoFormatada = descricao.split(";");
  return (
    <DescricaoItemsContainer $visibility={modalVisibility || false}>
      {descricaoFormatada.map((desc) => {
        if (desc.length === 0) return;
        return <ItemDescritivo key={desc}>{`${desc};`}</ItemDescritivo>;
      })}
    </DescricaoItemsContainer>
  );
}

export default List;
