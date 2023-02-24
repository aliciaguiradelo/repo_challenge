export default function Footer(){
    return(
        <footer>
            <div class="row links_uteis">
                <h2>Links úteis:</h2>
                <ul>
                    <li><a href="index.html">início</a></li>
                    <li><a href="blog.html">artigos</a></li>
                    <li><a href="https://www.b3.com.br/pt_br/" target="_blank">B3</a></li>
                    <li><a href="empresas.html">IPOs</a></li>
                    <li><a href="sobre_nos.html">sobre nós</a></li>
                    <li><a href="#">preciso de ajuda</a></li>
                </ul>
            </div>

            <div class="row">
                <h2>Siga-nos:</h2>
                <ul class="social_media">
                    {/* <li><a href="#"><img src="img/icons/icon_fb.svg"></a></li> */}
                    {/* <li><a href="#"><img src="img/icons/icon_yt.svg"></a></li> */}
                    {/* <li><a href="#"><img src="img/icons/icon_linkedin.svg"></a></li> */}
                </ul>
            </div>

            <p>DevZilla | Todos os direitos reservados<sup>©</sup></p>

        </footer>
    )
}