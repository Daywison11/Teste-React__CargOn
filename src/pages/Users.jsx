//inportação react
import React, { useEffect, useState } from 'react';
//importação do axios preconfigurado
import api from '../services/AxiosConfig';
//importação do css
import '../stylePages/Users.css'



const Users = () =>{
    //setando os valores das variaveis com useState para atulizar quano ouver alguma alteração
    const [users, setUsers] = useState([])
    const [pages, setPages] = useState()
    const [pagina, setPagina] = useState(2)
     
    // resuisição GET e setando os valores ao users
    useEffect(() => {
        api.get('/users?page=' +{pagina}).then((res) =>{
            setUsers(res.data.data)
        })
    }, [])
    

    // resuisição GET e setando os valores ao users apos passar como parametro a pagina
    //PAGINAÇÃO
    //funcao para retornar para pagina posterior na paginação
    function next(){
        if (pagina >= 1 && pagina < 44){
            setPagina(pagina +1)
            api.get('/users?page=' + pagina).then((res) =>{
                setUsers(res.data.data)})

        }
    }
    
    //funcao para retornar para pagina anterios na paginação
    function previw(){
        if (pagina >= 2 && pagina <= 40){
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
                            <tbody>
                                <tr>
                                    <td className='title bg-primary text-white p-2'>nome</td>
                                    <td>{use.name}</td>
                                </tr>
                                <tr>
                                    <td className='title bg-primary text-white'>email</td>
                                    <td>{use.email}</td>
                                </tr>
                                <tr>
                                    <td className='title bg-primary text-white'>sexo</td>
                                    <td>{use.gender}</td>
                                </tr>
                                <tr>
                                    <td className='title bg-primary text-white'>status</td>
                                    <td>{use.status}</td>
                                </tr>
                            </tbody>
                            
                            
                            
                        </table>   
                    )
                })}
            </div>
            <div className='container d-flex'>
                <ul className="pagination m-auto mt-2 mb-2 ">
                    <li className="page-item">
                    <a className="page-link" aria-label="Previous" onClick={previw}>
                        <span aria-hidden="true" >&laquo; anterior </span>
                    </a>
                    </li>
                    <li className="page-item"><a className="page-link" >{pagina}</a> </li>
                    <li className="page-item">
                    <a className="page-link" aria-label="Next" onClick={next}>
                        <span aria-hidden="true" className=''> proximo &raquo;</span>
                    </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Users;


