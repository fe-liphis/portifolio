import profile from "../../assets/profile.jpg";

function Resumo() {
  return (
    <section>
      <h1>Resumo</h1>
      <p>
        Desenvolvedor de Software com 5 meses de experiência em front-end.
        Principais habilidades com React.JS, JavaScript, TypeScript e sou
        certificado Cloud Practitioner AWS.
      </p>
      <img src={profile} alt="Foto de Perfil" />
    </section>
  );
}

export default Resumo;
