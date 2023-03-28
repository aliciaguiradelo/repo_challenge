import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import ListaCards from '../../Components/ListaArtigos'
import banner_perfil from '../../Assets/Illustrations/banner_perfil.svg'

import artigos from '../../Assets/DadosExemplos/blog.json'
import ipos from '../../Assets/DadosExemplos/ipos.json'

import './style.css'

export default function Perfil(){
    return(
        <div>
            <Header/>
            <main id='perfil'>
                <section className="container formulario">
                    <h1 className = "line_after" > Meu perfil </h1> 
                        <img src = {banner_perfil} alt = "" />
                    <form method = "POST">
                    <div className = "contentInput" >
                    <label htmlFor = "nomeCompleto" > Nome completo </label> 
                    <input type = "text"
                        name = "nome"
                        id = "nomeCompleto"
                        placeholder = "Mehrab Bozorgi" />
                    </div> 
                    <div className = "contentInput">
                    <label for = "email" > Email </label> 
                    <input type = "email"
                        name = "email"
                        id = "email"
                        placeholder = "Mehrabbozorgi.business@gmail.com" />
                    </div> 
                    <div className = "contentInput">
                    <label for = "DtNasc" > Data de nascimento </label> 
                    <input type = "date"
                        name = "DtNasc"
                        id = "DtNasc" />
                    </div> 
                    <div className = "contentInput" >
                    </div> 
                    <div className = "block" >
                    <small > Se desejar alterar a conta, <span> clique aqui </span></small>
                    <a href="#" className = "btn btn_primary arrow"> Salvar </a> </div> </form> </section>

                <ListaCards dados = {ipos.slice(0, 4)} tipo = "ipo" botao />

                <ListaCards dados = {artigos.slice(0, 3)} tipo = "materia" botao />
            </main>
            <Footer />
        </div>
    )
}