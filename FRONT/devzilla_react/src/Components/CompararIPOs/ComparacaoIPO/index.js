
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

import { Chart } from 'react-chartjs-2';

import ReactLoading from 'react-loading'

import { useState, useEffect, useContext } from 'react';

import { ComparacaoContext } from "../../CompararIPOs"

export default function ComparacaoIPO(props){

    const { ofertas } = useContext(ComparacaoContext)

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

    const oferta1 = ofertas[0]
    const oferta2 = ofertas[1]

    return(
        <section id='comparacao'>

            <InfoEmpresa oferta={oferta1} />
            <InfoEmpresa oferta={oferta2} />

            {/* <div className="wrap_filter">
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
            </div> */}

            {/* <div className="wrap_filter">
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
            </div> */}

            {/* { visualizacao == 'barra' && 
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
            } */}

            {/* { visualizacao === 'tabela' ? <Table ipos={ ipos } /> :
            <Chart type='bar' data={ data } /> } */}
        </section>
    )
}

function InfoEmpresa({ oferta }){
    return(
        <div className='empresa_info'>
            <a href={oferta.linkEmpresa} target='_blank' >
                <div className="option wrap_img" style={{background: oferta.cor }}>
                    <span className='logo' style={{backgroundImage: `url(${oferta.imagem})`}} />
                </div>
                
                <h3>{oferta.nome}</h3>
            </a>

            <small className='cnpj'>{123}</small>
            <small><strong>Setor:</strong> { oferta.setor.descricao } </small>
            <small>
                <strong>Status: </strong> 
                <strong style={{color: oferta.ativoIpo ? '#0B8C3D' : '#BD3800'}}>
                    { oferta.ativoIpo ? 'ativa' : 'finalizada' }
                </strong>
            </small>
            <small><strong>Valor inicial:</strong> R$ {oferta.valorInicialIpo.toFixed(2).replace('.', ',')}</small>
            <a href={oferta.linkProspecto} className="btn btn_secondary arrow_long">Prospecto</a>
        </div>
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