import React, { useState } from 'react';

//api axios
import api from '../services/AxiosConfig';

const initValues = {
    name: "",
    gender: "male",
    email:"",
    status:"active",
}

const Cadastros = () => {
   const [values, setValues] = useState(initValues)
   function onChage(ev){
        const {name, value} = ev.target;


        setValues({...values, [name]: value})
   }

   function onSubmit(ev){
       ev.preventDefault();
       console.log(values)
       api.post('/users?access-token=3564fef855f8ec790bcd3855c67e333f0b3bb4e1840b9ae9f89b147f6dd4f513', values)
       .then((res) => {
        window.location.href = "/users"
       })
   }

    return ( 
        <div className="container-sm">
            <form onSubmit={onSubmit}>
                <h1 className='text-center'>Cadastro de usuarios</h1>
                <div class="input-group m-3">
                    <span class="input-group-text" id="basic-addon1">Name</span>
                    <input type="text" class="form-control" placeholder="Name" onChange={onChage} name='name' />
                </div>
                <div class="input-group m-3">
                    <span class="input-group-text" id="basic-addon1">Email</span>
                    <input type="email" class="form-control" placeholder="Email" onChange={onChage} name='email'/>
                </div>
                <div class="input-group m-3">
                    <label class="input-group-text" for="inputGroupSelect01">Status</label>
                    <select class="form-select" id="inputGroupSelect01" onChange={onChage} name='status'>
                        <option selected>active</option>
                        <option>inactive</option>
                    </select>
                </div>
                <div class="input-group m-3">
                    <label class="input-group-text" for="inputGroupSelect01">Genero</label>
                    <select class="form-select" id="inputGroupSelect01" onChange={onChage} name='gender'>Genero
                        <option selected>male</option>
                        <option >female</option>
                    </select>
                </div>
                <input type="submit"/>
            </form>
        </div>
     );
}
 
export default Cadastros;