import Menu from '../RotasMenu'
import './style.css'
import IconFb from '../../Assets/Icons/icon_fb.svg'
import IconLinkedin from '../../Assets/Icons/icon_linkedin.svg'
import IconYt from '../../Assets/Icons/icon_yt.svg'


export default function Footer(){
    return(
        <footer>
            <div className="row links_uteis">
                <h2>Links úteis:</h2>
                <Menu />
            </div>

            <div className="row">
                <h2>Siga-nos:</h2>
                <ul className="social_media">
                    <li><a href="#"><img src={IconFb} /></a></li>
                    <li><a href="#"><img src={IconYt} /></a></li>
                    <li><a href="#"><img src={IconLinkedin} /></a></li>
                </ul>
            </div>

            <p>DevZilla | Todos os direitos reservados<sup>©</sup></p>

        </footer>
    )
}