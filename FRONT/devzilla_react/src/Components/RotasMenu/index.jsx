import './style.css'
import Button from './Button'

import { Link } from 'react-router-dom'

function RotasMenu(props){
    return(
        <>
        { props.hasButton && <Button /> }
            <ul className='menu'>
                <li><Link to="/" className="active">início</Link></li>
                <li><Link to="/blog">artigos</Link></li>
                <li><Link to="/ofertas">IPOs</Link></li>
                <li><Link to="/sobre">sobre nós</Link></li>
                <li><Link to="/">preciso de ajuda</Link></li>
                <li><Link to="/dashboard">dashboard (admin)</Link></li>
            </ul>
        </>    
    );
}

export default RotasMenu