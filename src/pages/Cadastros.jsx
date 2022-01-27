//importação do react e sua dependencia
import React, { useState } from 'react';
//importação do axios com preconfiguração
import api from '../services/AxiosConfig';
// css
import '../stylePages/Cadastro.css'

const initValues = {
    name: "",
    gender: "male",
    email:"",
    status:"active",
}


const Cadastros = () => {
    //pegando os valores dos inputs e parassando para o values, usando o useState
   const [values, setValues] = useState(initValues)
   function onChage(ev){
        const {name, value} = ev.target;

        //pegando os valores de cada input e armazenando em seus devidos capos com base no name
        setValues({...values, [name]: value})
   }

   //função bloqueia o submite e ao invez, faz uma Post com a rota e  autenticação, com os valores
   //ja armazenados nos campos
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
                <div className="input-group mb-3">
                    <span className="input-group-text bg-primary text-white" id="basic-addon1">Nome</span>
                    <input type="text" className="form-control" placeholder="Name" onChange={onChage} name='name' required />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text bg-primary text-white" id="basic-addon1">Email</span>
                    <input type="email" className="form-control" placeholder="Email" onChange={onChage} name='email' required/>
                </div>
                <div className="input-group mb-3 ">
                    <label className="input-group-text bg-primary text-white" htmlFor="inputGroupSelect01">Status</label>
                    <select className="form-select" id="inputGroupSelect01" onChange={onChage} name='status' required>
                        <option defaultValue>active</option>
                        <option>inactive</option>
                    </select>
                </div>
                <div className="input-group mb-3">
                    <label className="input-group-text bg-primary text-white" htmlFor="inputGroupSelect01">Genero</label>
                    <select className="form-select" id="inputGroupSelect01" onChange={onChage} name='gender'>Genero
                        <option defaultValue>male</option>
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