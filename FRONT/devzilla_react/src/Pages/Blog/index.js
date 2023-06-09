import './style.css';
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import ListaCards from "../../Components/ListaArtigos";
import Banner from "../../Components/Banner";
import { useState, useEffect } from "react";

import ReactLoading from 'react-loading';

import { useQuery } from 'react-query'

export default function Blog() {
  const [artigosFiltrados, setArtigosFiltrados] = useState([]);
  // const [artigos, setArtigos] = useState([]);
  // const [categorias, setCategorias] = useState([]);
  // const [loading, setLoading] = useState(true);

  const [categoria, setCategoria] = useState('Todas as categorias');
  const [pesquisa, setPesquisa] = useState('');
  const [resultPesquisa, setResult] = useState('');

  // useEffect(() => {
  //   // Carregar artigos
  //   fetch("http://localhost:8080/InvestiumAPI/rest/postagem")
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       setArtigosFiltrados(data);
  //       setArtigos(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       setLoading(false);
  //     });

  //   // Carregar categorias
  //   fetch("http://localhost:8080/InvestiumAPI/rest/categoria")
  //     .then((resp) => resp.json())
  //     .then((data) => setCategorias(data))
  //     .catch((error) => console.error(error));
  // }, []);

  const { isLoading, error: errorArtigos, data: artigos } = useQuery('repoBlog', () =>
    fetch('http://localhost:8080/InvestiumAPI/rest/postagem').then(res =>
      res.json()
    )
  )

  const { isLoading: isLoadingCategoria, error: errorCategoria, data: categorias } = useQuery('repoCategoria', () =>
    fetch('http://localhost:8080/InvestiumAPI/rest/categoria').then(res =>
      res.json()
    )
  )

  useEffect(() => {
    setArtigosFiltrados(filtrarArtigos(pesquisa, categoria));
  }, [pesquisa, categoria]);

  const filtrarArtigos = (pesquisa, categoria) => {
    if (pesquisa !== '') {
      const filtered = artigos.filter((artigo) => {
        const normalizedTitulo = artigo.titulo
          ?.toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '');
        const normalizedConteudo = artigo.conteudo
          ?.toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '');
  
        const tituloContains = normalizedTitulo?.includes(
          pesquisa.toLowerCase()
        );
        const conteudoContains = normalizedConteudo?.includes(
          pesquisa.toLowerCase()
        );
  
        if (categoria === 'Todas as categorias') {
          return tituloContains || conteudoContains;
        }
  
        return (
          (tituloContains || conteudoContains) &&
          artigo.categoria?.descricao === categoria
        );
      });
  
      setResult(
        `Mostrando ${filtered.length} resultado(s) para "${pesquisa}" em ${categoria}`
      );
      return filtered;
    } else if (categoria !== 'Todas as categorias') {
      const filtered = artigos.filter(
        (artigo) => artigo.categoria?.descricao === categoria
      );
  
      setResult(`Mostrando ${filtered.length} resultado(s) para ${categoria}`);
      return filtered;
    } else {
      setResult('');
      return artigos;
    }
  };  

  const handlePesquisa = (e) => {
    setPesquisa(e.target.value);
    setArtigosFiltrados(filtrarArtigos(e.target.value, categoria));
  };

  return (
    <div>
      <Header />

      <main id="blog">
        <Banner
          imagem="/banner/banner_blog.jpg"
          titulo="Aprenda mais sobre investimento, ofertas e educação financeira!"
        />

        {isLoading ? (
          <div className="wrap_loading">
            <ReactLoading type="spinningBubbles" color="#444" />
            <p>Carregando artigos...</p>
          </div>
        ) : (
          <>
            <section id="filter" className="container row">
              <h2>Procurando algo específico?</h2>
              <input
                type="text"
                placeholder="O que você quer encontrar?"
                value={pesquisa}
                onChange={handlePesquisa}
              />
              <select
                id="categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option>Todas as categorias</option>
                {(!isLoadingCategoria && !errorCategoria) &&
                  categorias?.map((categoria) => (
                    <option key={categoria.id}>{categoria.descricao}</option>
                  ))}
              </select>

              <p id="result">{resultPesquisa}</p>
            </section>

            <ListaCards tipo="materia" dados={artigos} botao={false} />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
