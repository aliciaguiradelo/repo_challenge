import './style.css'
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import ListaCards from "../../Components/ListaArtigos";
import Banner from "../../Components/Banner";
import { useState, useEffect } from "react";

import ReactLoading from 'react-loading';

export default function Blog(){

    const [artigosFiltrados, setArtigosFiltrados] = useState([])
    const [artigos, setArtigos] = useState([])
    const [categorias, setCategorias] = useState([])
    const [loading, setLoading] = useState(true)

    const [categoria, setCategoria] = useState('Todas as categorias')
    const [pesquisa, setPesquisa] = useState('')
    const [resultPesquisa, setResult] = useState('')

    useEffect(() => {
        //Carregando os artigos
        fetch("http://localhost:8080/InvestiumAPI/rest/postagem")
          .then((resp) => resp.json())
          .then((data) => {
            setArtigosFiltrados(data)
            setArtigos(data)
            setLoading(false)
          })
          .catch((error) => {
            console.error(error)
            setLoading(false)
          });

        //Carregando as categorias
        fetch("http://localhost:8080/InvestiumAPI/rest/categoria")
        .then((resp) => resp.json())
        .then((data) => setCategorias(data))
        .catch((error) => console.error(error));

    }, []);

    //Toda vez que o input de pesquisa ou o select de categoria mudar ele chama o handlePesquisa
    useEffect(() => {
        handlePesquisa()
    }, [pesquisa, categoria])

    const handlePesquisa = () => {

        if (pesquisa !== '') {
            const filtered = artigos.filter((artigo) => {
              const normalizedTitulo = artigo.titulo.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
              const normalizedConteudo = artigo.conteudo.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        
              const tituloContains = normalizedTitulo.includes(pesquisa);
              const conteudoContains = normalizedConteudo.includes(pesquisa);
        
              if (categoria === 'Todas as categorias') {
                return tituloContains || conteudoContains;
              }
        
              return (tituloContains || conteudoContains) && artigo.categoria.descricao === categoria;
            });
        
            setArtigosFiltrados(filtered);
            setResult(`Mostrando ${artigosFiltrados.length} resultado(s) para "${pesquisa}" em ${categoria}`)
        } 
        else if (categoria !== 'Todas as categorias'){
             
            const filtrados = artigosFiltrados.filter(
                (artigo) => artigo.categoria.descricao === categoria
            )

            setArtigosFiltrados(filtrados)
            setResult(`Mostrando ${artigosFiltrados.length} resultado(s) para ${categoria}`)
        }

        else {
            setArtigosFiltrados(artigos)
            setResult('')
        }
    }
    
    return(
        <div>
            <Header />

            <main id='blog'>
                <Banner 
                    imagem="/banner/banner_blog.jpg"
                    titulo="Aprenda mais sobre investimento, ofertas e educação financeira!"
                />

                { loading ? (
                    <div className='wrap_loading'>
                        <ReactLoading type="spinningBubbles" color='#444'/>
                        <p>Carregando artigos...</p>
                    </div>

                ) : (
                  <>
                    <section id="filter" className="container row">
                        <h2>Procurando algo específico?</h2>
                        <input 
                            type="text" 
                            placeholder="O que você quer encontrar?"
                            onChange={(e) => setPesquisa(e.target.value)}
                        />
                        <select id="categoria" onChange={(e) => setCategoria(e.target.value)}>
                            <option>Todas as categorias</option>
                            { categorias.map((categoria) => {
                                return (<option key={categoria.id}>{categoria.descricao}</option>)
                            }) }
                        </select>

                        <p id="result">{resultPesquisa}</p>
                    </section>

                    <ListaCards 
                        tipo="materia" 
                        dados={artigosFiltrados}
                        botao={false}
                    />

                  </>
                )}
            </main>

            <Footer />
        </div>
    )
}
