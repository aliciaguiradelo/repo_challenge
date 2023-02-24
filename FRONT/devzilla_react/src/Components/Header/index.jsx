export default function Header(){
    return(
        <header>
            <div class="row">
                <a href="index.html">
                    <h1 class="logo">devzilla</h1>
                </a>

                <section>
                    <a href="perfil_usuario.html" class="my_account">
                        {/* <img src="img/icons/icon_person.png"> */}
                        minha conta
                    </a>

                    <a href="perfil_usuario.html#artigos_salvos" class="saved">
                        {/* <img src="img/icons/icon_save.png"> */}
                        itens salvos
                    </a>

                    <small>Ainda não tem conta? <strong><a href="cadastro.html" class="text_blue">cadastre-se</a></strong> ou <strong><a href="login.html" class="text_blue">faça login</a></strong></small>
                </section>
            </div>

            <div class="row btns_menu">
                
                <input type="checkbox" id="menu" />
                <div class="hamburguer">

                    <button class="btn btn-primary btn-menu">
                        {/* não tem como estilizar um botao só quando ele ta pressionado ou nao no css puro, o checkbox 
                        é uma "gambiarra" que permite estilizar mostrando o menu se estiver clicado e escondendo se não tiver */}

                        <label for="menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </button>

                </div>

                <ul>
                    <li><a href="index.html" class="active">início</a></li>
                    <li><a href="blog.html">artigos</a></li>
                    <li><a href="empresas.html">IPOs</a></li>
                    <li><a href="sobre_nos.html">sobre nós</a></li>
                    <li><a href="#">preciso de ajuda</a></li>
                    <li><a href="dashboard_adm.html">dashboard (admin)</a></li>
                </ul>

                <div class="search">
                    <input type="text" placeholder="O que você está procurando?" />
                    <button class="btn btn-primary">
                        {/* <img src="img/icons/icon_search.png"> */}
                    </button>
                </div>
            </div>
        </header>
    )
}