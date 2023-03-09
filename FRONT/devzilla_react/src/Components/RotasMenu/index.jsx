import './style.css'
import Button from './Button'

function RotasMenu(props){
    return(
        <>
        { props.hasButton && <Button /> }
            <ul className='menu'>
                <li><a href="index.html" className="active">início</a></li>
                <li><a href="blog.html">artigos</a></li>
                <li><a href="empresas.html">IPOs</a></li>
                <li><a href="sobre_nos.html">sobre nós</a></li>
                <li><a href="#">preciso de ajuda</a></li>
                <li><a href="dashboard_adm.html">dashboard (admin)</a></li>
            </ul>
        </>    
    );
}

export default RotasMenu