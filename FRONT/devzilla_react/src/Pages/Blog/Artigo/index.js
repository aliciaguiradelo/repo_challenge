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
    
    const [comentarios, setComentarios] = useState([])

    useEffect(() => {
        //Carregando o artigo pelo id
        fetch(`http://localhost:8080/InvestiumAPI/rest/postagem/${id}`)
          .then((resp) => resp.json())
          .then((data) => {
            setArtigo(data)
            console.log(artigo)
            setLoading(false)
          })
          .catch((error) => {
            console.error(error)
            setLoading(false)
          });
          

        //Carregando os comentários
        fetch(`http://localhost:8080/InvestiumAPI/rest/comentario/por_post/${id}`)
        .then((resp) => resp.json())
        .then((data) => setComentarios(data))
        .catch((error) => console.error(error));

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
                        imagem={`/blog/${artigo.imgUrl}`}
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

                                    { comentarios.map((comentario) => {
                                        return(
                                            <div className="comentario">
                                                <div className="profile">
                                                    <BsFillPersonFill />
                                                </div>
                                                <div>
                                                    <h3>José Dias</h3>
                                                    <p>{comentario.conteudo}</p>
                                                </div>
                                            </div>
                                        )
                                    }) }
                
                                    <div id="novo_comentario">
                                        <div className="profile">
                                            <BsFillPersonFill />
                                        </div>
                                        <h3>Art Vandelay</h3>
                    
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