import Banner from "../../../Components/Banner";
import Footer from "../../../Components/Footer";
import Header from "../../../Components/Header";
import ListaArtigos from '../../../Components/ListaArtigos'

import artigos from '../../../Assets/DadosExemplos/blog.json'

import './style.css'

export default function Artigo(){

    const artigo = artigos[0];
    const relacionados = artigos.slice(1, 3);

    return(
        <div>
            <Header />
            <main id='artigo'>
                <Banner 
                    imagem="banner_blog.jpg"
                    titulo={artigo.titulo}
                    botaoCompartilhar={true}
                />

                <section className="container row">
                    <article>
                        <h1 className="line_after">{artigo.titulo}</h1>

                        <p id="subtitulo">{artigo.subtitulo}</p>
                        
                        <small>Artigos &gt; IPO &gt; {artigo.titulo} </small>

                        <div id="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus porta nibh, eget iaculis ligula elementum a. Vivamus efficitur molestie arcu, nec malesuada libero scelerisque et. Vestibulum non orci ut est placerat ultrices. Fusce dignissim sed eros sit amet consectetur. </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus porta nibh, eget iaculis ligula elementum a. Vivamus efficitur molestie arcu, nec malesuada libero scelerisque et. Vestibulum non orci ut est placerat ultrices. Fusce dignissim sed eros sit amet consectetur. </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus porta nibh, eget iaculis ligula elementum a. Vivamus efficitur molestie arcu, nec malesuada libero scelerisque et. Vestibulum non orci ut est placerat ultrices. Fusce dignissim sed eros sit amet consectetur. </p>
                        
                            <ul>
                                <li>Praesent vitae lorem ornare, consectetur turpis non, iaculis magna.</li>
                                <li>Sed id rhoncus purus, sollicitudin maximus nibh.</li>
                                <li>Nullam ipsum nisl, rutrum vitae luctus vel, maximus vel nibh.</li>
                                <li>Donec blandit finibus tortor, et semper ante ultrices eu.</li>
                            </ul>

                            <section id="ref">
                                <h2>Referências:</h2>
                                <ol>
                                    <li>
                                        <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus porta nibh, eget iaculis ligula elementum a</small>
                                    </li>
                                    <li>
                                        <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus porta nibh, eget iaculis ligula elementum a</small>
                                    </li>
                                    <li>
                                        <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus porta nibh, eget iaculis ligula elementum a</small>
                                    </li>
                                </ol>
                            </section>
                        </div>
                    </article>

                    <aside id="cards">
                        <h2>Artigos relacionados</h2>
                        <ListaArtigos tipo="materia" dados={relacionados}/>
                    </aside>
                </section>

                <Footer />
            </main>
        </div>
    )
}