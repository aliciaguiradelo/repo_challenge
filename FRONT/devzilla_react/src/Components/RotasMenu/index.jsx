import './style.css'
import Button from './Button'

import { NavLink } from 'react-router-dom'

function RotasMenu(props){
    return(
        <>
        { props.hasButton && <Button /> }
            <ul className='menu'>
                <li><NavLink activeClassName='is-active' to="/">início</NavLink></li>
                <li><NavLink activeClassName='is-active' to="/blog">blog</NavLink></li>
                <li><NavLink activeClassName='is-active' to="/ofertas">IPOs</NavLink></li>
                <li><NavLink activeClassName='is-active' to="/sobre">sobre nós</NavLink></li>
                {/* <li><NavLactiveClassName='is-active' ink to="/">preciso de ajuda</NavLink></li> */}
                <li><NavLink activeClassName='is-active' to="/admin/artigos"> admin </NavLink></li>
            </ul>
        </>    
    );
}

export default RotasMenu