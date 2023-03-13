import './style.css'
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import ListaCards from "../../Components/ListaArtigos";
import artigos from '../../Assets/DadosExemplos/blog.json'
import Banner from "../../Components/Banner";
import { useState } from "react";

export default function Blog(){

    const [filteredBlog, setFilteredBlog] = useState(artigos)
    const [categoria, setCategoria] = useState('todas')

    return(
        <div>
            <Header />

            <main id='blog'>
                <Banner 
                    imagem="banner_blog.jpg"
                    titulo="Aprenda mais sobre investimento, ofertas e educação financeira!"
                />

                <section id="filter" className="container row">
                    <h2>Procurando algo específico?</h2>
                    <input type="text" placeholder="O que você quer encontrar?"/>
                    <select id="categoria">
                        <option>Todas as categorias</option>
                        <option>teste</option>
                    </select>
                </section>

                <ListaCards 
                    tipo="materia" 
                    dados={filteredBlog}
                    botao={false}
                />
            </main>

            <Footer />
        </div>
    )
}