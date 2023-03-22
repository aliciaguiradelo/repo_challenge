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
    const [visualizacao, setVisualizacao] = useState();

    
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
                    <h2>Valores Brutos</h2>
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
            <div className="primeiro_topo">
                <div className="bloco_empresa">
                    <small>Data início</small>
                    <p>20/11/2020</p>
                </div>
                <div className="blocoAtiva_empresa">
                    <small>Status</small>
                    <p>{ipo.status}</p>
                </div>
            </div>

            <hr />

            <div className="segundo_topo">
                <small>Setor</small>
                <p>{ipo.setor}</p>
            </div>
            <hr />
            
            <div className="terceiro_topo">
                <div>
                    <small>Faixa de preço inicial</small>
                    <p className="text_blue">R$ {ipo.valor}</p>
                </div>
            </div>
        </section>
    )
}

function ApresentacaoEmpresa(props){
    const ipo = props.ipo

    return(
        <section className="container apresentacao_empresa">
            <a href="/ofertas/ipo" className='wrap_img' style={{background: ipo.cor}}>
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
                    <a href="#sobre" className="btn btn_primary arrow text_blue">Sobre a OBA Hortifruti <IoIosArrowDropdownCircle /></a>
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
                <h1 className="line_after">SOBRE O GRUPO A EMPRESA</h1>
                <p>Com mais de 40 anos de experiência no setor de alimentos frescos, o Oba Hortifruti é uma rede varejista especializada em produtos perecíveis frescos de FLV que representam, em média, 77% das vendas das nossas lojas em 30 de setembro de 2020. Desde o início das operações em 1979, calcamos nosso crescimento em 3 pilares estratégicos que entendemos serem essenciais para o nosso sucesso: Experiência de Compra Única, Preocupação Com o Produto e Excelência Operacional. Oferecemos produtos alimentícios de alta qualidade, com foco em saúde e bem-estar e um comprometimento rigoroso com o atendimento ao cliente. Devido ao nosso foco em qualidade, frescor e atendimento, mais da metade de nossa base de clientes frequenta nossas lojas ao menos uma vez por mês. Essa alta frequência nos oferece uma grande proximidade aos nossos clientes e uma oportunidade de maximizar cada vez mais nosso share of wallet com novos produtos.</p>
            </section>
            <section className="container" id="destino">
                <h1 className="line_after">DESTINO DOS RECURSOS DO IPO</h1>
                <p>A Companhia pretende utilizar os recursos líquidos provenientes da Oferta Primária de acordo com seu plano de negócios para: (i) abertura de novas lojas, (ii) investimento nos canais digitais, e (iii) investimento na cadeia de logística.</p>
            </section>
        </div>
    )
}

function Table(){
    return(
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
                    <td><span class="neutro">=</span>1.936</td>
                    <td><span class="subiu"></span>2.197</td>
                    <td>13,4 %</td>
                </tr>

                <tr>
                    <td>Receita líquida (R$)</td>
                    <td><span class="neutro">=</span>1780</td>
                    <td><span class="subiu"></span>2.017</td>
                    <td>13,3 %</td>
                </tr>

                <tr>
                    <td>Lucro bruto (R$)</td>
                    <td><span class="subiu"></span>800</td>
                    <td><span class="caiu"></span>717</td>
                    <td>11,6 %</td>
                </tr>

                <tr>
                    <td>Margem bruta (%)</td>
                    <td><span class="neutro">=</span>39,7 %</td>
                    <td><span class="subiu"></span>40,3 %</td>
                    <td>0,6 p.p.</td>
                </tr>

                <tr>
                    <td>EBITDA</td>
                    <td><span class="neutro">=</span>181</td>
                    <td><span class="subiu"></span>188</td>
                    <td>3,8 %</td>
                </tr>

                <tr>
                    <td>Margem EBITDA</td>
                    <td><span class="neutro">=</span>10,2 %</td>
                    <td><span class="subiu"></span>9,3 %</td>
                    <td>(0,9) p.p.</td>
                </tr>

                <tr>
                    <td>Lucro Líquido</td>
                    <td><span class="subiu"></span>44</td>
                    <td><span class="caiu"></span>21</td>
                    <td>-53,1 %</td>
                </tr>

                <tr>
                    <td>Margem Líquida</td>
                    <td><span class="subiu"></span>2,5 %</td>
                    <td><span class="caiu"></span>1,0 %</td>
                    <td>(1,4) p.p.</td>
                </tr>

                <tr>
                    <td>Dívida Líquida</td>
                    <td><span class="caiu"></span>194,3</td>
                    <td><span class="subiu"></span>376,7</td>
                    <td> - </td>
                </tr>

                <tr>
                    <td>Receita Líquida Total</td>
                    <td><span class="subiu"></span>1780</td>
                    <td><span class="subiu"></span>2017</td>
                    <td>13,3 %</td>
                </tr>

                <tr>
                    <td>Número de lojas</td>
                    <td><span class="subiu"></span>61</td>
                    <td><span class="subiu"></span>72</td>
                    <td>18 %</td>
                </tr>
            </tbody>
        </table>
    )
}