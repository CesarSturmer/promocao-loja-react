import React, { useEffect, useState } from "react";
import Axios from "axios";
import PromotionList from "../List/List";
import { Link } from "react-router-dom";
import "./Search.css";
//fazendo a chamada para buscar os dados da API e retornando os para PromotionCard tratar cada dado vindo do DATA da api para ser renderizada na tela
// useEffect é um HOOK aonde eu vou renderizar o elemento cada vez que tiver uma alteração no meu array
// e sempre que tiver a mudança ele faz um request para buscar os dados novamente da api
// ele já ganho um estado normal promotions que vem do useState, quando as promotions tiver novo valor faz setPromotions pegando novo valor e renderizando

const PromotionSearch = () => {
  const [promotions, setPromotions] = useState([]);
  const [search, setSearch] = useState('')


// agora o useEffect toda vez que o valor SEARCH ALTERAR ELE FAZ O REQUEST DE NOVO buscando aquele elemento agora especifico
// para isso o useEffect usa seu segundo parametro quando esta vazio ele apenas busca e e fica esperando novas mudanças no useState
// se definir um segundo parametro ele fica cuidando aquela mudança especifica.. 
//usando o params para usar como parametros para buscar. Like para buscar algo parecido e nao precisa ser identico.

  useEffect(() => {

    const params = {}
    if(search) {
        params.title_like = search;
    }
    Axios.get('http://localhost:5000/promotions?_embed=comments&_order=desc&_sort=id', {params}).then(
      (response) => {
        setPromotions(response.data);
      }
    );
  }, [search]);

  return (
    <div className="promotion-search">
      <header className="promotion-search__header">
        <h1>Promo Show</h1>
        <Link to="/create">Nova Promoção</Link>
      </header>


    {/* valeu search é o estado padrao dele definido pelo useState, quando tivver um evento pelo onChange ele faz o setSearch para renderizar novamente com o seu valor através do ev.target.value */}
      <input
        type="search"
        className="promotion-search__input"
        placeholder="buscar"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />
      {/* se não tiver carregado as promoção da um loading */}
      <PromotionList  promotions={promotions} loading ={!promotions.length}/>
    </div>
  );
};

export default PromotionSearch;
