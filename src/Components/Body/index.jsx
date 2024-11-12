import { useEffect, useRef, useState } from "react";
import "./style.css";
import axios from "axios";

const Body = () => {
  const inputRef = useRef("");

  let [filme, setFilme] = useState("");
  let [titulo, setTitulo] = useState("");
  let [descricao, setDescricao] = useState("");
  let [posterPath, setPosterPath] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${filme}&api_key=d11d3feb723eca002acb1487b0b4c66e`
      )
      .then((res) => {
        setPosterPath(res.data.results[0].poster_path);
        setTitulo(res.data.results[0].title);
        setDescricao(res.data.results[0].overview);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filme, posterPath, titulo, descricao]);

  const mudarFilme = () => {
    setFilme(inputRef.current.value);
  };

  const [rating, setRating] = useState(0);

  const handleClick = (index) => {
    setRating(index);
  };

  return (
    <>
      <div className="content">
        <div className="text">
          <h1>Sua Melhor Busca de Filmes</h1>
          <input type="text" placeholder="Nome do Filme" ref={inputRef} />
          <button
            onClick={() => {
              mudarFilme();
            }}
          >
            Search
          </button>
        </div>

        <div className="filme">
        {posterPath && (
          <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt="" />
        )}
          <div className="filme-tudo">
            <div className="filme-text">
              <h1>{titulo}</h1>
              <p>{descricao}</p>
            </div>
            {posterPath && (
              <div className="avaliar">
                <h1>Avaliar Filme</h1>
                <div className="avaliar-span">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`star ${star <= rating ? "active" : ""}`}
                      onClick={() => handleClick(star)}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <button>Enviar Avaliação</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
