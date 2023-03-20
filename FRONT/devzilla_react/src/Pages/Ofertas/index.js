import './style.css'
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import ListaCards from "../../Components/ListaArtigos";
import ipos from '../../Assets/DadosExemplos/ipos.json'
import Banner from "../../Components/Banner";
import { useState } from "react";

import icon_status from '../../Assets/Icons/icon_status.svg';
import icon_money from '../../Assets/Icons/icon_money.svg';
import icon_receipt from '../../Assets/Icons/icon_receipt.svg';
import icon_chart from '../../Assets/Icons/icon_chart2.svg';
import icon_building from '../../Assets/Icons/icon_buildings.svg';


export default function Ofertas(){
    const [filteredIPOs, setFilteredIPOs] = useState(ipos)
    // const [categoria, setCategoria] = useState('todas')

    return(
        <div>
            <Header />

            <main id='ofertas'>
                <Banner 
                    imagem="investimento.jpg"
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
                        dados={filteredIPOs}
                        botao={false}
                    />
                </section>

                
            </main>

            <Footer />
        </div>
    )
}