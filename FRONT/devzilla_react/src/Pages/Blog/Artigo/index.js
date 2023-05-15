import Banner from "../../../Components/Banner";
import Footer from "../../../Components/Footer";
import Header from "../../../Components/Header";
import ListaArtigos from '../../../Components/ListaArtigos'

import { useEffect, useState } from 'react'

import './style.css'

import { BsFillPersonFill } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdOutlineBookmarkBorder } from 'react-icons/md'
import { useParams } from "react-router-dom";

import ReactLoading from 'react-loading'

export default function Artigo(){

    const { id } = useParams()

    const [loading, setLoading] = useState(true)
    const [artigo, setArtigo] = useState({})

    useEffect(() => {
        //Carregando o artigos pelo id
        fetch(`http://localhost:8080/InvestiumAPI/rest/postagem/${id}`)
          .then((resp) => resp.json())
          .then((data) => {
            setArtigo(data)
            setLoading(false)
          })
          .catch((error) => {
            console.error(error)
            setLoading(false)
          });
    }, [])

    return(
        <div>
            <Header />
            <main id='artigo'>
                { loading ? (
                    <div className='wrap_loading'>
                        <ReactLoading type="spinningBubbles" color='#444'/>
                        <p>Carregando artigo...</p>
                    </div>

                ) : (
                <>
                    <Banner 
                        imagem="banner_blog.jpg"
                        titulo={artigo.titulo}
                        botaoCompartilhar={true}
                    />

                    <section className="container row">
                        <article>
                            <h1 className="line_after">{artigo.titulo}</h1>

                            <p id="subtitulo">{artigo.conteudo}</p>
                            
                            <small>Artigos &gt; IPO &gt; {artigo.titulo} </small>

                            <div className="wrap_btns">
                                <a className="btn btn_secondary curtir" href="#">
                                    Curtir
                                    <AiOutlineHeart />
                                </a>

                                <a className="btn btn_secondary curtir" href="#">
                                    Salvar
                                    <MdOutlineBookmarkBorder />
                                </a>
                            </div>

                            <div id="content">
                                { artigo.conteudo }

                                <section id="comentarios">   
                
                                <div className="comentario">
                                    <div className="profile">
                                        <BsFillPersonFill />
                                    </div>
                                    <div>
                                        <h3>José Dias</h3>
                                        <p>Adorei a matéria! Aprendi muito com o conteúdo.</p>
                                    </div>
                                </div>
                
                                <div className="comentario">
                                    <div className="profile">
                                        <BsFillPersonFill />
                                    </div>
                
                                    <div>
                                        <h3>Maria Souza</h3>
                                        <p>Muito bom! Sanei minhas dúvidas sobre IPOs. Vou compartilhar com meus amigos :)</p>
                                    </div>
                                    
                                </div>
                
                                <div id="novo_comentario">
                                    <div className="profile">
                                        <BsFillPersonFill />
                                    </div>
                                    <h3>João Ferreira</h3>
                
                                    <textarea placeholder="O que você achou da matéria?" rows="3"></textarea>
                                    <a href="artigo_individual.html" className="btn btn_primary">comentar</a>
                                </div>
                
                            </section>
                            </div>
                        </article>

                        {/* TODO: fazer uma requisição com getDadosByCategoria da categoria atual */}
                        <aside id="cards">
                            <h2>Artigos relacionados</h2>
                            <ListaArtigos tipo="materia" />
                        </aside>
                    </section>
                </>
                )}
                <Footer />
            </main>
        </div>
    )
}