import "./style.css";
import Header from "../../Components/Header";
import Body from "../../Components/Body";

const Home = () => {

  return (
    <>
      <div className="content">
        <Header titulo="Kwen-Filmes" sobre="Sobre" contato="Contato" />
        <Body />
      </div>
    </>
  );
};

export default Home;
