import './style.css'
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import ListaCards from "../../Components/ListaArtigos";
import ipos from '../../Assets/DadosExemplos/ipos.json'
import Banner from "../../Components/Banner";
import { useState, useEffect } from "react";

import icon_status from '../../Assets/Icons/icon_status.svg';
import icon_money from '../../Assets/Icons/icon_money.svg';
import icon_receipt from '../../Assets/Icons/icon_receipt.svg';
import icon_chart from '../../Assets/Icons/icon_chart2.svg';
import icon_building from '../../Assets/Icons/icon_buildings.svg';


export default function Ofertas(){
    const [empresasFiltradas, setEmpresasFiltradas] = useState([])
    const [empresas, setEmpresas] = useState([])
    const [loading, setLoading] = useState(true)

    const [categoria, setCategoria] = useState('Todas as ofertas')
    const [pesquisa, setPesquisa] = useState('')
    const [resultPesquisa, setResult] = useState('')

    useEffect(() => {
        //Carregando os empresas
        fetch("http://localhost:8080/InvestiumAPI/rest/empresa")
          .then((resp) => resp.json())
          .then((data) => {
            setEmpresasFiltradas(data)
            setEmpresas(data)
            console.log(data)
            setLoading(false)
          })
          .catch((error) => {
            console.error(error)
            setLoading(false)
          });

    }, []);

    //Toda vez que o input de pesquisa ou o select de categoria mudar ele chama o handlePesquisa
    useEffect(() => {
        handlePesquisa()
    }, [pesquisa, categoria])

    const handlePesquisa = () => {

        if (pesquisa !== '') {
            const filtered = empresas.filter((empresa) => {
              const normalizedTitulo = empresa.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
              const normalizedConteudo = empresa.descricao.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        
              const tituloContains = normalizedTitulo.includes(pesquisa);
              const conteudoContains = normalizedConteudo.includes(pesquisa);
        
              if (categoria === 'Todas as ofertas') {
                return tituloContains || conteudoContains;
              }
        
            //   TODO: FILTRAR POR STATUS IPO FINALIZADA OU ATIVA
            //   return (tituloContains || conteudoContains) && empresa.categoria.descricao === categoria;
            });
        
            setEmpresasFiltradas(filtered);
            setResult(`Mostrando ${empresasFiltradas.length} resultado(s) para "${pesquisa}" em ${categoria}`)
        } 
        else if (categoria !== 'Todas as ofertas'){
             
            //   TODO: FILTRAR POR STATUS IPO FINALIZADA OU ATIVA
            // const filtrados = empresasFiltrados.filter(
            //     (empresa) => empresa.categoria.descricao === categoria
            // )

            // setempresasFiltrados(filtrados)
            // setResult(`Mostrando ${empresasFiltrados.length} resultado(s) para ${categoria}`)
        }

        else {
            setEmpresasFiltradas(empresas)
            setResult('')
        }
    }

    return(
        <div>
            <Header />

            <main id='ofertas'>
                <Banner 
                    imagem="/banner/investimento.jpg"
                    titulo="Encontre as ofertas e compare para investir confiante!"
                />

                <section id="filter" className="container row">
                    <h2>Procurando algo específico?</h2>
                    <input type="text" placeholder="O que você quer encontrar?"/>
                    <select id="categoria">
                        <option>Todas as ofertas</option>
                        <option>finalizadas</option>
                        <option>disponíveis</option>
                    </select>
                </section>

                <section id="container_filter" className='container'>
                    {/* <aside>
                        <h2>Filtrar por:</h2>

                        <div className='filtro'>
                            <div className='heading'>
                                <img src={icon_status} /> status
                            </div>

                            <div className='body'>
                                <div class="wrap_radio">
                                    <input type="radio" name="filter" id="disponivel" checked />
                                    <label for="disponivel">disponível</label>
                                </div>

                                <div class="wrap_radio">
                                    <input type="radio" name="filter" id="finalizado" />
                                    <label for="finalizado">finalizado</label>
                                </div>
                            </div>
                        </div>

                        <div className='filtro'>
                            <div className='heading'>
                                <img src={icon_status} /> status
                            </div>

                            <div className='body'>
                                <div class="wrap_radio">
                                    <input type="radio" name="filter" id="disponivel" checked />
                                    <label for="disponivel">disponível</label>
                                </div>

                                <div class="wrap_radio">
                                    <input type="radio" name="filter" id="finalizado" />
                                    <label for="finalizado">finalizado</label>
                                </div>
                            </div>
                        </div>
                    </aside> */}

                    <ListaCards 
                        tipo="ipos" 
                        // dados={empresasFiltradas}
                        botao={false}
                    />
                </section>

                
            </main>

            <Footer />
        </div>
    )
}