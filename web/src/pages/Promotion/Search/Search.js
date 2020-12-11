import React, { useEffect, useState } from "react";
import PromotionCard from "../../../Components/Promotion/Card/Card";
import Axios from "axios";

//fazendo a chamada para buscar os dados da API e retornando os para PromotionCard tratar cada dado vindo do DATA da api para ser renderizada na tela
// useEffect é um HOOK aonde eu vou renderizar o elemento cada vez que tiver uma alteração no meu array
// e sempre que tiver a mudança ele faz um request para buscar os dados novamente da api
// ele já ganho um estado normal promotions que vem do useState, quando as promotions tiver novo valor faz setPromotions pegando novo valor e renderizando 

const PagesPromotionSearch = () => {
  const [promotions, setPromotions] = useState([]);


  useEffect(() => {
    Axios.get("http://localhost:5000/promotions?_embed=comments")
    .then((response) => {
        setPromotions(response.data);
      });
  }, []);

  return (
    <div
      style={{
        maxWidth: 800,
        margin: "30px auto",
      }}
    >
      {promotions.map((promotion) => (
        <PromotionCard promotion={promotion} />
      ))}
    </div>
  );
};

export default PagesPromotionSearch;
