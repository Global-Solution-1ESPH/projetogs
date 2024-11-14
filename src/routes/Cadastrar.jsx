import {useParams,Link, useNavigate} from 'react-router-dom'
import { ImCancelCircle } from "react-icons/im";
import { useState,useEffect } from 'react';


const Cadastrar=()=>{



    let {id} =useParams();

    const [usuarios,setUsuarios]= useState({
        id,
        usuario:'',
        senha:'',
    });


     const navigate = useNavigate();


    let metodo ="post";
    if(id){
        metodo="put";
    }
   

     const handleChange=(e)=>{
        setUsuarios({...usuarios, [e.target.name]: e.target.value});
     }

  

     const handleSubmit=(e)=>{

        e.preventDefault();

        fetch(`http://localhost:5000/usuarios/${id ? id:''}`,{

        method: metodo,

        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(usuarios),
        }).then(()=> {
            navigate("/login")
        });
     }


     useEffect(()=>{
        if(id) {
        fetch(`http://localhost:5000/usuarios/${id}`)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setUsuarios(data);
        });
    }
     },[id])


    return (
        <section className="usuario">

            <form onSubmit={handleSubmit}>
                <h1>Cadastrar Usuário</h1>
                <input
                    type="text"
                    name="usuario"
                    placeholder="Digite seu Usuário"
                    value={usuarios.usuario}

                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="senha"
                    placeholder="Digite sua senha"
                    value={usuarios.senha}
                    onChange={handleChange}
                />

                <button type="submit">Cadastrar</button>
                <Link to="/login">
                    <ImCancelCircle />
                </Link>



            </form>
        </section>
    )
}
export default Cadastrar