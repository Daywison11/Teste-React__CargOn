import React from 'react';
import Users from './Users';


const Home = () => {
    return ( 
        <>
            <nav class="navbar navbar-expand-sm navbar-dark bg-primary fixed-top">
                <div class="container-fluid ">
                    <a class="navbar-brand " href="#">Lista de Usuarios</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav m-auto me-1">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/cadastro">Cadastrar Novo Usuarios</a>
                        </li> 
                        </ul>
                    </div>
                </div>
            </nav>

            <Users />
        </>
     );
}
 
export default Home;
