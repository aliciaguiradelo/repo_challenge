import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

import './style.css'

import ipos from '../../../Assets/DadosExemplos/ipos.json'

import default_profile from '../../../Assets/Governanca/default_pic.svg'
import default_profile_female from '../../../Assets/Governanca/default_pic_female.svg'
import alessandra from '../../../Assets/Governanca/Alessandra.jpg'
import alexandre from '../../../Assets/Governanca/Alexandre.jpg'

import IndicadoresFinanceiros from "./IndicadoresFinanceiros";
import ApresentacaoEmpresa from "./ApresentacaoEmpresa"

export default function Oferta () {

    const ipo = ipos[1];
    const relacionados = ipos.slice(1, 3)

    return(
        <div>
            <Header />
                <main id="empresa">
                    <Topo ipo={ipo}/>
                    <ApresentacaoEmpresa ipo={ipo} />
                    <Sobre />
                    <Governanca />
                    <DestinoRecursos />
                    <IndicadoresFinanceiros ipo={ipo}/>
                    
                </main>
            <Footer />
        </div>
    )
}

function Topo(props){

    const ipo = props.ipo

    return(
        <section className="container topo_empresas">
            {/* <div className="primeiro_topo"> */}
                <div className="bloco_empresa">
                    <small>Data início</small>
                    <p>20/11/2020</p>
                </div>
                <div className="blocoAtiva_empresa">
                    <small>Status</small>
                    <p>{ipo.status}</p>
                </div>

                <div className="segundo_topo">
                    <small>Setor</small>
                    <p>{ipo.setor}</p>
                </div>

                <div className="terceiro_topo">
                    <small>Faixa de preço inicial</small>
                    <p className="text_blue">R$ {ipo.valor}</p>
                </div>
            {/* </div> */}
        </section>
    )
}

function Governanca(){
    return(
        <section className="container governanca" id="governanca">
            <h1 className="line_after">Diretoria (Governança)</h1>
            <article>
                <div>
                    <img src={default_profile} alt="" />
                    <div>
                        <p>Alex Alves dos Santos Brito</p>
                        <small>Diretor Presidente</small>
                    </div>
                </div>
                <div>
                    <img src={alexandre} alt="Alexandre Otomo de Almeida" />
                    <div>
                        <p>Alexandre Otomo de Almeida</p>
                        <small>Diretor Financeiro e Diretor de Relações com Investidores</small>
                    </div>
                </div>
                <div>
                    <img src={alessandra} alt="Alessandra Medeiros de Oliveira" />
                    <div>
                        <p>Alessandra Medeiros de Oliveira</p>
                        <small>Diretora sem designação específica</small>
                    </div>
                </div>
                <div>
                    <img src={default_profile} alt="" />
                    <div>
                        <p>Cezar Lucas de Gusmão</p>
                        <small>Diretor sem designação específica</small>
                    </div>
                </div>
            </article>
        </section>
    )
}

function Sobre(){
    return(
        <div className="gray_wallpaper">
            <section className="container" id="sobre">
                <h1 className="line_after">SOBRE A EMPRESA NUBANK</h1>
                <p>uma das maiores plataformas de serviços financeiros digitais no mundo, servindo aproximadamente 75 milhões de clientes no Brasil, México e Colômbia. Em nossa posição de liderança, usamos tecnologia proprietária e práticas inovadoras para criar novas soluções e experiências financeiras para indivíduos e PMEs. Guiando-se sempre por sua missão, estão contribuindo para aumentar o acesso financeiro na América Latina.</p>
            </section>
        </div>
    )
}

function DestinoRecursos(){
    return(
        <div className="gray_wallpaper">
            <section className="container" id="destino">
                <h1 className="line_after">DESTINO DOS RECURSOS DO IPO</h1>
                <p>Os R$ 16,5 bilhões que a companhia estima captar na oferta primária de seu IPO terão quatro destinos: capital de giro (crescimento), despesas operacionais (reforçar sua estrutura), despesas de capital (conceder mais crédito) e em investimentos e aquisições potenciais.</p>
            </section>
        </div>
    )
}

