import Contatos from "./components/Contatos/Contatos";
import Footer from "./components/Footer/Footer";
import Formacao from "./components/Formacao/Formacao";
import Habilidades from "./components/Habilidades/Habilidades";
import Header from "./components/Header/Header";
import Projetos from "./components/Projetos/Projetos";
import Resumo from "./components/Resumo/Resumo";

function App() {
  return (
    <>
      <Header />
      <Resumo />
      <Habilidades />
      <Formacao />
      <Projetos />
      <Contatos />
      <Footer />
    </>
  );
}

export default App;
