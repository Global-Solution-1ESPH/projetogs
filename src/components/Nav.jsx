import { Link } from 'react-router-dom';

const Nav =()=>{
    return(
        <>
        <div>
            
            
            <div className>
                <div className>

                    <div className="flex space-x-8">
                        <Link to="/" >Home</Link>
                        <Link to="/sobre" >Sobre</Link>
                        <Link to="/solucao" >Solução</Link>
                    </div>


                    <div className="flex space-x-6">
                        <Link to="/login" >Login</Link>
                        <Link to="/cadastrarusuario" >Cadastro</Link>
                    </div>
                
                </div>
            </div>

        </div>


        </>
    )
}
export default Nav