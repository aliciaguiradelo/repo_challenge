import { useEffect, useState } from "react";

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

import ReactLoading from 'react-loading'

import { Bar, Line, Chart } from 'react-chartjs-2';

export default function IndicadoresFinanceiros(props){
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

    const { ipo, id } = props;
    const [visualizacao, setVisualizacao] = useState('barra');

    const[indicadoresFinanceiros, setIndicadores] = useState([])
    const[loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:8080/InvestiumAPI/rest/indicadorFinanceiro/byEmpresa/${id}`)
        .then(resp => resp.json())
        .then((indicadores) => { 
            setIndicadores(indicadores)
            setLoading(false)
        })
        .catch(error => {
            console.error(error)
            setLoading(false)
        })
    }, [id])

    return(
        <>
            <div className="container indicadores" style={{paddingBottom: 0}}>    
                <h1 className="line_after">Indicadores financeiros</h1>
            </div>

            { loading ? (
                <div className='wrap_loading'>
                    <ReactLoading type="spinningBubbles" color='#444'/>
                    <p>Carregando indicadores financeiros...</p>
                </div>
            ) : (
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
                                <option value="tabela">Detalhada (tabela)</option>
                            </select>
                        </div>

                            { visualizacao === 'tabela' ? <Table dados={indicadoresFinanceiros}/> : 
                            <Chart type='bar' data={ipo.indicadores_financeiros_bruto} /> }        
                    </div>
                </div>
            ) }

            

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

function Table({ dados }){

    const anos = [...new Set(dados.map(item => item.ano.split('-')[0]))];

    console.log(dados)

    return(
        <div className="wrap_table">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        { anos.map(ano => (<th key={ano}>{ano} </th>)) }
                    </tr>
                </thead>

                <tbody>
                    {dados.map(item => (
                        <tr key={item.id}>
                        <td>{item.descricao} {item.tipo}</td>
                        {anos.map(ano => {
                            const dadosAno = dados.filter(dado => dado.ano.split('-')[0] === ano);
                            const dadoAno = dadosAno.find(dado => dado.descricao === item.descricao && dado.tipo === item.tipo);
                            return (
                                <td key={`${item.id}-${ano}`}>
                                    {dadoAno && dadoAno.valor}
                                </td>
                            );
                        })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}