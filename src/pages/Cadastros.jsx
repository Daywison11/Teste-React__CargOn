import React, { useState } from 'react';

//api axios
import api from '../services/AxiosConfig';

//css
import '../stylePages/Cadastro.css'

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
       api.post('/users?access-token=3564fef855f8ec790bcd3855c67e333f0b3bb4e1840b9ae9f89b147f6dd4f513', values)
       .then((res) => {
        window.location.href = "/"
       })
   }

    return ( 
        <div className="container">
            <form onSubmit={onSubmit} className=' form'>
                <h1 className='text-center'>Cadastro de usuarios</h1>
                <div class="input-group mb-3">
                    <span class="input-group-text bg-primary text-white" id="basic-addon1">Nome</span>
                    <input type="text" class="form-control" placeholder="Name" onChange={onChage} name='name' required />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text bg-primary text-white" id="basic-addon1">Email</span>
                    <input type="email" class="form-control" placeholder="Email" onChange={onChage} name='email' required/>
                </div>
                <div class="input-group mb-3 ">
                    <label class="input-group-text bg-primary text-white" for="inputGroupSelect01">Status</label>
                    <select class="form-select" id="inputGroupSelect01" onChange={onChage} name='status' required>
                        <option selected>active</option>
                        <option>inactive</option>
                    </select>
                </div>
                <div class="input-group mb-3">
                    <label class="input-group-text bg-primary text-white" for="inputGroupSelect01">Genero</label>
                    <select class="form-select" id="inputGroupSelect01" onChange={onChage} name='gender'>Genero
                        <option selected>male</option>
                        <option >female</option>
                    </select>
                </div>
                <input type="submit" className='btn btn-primary d-block m-auto'/>
            </form>
            <div className='d-flex '>
                <a href="/" className='m-auto'>pagina inicial</a>
            </div>
        </div>

     );
}
 
export default Cadastros;