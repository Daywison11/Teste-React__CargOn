//importação react
import React from 'react';
//importação do react-router para fazer as rotas
import ReactDOM from 'react-dom';
import  { BrowserRouter , Routes , Route }  from  "react-router-dom" ; 
//importação dos componentes(paginas)
import Home from './pages/home';
import Cadastros from './pages/Cadastros'



ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<Cadastros />} />
    </Routes>
  </BrowserRouter>,

  document.getElementById('root')
);

