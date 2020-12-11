import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PagesPromotionForm from "./Promotion/Form/Form";
import PagesPromotionSearch from "./Promotion/Search/Search";

// aqui seria mesma coisa que APP, mas geralmente se usa root para controlar rotas
// aqui é a base do projeto aonde ele ROUTE faz a chamada para pagina que sera renderizada pagina inicial PagesPromotionSearch
const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/create" component={PagesPromotionForm} />
        <Route path="/edit/:id" component={PagesPromotionForm} />
        <Route path="/" component={PagesPromotionSearch} />
      </Switch>
    </Router>
  );
};

export default Root;
