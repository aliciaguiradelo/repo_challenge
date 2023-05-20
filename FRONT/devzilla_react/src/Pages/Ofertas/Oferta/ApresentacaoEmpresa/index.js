import { useState } from 'react'

import comparison from '../../../../Assets/Illustrations/illustr_comparison.svg'

import { IoIosArrowDropdownCircle } from 'react-icons/io';

import Modal from "../../../../Components/Modal";

import ipos from '../../../../Assets/DadosExemplos/ipos.json'

import './style.css'

import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
} from 'chart.js';

import { Bar, Line, Chart } from 'react-chartjs-2';

import CompararIPOs from '../../../../Components/CompararIPOs';

export default function ApresentacaoEmpresa(props){

    const { id, nome, linkEmpresa, cor, imagem, setor, ativoIpo, valorInicialIpo, linkProspecto } = props.oferta

    const status = ativoIpo ? 'ativa' : 'finalizada'

    const [showModal, setShow] = useState(false)

    const abrirModal = (e) => {
        e.preventDefault();
        setShow(true)
    }

    const fecharModal = () => {
        setShow(false);
    };

    return(
        <section className="container apresentacao_empresa">

            <CompararIPOs id={id} show={showModal} abrirModal={abrirModal} fecharModal={fecharModal} />

            <a href={linkEmpresa} target="_blank" className='wrap_img' style={{background: cor }}>
                <img src={imagem} className="logo" alt={`Logo da empresa ${nome}`}/>
            </a>
            <div className="informacoes_empresa">
                <div>
                    <h2>{nome}</h2>
                    <small>04.972.092/0001-22</small>
                </div>
                <small><strong>Setor:</strong> {setor.descricao}</small>
                <small><strong>Status:</strong> { status }</small>
                <small><strong>Valor inicial:</strong> R$ { valorInicialIpo.toFixed(2).replace('.', ',') }</small>
                <a href={linkProspecto} target='_blank' className="btn btn_primary arrow">Prospecto</a>
            </div>

            <div className="direcionamentos">
                <div>
                    <h2>Informações importantes</h2>
                    <a href="#governanca" className="btn btn_primary arrow text_blue">Diretoria da empresa <IoIosArrowDropdownCircle /> </a>
                    <a href="#sobre" className="btn btn_primary arrow text_blue">Sobre a Nubank <IoIosArrowDropdownCircle /></a>
                    <a href="#oferta" className="btn btn_primary arrow text_blue">Destino dos recursos <IoIosArrowDropdownCircle /></a>
                    <a href="#indicadores" className="btn btn_primary arrow text_blue">Indicadores financeiros <IoIosArrowDropdownCircle /></a>
                    <a href="#balanco" className="btn btn_primary arrow text_blue">Balanços Patrimoniais <IoIosArrowDropdownCircle /></a>
                </div>
            </div>

            <div className="comparar">
                <h2>Comparar com outra oferta</h2>
                <img src={comparison} />

                <button className="btn btn_primary arrow" onClick={abrirModal}>Comparar oferta </button>
            </div>
        </section>
    )
}

function SelecaoOferta(){

    const [oferta, setOferta] = useState();

    return(
        <div className='wrap_options' onChange={(e) => setOferta(e.target.value)} value={oferta}>
            {ipos.map((ipo, index) => {
                const logo = require(`../../../../Assets/Images/ipo/${ipo.imagem_dark}`)
                return(
                    <label key={ipo.id}>
                        <input 
                            type="radio" 
                            name="forma_pgt" 
                            value={ipo.nome} 
                            defaultChecked={index == 0}
                            onChange={(e) => setOferta(e.target.value)} />
                        <div className="option wrap_img">
                            <span className='logo' style={{backgroundImage: `url(${logo})`}} />
                            <h3>{ipo.nome}</h3>
                        </div>
                    </label>
                )
            })}
            
        </div>
    )
}

function ComparacaoIPO(props){

    ChartJS.register(
        LinearScale,
        CategoryScale,
        BarElement,
        PointElement,
        LineElement,
        Legend,
        Tooltip,
        LineController,
        BarController
    );

    const ipos = props.ipos
    const logo1 = require(`../../../../Assets/Images/ipo/${ipos[0].imagem_dark}`)
    const logo2 = require(`../../../../Assets/Images/ipo/${ipos[1].imagem_dark}`)

    const [visualizacao, setVisualizacao] = useState('barra');
    const [ano, setAno] = useState(2022);
    const [dado, setDado] = useState('Receita');

    const labels = [2022, 2021, 2020];

    const data = {
        labels,
        datasets: [
            {
                label: `${dado} de ${ipos[0].nome}`,
                data: [975, 645, 999],
                backgroundColor: ipos[0].cor,
            },
            {
                label: `${dado} de ${ipos[1].nome}`,
                data: [998, 768, 896],
                backgroundColor: ipos[1].cor,
            },
        ],
    };

    return(
        <section id='comparacao'>
            <div className='empresa_info'>
                <div className="option wrap_img">
                    <span className='logo' style={{backgroundImage: `url(${logo1})`}} />
                </div>
                <h3>{ipos[0].nome}</h3>
                <small className='cnpj'>{ipos[0].cnpj}</small>

                <small><strong>Setor:</strong> {ipos[0].setor}</small>
                <small>
                    <strong>Status: </strong> 
                    <strong style={{color: ipos[0].status == 'ativa' ? '#0B8C3D' : '#BD3800'}}>{ ipos[0].status }</strong>
                </small>
                <small><strong>Valor inicial:</strong> R$ {ipos[0].valor}</small>
                <a href="#" className="btn btn_secondary arrow_long">Prospecto</a>
            </div>

            <div className='empresa_info'>
                <div className="option wrap_img">
                    <span className='logo' style={{backgroundImage: `url(${logo2})`}} />
                </div>
                <h3>{ipos[1].nome}</h3>

                <small className='cnpj'>{ipos[1].cnpj}</small>
                <small><strong>Setor:</strong> {ipos[1].setor}</small>
                <small>
                    <strong>Status: </strong> 
                    <strong style={{color: ipos[1].status == 'ativa' ? '#0B8C3D' : '#BD3800'}}>{ ipos[1].status }</strong>
                </small>
                <small><strong>Valor inicial:</strong> R$ {ipos[1].valor}</small>
                <a href="#" className="btn btn_secondary arrow_long">Prospecto</a>
            </div>

            <div className="wrap_filter">
                <label>Visualização: </label>
                <select 
                    id="visualizacao" 
                    onChange={(e)=> 
                        setVisualizacao(e.target.value)
                    }
                    value={visualizacao}
                >
                    <option value="barra">Geral (Gráfico de barra)</option>
                    <option value="tabela">Detalhada (tabela)</option>
                </select>
            </div>

            <div className="wrap_filter">
                <label>Ano: </label>
                <select 
                    id="visualizacao" 
                    onChange={(e)=> 
                        setAno(e.target.value)
                    }
                    value={ano}
                >
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select>
            </div>

            { visualizacao == 'barra' && 
                <div className="wrap_filter">
                    <label>Dados: </label>
                    <select 
                        id="dados" 
                        onChange={(e)=> 
                            setDado(e.target.value)
                        }
                        value={dado}
                    >
                        <option value="Receita">Receita</option>
                        <option value="EBITDA">EBITDA</option>
                        <option value="Margem EBITDA">Margem EBITDA</option>
                        <option value="Lucro">Lucro</option>
                        <option value="Margem">Margem</option>
                        <option value="Dívida">Dívida</option>
                        <option value="lojas">N. de lojas</option>
                    </select>
                </div>
            }

            { visualizacao === 'tabela' ? <Table ipos={ ipos } /> :
            <Chart type='bar' data={ data } /> }
        </section>
    )
}

function Table({ ipos }){
    return(
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>{ipos[0].nome}</th>
                        <th>{ipos[1].nome}</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Receita líquida (R$)</td>
                        <td>1780</td>
                        <td>2.017</td>
                    </tr>

                    <tr>
                        <td>EBITDA</td>
                        <td>181</td>
                        <td>188</td>
                    </tr>

                    <tr>
                        <td>Margem EBITDA</td>
                        <td>10,2 %</td>
                        <td>9,3 %</td>
                    </tr>

                    <tr>
                        <td>Lucro Líquido</td>
                        <td>44</td>
                        <td>21</td>
                    </tr>

                    <tr>
                        <td>Margem Líquida</td>
                        <td>2,5 %</td>
                        <td>1,0 %</td>
                    </tr>

                    <tr>
                        <td>Dívida Líquida</td>
                        <td>194,3</td>
                        <td>376,7</td>
                    </tr>

                    <tr>
                        <td>Receita Líquida Total</td>
                        <td>1780</td>
                        <td>2017</td>
                    </tr>

                    <tr>
                        <td>Número de lojas</td>
                        <td>61</td>
                        <td>72</td>
                    </tr>
                </tbody>
            </table>
    )
}