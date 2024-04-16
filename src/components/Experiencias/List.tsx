function List({ descricao }: { descricao: string }) {
  const descricaoFormatada = descricao.split(";");
  return (
    <ul>
      {descricaoFormatada.map((desc) => {
        if (desc.length === 0) return;
        return <li key={desc}>{`${desc};`}</li>;
      })}
    </ul>
  );
}

export default List;
