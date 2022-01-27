import React from 'react';

const Home = () => {
    return ( 
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fluid ">
                    <a class="navbar-brand" href="#">Daywison_Santos</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/cadastro">Cadastrar Usuarios</a>
                        </li> 
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/users">Usuarios</a>
                        </li> 
                    </ul>
                    </div>
                </div>
            </nav>
        </>
     );
}
 
export default Home;
