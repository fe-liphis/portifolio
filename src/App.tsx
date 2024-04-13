import Contatos from "./components/Contatos/Contatos";
import Footer from "./components/Footer/Footer";
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
      <Projetos />
      <Contatos />
      <Footer />
    </>
  );
}

export default App;
