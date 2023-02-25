import Menu from '../RotasMenu'
import './style.css'

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
                    {/* <li><a href="#"><img src="img/icons/icon_fb.svg"></a></li> */}
                    {/* <li><a href="#"><img src="img/icons/icon_yt.svg"></a></li> */}
                    {/* <li><a href="#"><img src="img/icons/icon_linkedin.svg"></a></li> */}
                </ul>
            </div>

            <p>DevZilla | Todos os direitos reservados<sup>©</sup></p>

        </footer>
    )
}