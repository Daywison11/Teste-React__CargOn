import React from 'react';
import ReactDOM from 'react-dom';
import  { BrowserRouter , Routes , Route }  from  "react-router-dom" ; 
//pages
import Home from './pages/home';
import Users from './pages/Users';
import Cadastros from './pages/Cadastros'



ReactDOM.render(
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<Cadastros />} />
      <Route path="/users" element={<Users />} />
      

    </Routes>
  </BrowserRouter>,

  document.getElementById('root')
);

