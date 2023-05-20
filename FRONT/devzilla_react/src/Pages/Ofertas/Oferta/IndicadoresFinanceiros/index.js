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

import { Bar } from 'react-chartjs-2';

import Table from "../Table";
import ChartIndicadores from "../ChartIndicadores";
import BalancoPatrimonial from "../BalancoPatrimonial";

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

                            { visualizacao === 'tabela' ? 
                            <Table dados={indicadoresFinanceiros}/> : 
                            <ChartIndicadores dados={indicadoresFinanceiros} /> }        
                    </div>
                </div>
            ) }
        </>
    )
}

