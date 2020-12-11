import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import UIContainer from "../../UI/Container/Container";
import axios from 'axios'
import "./Form.css";

//htmlFor="title" é a chave que faz a associação com o input id="title"

const initialValue = {
  title: "",
  url: "",
  imageUrl: "",
  price: 0,
};

const PromotionForm = () => {
  const [values, setValues] = useState(initialValue);
  const history = useHistory()


  function onChange(ev) {
    const { name, value } = ev.target;

    //criar um novo objeto apartir do anterior, mudando como voce quer. e muda apenas o valor que voce quer. nesse caso o name serve para title, url, price, para todos;
    setValues({ ...values, [name]: value });
  }

  // enviando os dados cadastrados para API. 
  function onSubmit(ev) {
      ev.preventDefault();

      axios.post('http://localhost:5000/promotions', values).then((response) => {
            history.push('/')
      })



  }

  return (
    <UIContainer>
      <h1>Promo Show</h1>
      <h2>Nova Promoção</h2>

      <form onSubmit={onSubmit}>
        <div className="promotion-form__group">
          <label htmlFor="title">Título</label>
          <input id="title" name="title" type="text" onChange={onChange} />
        </div>
        <div className="promotion-form__group">
          <label htmlFor="url">Link</label>
          <input id="url" name="url" type="text" onChange={onChange} />
        </div>
        <div className="promotion-form__group">
          <label htmlFor="imageUrl">Image Link</label>
          <input
            id="imageUrl"
            name="imageUrl"
            type="text"
            onChange={onChange}
          />
        </div>
        <div className="promotion-form__group">
          <label htmlFor="price">Preço</label>
          <input id="price" name="price" type="number" onChange={onChange} />
        </div>
        <div className="promotion-form__group">
          <button type="submit">Salvar</button>
        </div>
      </form>
    </UIContainer>
  );
};

export default PromotionForm;
