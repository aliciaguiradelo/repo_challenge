import './style.css'

export default function Button(){
    return(
        <>
        <input type="checkbox" id="menu" />
        <div className="hamburguer">
            <button className="btn btn-primary btn-menu">

                {/* não tem como estilizar um botao só quando ele ta pressionado ou nao no css puro, o checkbox 
                é uma "gambiarra" que permite estilizar mostrando o menu se estiver clicado e escondendo se não tiver */}

                <label htmlFor="menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </button>
        </div></>
    );
}