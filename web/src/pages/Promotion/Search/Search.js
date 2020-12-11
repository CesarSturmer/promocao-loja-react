import React from "react";
import PromotionSearch from "../../../Components/Promotion/Search/Search";
import UIContainer from "../../../Components/UI/Container/Container";


// aqui na pagina retorna o COMPONENT PromotionSearch com os dados da API. na pagina inicial.

const PagesPromotionSearch = () => {
  
  return (
    <UIContainer>
      
      <PromotionSearch />

    </UIContainer>
     
  
  );
};

export default PagesPromotionSearch;
