import React, { useEffect, useState } from 'react';


import api from '../services/AxiosConfig';

import '../stylePages/Users.css'



const Users = () =>{
    //state
    const [users, setUsers] = useState([])

    useEffect(() => {
        api.get('/users').then((res) =>{
            setUsers(res.data.data)
            
        })
    }, [])
    console.log(users)

    return(
        <div className='container'>
            <h1>Usuarios</h1>

            <div >
                <ul>
                    {users.map((use)=> { 
                        return(
                            <a href='#'> <li>{use.name}</li> </a> 
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Users;


