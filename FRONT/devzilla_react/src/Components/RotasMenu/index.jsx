import './style.css'
import Button from './Button'

import { NavLink } from 'react-router-dom'

function RotasMenu(props){

    const userData = sessionStorage.getItem('dadosUsuario');
    let user = null
    if (userData) user = JSON.parse(userData);

    return(
        <>
        { props.hasButton && <Button /> }
            <ul className='menu'>
                <li><NavLink activeclassname='is-active' to="/">início</NavLink></li>
                <li><NavLink activeclassname='is-active' to="/blog">blog</NavLink></li>
                <li><NavLink activeclassname='is-active' to="/empresas">empresas</NavLink></li>
                <li><NavLink activeclassname='is-active' to="/sobre">sobre nós</NavLink></li>
                { (user && user.papel == 'adm') && 
                <li><NavLink activeclassname='is-active' to="/admin/artigos"> admin </NavLink></li> }
            </ul>
        </>    
    );
}

export default RotasMenu