import React, { useEffect, useState } from 'react';


import api from '../services/AxiosConfig';

import '../stylePages/Users.css'



const Users = () =>{
    const [users, setUsers] = useState([])
    const [pages, setPages] = useState()
    

    const [pagina, setPagina] = useState(2)
     

    // resuisição GET e setando os valores ao users
    useEffect(() => {
        api.get('/users?page=' +{pagina}).then((res) =>{
            setUsers(res.data.data)
            console.log(pages)
        })
    }, [])
    

    // resuisição GET e setando os valores ao users apos passar como parametro a pagina
    function next(){
        if (pagina >= 1 && pagina < 44){
            setPagina(pagina +1)
            api.get('/users?page=' + pagina).then((res) =>{
                setUsers(res.data.data)})

        }
    }

    function previw(){
        if (pagina >= 2 && pagina <= 44){
            setPagina(pagina -1)
            api.get('/users?page=' + pagina).then((res) =>{
                setUsers(res.data.data)})
        }
    }

    return(
        <div className='container text-center'>
            <h1>Usuarios</h1>

            <div className='m-auto d-flex d-flex justify-content-center flex-wrap'>
                {users.map((use)=> { 
                    return(
                        <table className='width m-2'>
                            <tr class="">
                                <td className='title bg-primary text-white p-2'>nome</td>
                                <td>{use.name}</td>
                            </tr>
                            <tr class="">
                                <td className='title bg-primary text-white'>email</td>
                                <td>{use.email}</td>
                            </tr>
                            <tr class="" >
                                <td className='title bg-primary text-white'>sexo</td>
                                <td>{use.gender}</td>
                            </tr>
                            <tr class="">
                                <td className='title bg-primary text-white'>status</td>
                                <td>{use.status}</td>
                            </tr>
                            
                            
                            
                        </table>   
                    )
                })}
            </div>
            <div className='container d-flex'>
                <ul class="pagination m-auto mt-2 mb-2 ">
                    <li class="page-item">
                    <a class="page-link" aria-label="Previous" onClick={previw}>
                        <span aria-hidden="true" >&laquo; anterior </span>
                    </a>
                    </li>
                    <li class="page-item"><a class="page-link" >{pagina}</a> </li>
                    <li class="page-item">
                    <a class="page-link" aria-label="Next" onClick={next}>
                        <span aria-hidden="true" className=''> proximo &raquo;</span>
                    </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Users;


