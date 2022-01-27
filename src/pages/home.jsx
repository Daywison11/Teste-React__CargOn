//importação do react
import React from 'react';
//importação do componente users
import Users from './Users';


const Home = () => {
    return ( 
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary fixed-top">
                <div className="container-fluid ">
                    <a className="navbar-brand " href="#">Lista de Usuarios</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav m-auto me-1">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/cadastro">Cadastrar Novo Usuarios</a>
                        </li> 
                        </ul>
                    </div>
                </div>
            </nav>

            <Users />
        </div>
     );
}
 
export default Home;
