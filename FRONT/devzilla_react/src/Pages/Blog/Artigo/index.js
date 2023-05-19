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

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import ReactLoading from 'react-loading'

export default function Artigo() {

    const { id } = useParams()

    const [loading, setLoading] = useState(true)
    const [artigo, setArtigo] = useState({})

    const [comentarios, setComentarios] = useState([])
    const [novocomentario, setNovoComentario] = useState([])

    useEffect(() => {
        //Carregando o artigo pelo id
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


        //Carregando os comentários
        carregarComentarios();

    }, [])

    function carregarComentarios() {
        fetch(`http://localhost:8080/InvestiumAPI/rest/comentario/byPost/${id}`)
            .then((resp) => resp.json())
            .then((data) => setComentarios(data))
            .catch((error) => console.error(error));
    }

    function formatarData(data) {
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth()).padStart(2, '0');
        const ano = data.getFullYear();

        return `${ano}-${mes}-${dia}`;
    }

    function adicionarComentario() {
        const dataFormatada = formatarData(new Date())
        const dadosRecuperados = JSON.parse(sessionStorage.getItem("dadosUsuario"));
        if (dadosRecuperados) {
            const data = {
                conteudo: novocomentario,
                data: dataFormatada,
                usuario: dadosRecuperados,
                postagem: artigo
            };
            console.log(data)
            if (data.comentario !== '') {
                fetch('http://localhost:8080/InvestiumAPI/rest/comentario', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                })
                    .then(response => {
                        if (response.status >= 250) {
                            toast.error('Erro na requisição');
                        } else {
                            console.log(response)
                            setNovoComentario('');
                            carregarComentarios();
                            toast.success('Sucesso! Comentário cadastrado.');
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        toast.error(error);
                    });
            }
        } else {
            toast.error("Você precisa estar logado para comentar");
        }
    }

    return (
        <div>
            <Header />
            <main id='artigo'>
                {loading ? (
                    <div className='wrap_loading'>
                        <ReactLoading type="spinningBubbles" color='#444' />
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

                                <small>Artigos &gt; {artigo.categoria.descricao} &gt; {artigo.titulo} </small>

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
                                    {artigo.conteudo}

                                    <section id="comentarios">

                                        {comentarios.map((comentario) => {
                                            return (
                                                <div className="comentario">
                                                    <div className="profile">
                                                        <BsFillPersonFill />
                                                    </div>
                                                    <div>
                                                        <h3> {comentario.usuario.nome} </h3>
                                                        <p>{comentario.conteudo}</p>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                        <div id="novo_comentario">
                                            <div className="profile">
                                                <BsFillPersonFill />
                                            </div>
                                            <h3>Art Vandelay</h3>

                                            <textarea value={novocomentario} onChange={event => setNovoComentario(event.target.value)} placeholder="O que você achou da matéria?" rows="3"></textarea>
                                            <a className="btn btn_primary" onClick={adicionarComentario}>comentar</a>
                                        </div>

                                    </section>
                                </div>
                            </article>

                            {/* TODO: fazer uma requisição com getDadosByCategoria da categoria atual */}
                            <aside id="cards">
                                <h2>Artigos relacionados</h2>
                                <ListaArtigos tipo="materia" max={2} />
                            </aside>
                        </section>

                        <ToastContainer
                            autoClose={2500}
                            position="bottom-right"

                        />
                    </>
                )}
                <Footer />
            </main>
        </div>
    )
}