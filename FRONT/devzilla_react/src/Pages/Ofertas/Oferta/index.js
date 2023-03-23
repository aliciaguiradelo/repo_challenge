import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

import './style.css'

import ipos from '../../../Assets/DadosExemplos/ipos.json'

import { useState } from 'react'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    LineElement,
    PointElement
} from 'chart.js';

import { Bar, Line } from 'react-chartjs-2';

import { IoIosArrowDropdownCircle } from 'react-icons/io';

import default_profile from '../../../Assets/Governanca/default_pic.svg'
import default_profile_female from '../../../Assets/Governanca/default_pic_female.svg'
import alessandra from '../../../Assets/Governanca/Alessandra.jpg'
import alexandre from '../../../Assets/Governanca/Alexandre.jpg'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  

export default function Oferta () {

    const ipo = ipos[1];
    const relacionados = ipos.slice(1, 3)

    return(
        <div>
            <Header />
                <main id="empresa">
                    <Topo ipo={ipo}/>
                    <ApresentacaoEmpresa ipo={ipo} />
                    <Governanca />
                    <Sobre />
                    <IndicadoresFinanceiros ipo={ipo}/>
                    
                </main>
            <Footer />
        </div>
    )
}

function IndicadoresFinanceiros(props){
    const ipo = props.ipo;
    const [visualizacao, setVisualizacao] = useState('barra');

    
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Lucro',
          },
        },
      };

    return(
        <>
            <div className="container indicadores" style={{paddingBottom: 0}}>    
                <h1 className="line_after">Indicadores financeiros da empresa</h1>
            </div>

            <div className="container row charts_section indicadores" style={{paddingTop: 0}}>
                <div className="column wrap_data">
                    {/* <h2>Valores Brutos</h2> */}
                    <div className="wrap_filter">
                        <label>Tipo de visualização: </label>
                        <select 
                            id="visualizacao" 
                            onChange={(e)=> 
                                setVisualizacao(e.target.value)
                            }
                            value={visualizacao}
                        >
                            <option value="barra">Geral (Gráfico de barra)</option>
                            <option value="linha">Específica (Gráfico de linha)</option>
                            <option value="tabela">Detalhada (tabela)</option>
                        </select>
                    </div>

                        { visualizacao === 'tabela' ? <Table /> : visualizacao === 'barra' ?
                        <Bar data={ipo.indicadores_financeiros_bruto} /> :
                        <Line options={options} data={ipo.lucro} /> }

                    
                </div>

                {/* <div className="column wrap_data">
                    <h2>Valores Líquidos</h2>
                    <Bar data={ipo.indicadores_financeiros_liquido} />
                </div> */}
            </div>

            <div className="container" style={{paddingBottom: 0, paddingTop: 0}}>    
                <h1 className="line_after">Balanços Patrimoniais</h1>
            </div>

            <div className="container row charts_section" style={{paddingTop: 0}}>
                <div className="column wrap_data">
                    <h2>Ativos</h2>
                    <Bar data={ipo.balancos_patrimoniais_ativo} />
                </div>

                <div className="column wrap_data">
                    <h2>Passivos</h2>
                    <Bar data={ipo.balancos_patrimoniais_passivo} />
                </div>
            </div>
        </>
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

function ApresentacaoEmpresa(props){
    const ipo = props.ipo

    return(
        <section className="container apresentacao_empresa">
            <a href="https://nubank.com.br/relatorios-financeiros/" className='wrap_img' style={{background: ipo.cor}}>
                <img src={require(`../../../Assets/Images/ipo/${ipo.imagem}`)} className="logo"/>
            </a>
            <div className="informacoes_empresa">
                <div>
                    <h2>{ipo.nome}</h2>
                    <small>04.972.092/0001-22</small>
                </div>
                <small><strong>Setor:</strong> {ipo.setor}</small>
                <small><strong>Status:</strong> { ipo.status }</small>
                <small><strong>Valor inicial:</strong> R$ {ipo.valor}</small>
                <button className="btn btn_primary arrow">Prospecto</button>
            </div>

            <div className="direcionamentos">
                <div>
                    <h2>Informações importantes:</h2>
                    <a href="#governanca" className="btn btn_primary arrow text_blue">Diretoria da empresa <IoIosArrowDropdownCircle /> </a>
                    <a href="#sobre" className="btn btn_primary arrow text_blue">Sobre a Nubank <IoIosArrowDropdownCircle /></a>
                    <a href="#destino" className="btn btn_primary arrow text_blue">Destino dos recursos <IoIosArrowDropdownCircle /></a>
                    <a href="#indicadores" className="btn btn_primary arrow text_blue">Indicadores financeiros <IoIosArrowDropdownCircle /></a>
                    <a href="#balanco" className="btn btn_primary arrow text_blue">Balanços Patrimoniais <IoIosArrowDropdownCircle /></a>
                </div>
            </div>
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
            <section className="container" id="destino">
                <h1 className="line_after">DESTINO DOS RECURSOS DO IPO</h1>
                <p>Os R$ 16,5 bilhões que a companhia estima captar na oferta primária de seu IPO terão quatro destinos: capital de giro (crescimento), despesas operacionais (reforçar sua estrutura), despesas de capital (conceder mais crédito) e em investimentos e aquisições potenciais.</p>
            </section>
        </div>
    )
}

function Table(){
    return(
        <div className="wrap_table">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>2020 (R$ em milhões)</th>
                        <th>2021 (R$ em milhões)</th>
                        <th>Variação</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Receita bruta (R$)</td>
                        <td>1.936</td>
                        <td>2.197</td>
                        <td>13,4 %</td>
                    </tr>

                    <tr>
                        <td>Receita líquida (R$)</td>
                        <td>1780</td>
                        <td>2.017</td>
                        <td>13,3 %</td>
                    </tr>

                    <tr>
                        <td>Lucro bruto (R$)</td>
                        <td>800</td>
                        <td>717</td>
                        <td>11,6 %</td>
                    </tr>

                    <tr>
                        <td>Margem bruta (%)</td>
                        <td>39,7 %</td>
                        <td>40,3 %</td>
                        <td>0,6 p.p.</td>
                    </tr>

                    <tr>
                        <td>EBITDA</td>
                        <td>181</td>
                        <td>188</td>
                        <td>3,8 %</td>
                    </tr>

                    <tr>
                        <td>Margem EBITDA</td>
                        <td>10,2 %</td>
                        <td>9,3 %</td>
                        <td>(0,9) p.p.</td>
                    </tr>

                    <tr>
                        <td>Lucro Líquido</td>
                        <td>44</td>
                        <td>21</td>
                        <td>-53,1 %</td>
                    </tr>

                    <tr>
                        <td>Margem Líquida</td>
                        <td>2,5 %</td>
                        <td>1,0 %</td>
                        <td>(1,4) p.p.</td>
                    </tr>

                    <tr>
                        <td>Dívida Líquida</td>
                        <td>194,3</td>
                        <td>376,7</td>
                        <td> - </td>
                    </tr>

                    <tr>
                        <td>Receita Líquida Total</td>
                        <td>1780</td>
                        <td>2017</td>
                        <td>13,3 %</td>
                    </tr>

                    <tr>
                        <td>Número de lojas</td>
                        <td>61</td>
                        <td>72</td>
                        <td>18 %</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}