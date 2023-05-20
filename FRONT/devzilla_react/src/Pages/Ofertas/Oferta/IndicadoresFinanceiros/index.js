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

export default function IndicadoresFinanceiros(props) {
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

    const { oferta } = props;
    const [visualizacao, setVisualizacao] = useState('barra');

    return (
        <>
            <div className="container indicadores" style={{ paddingBottom: 0 }}>
                <h1 className="line_after">Indicadores financeiros</h1>
            </div>

            <div className="container row charts_section indicadores" style={{ paddingTop: 0 }}>
                {oferta.indicadoresFinanceiros.length > 0 ?
                    (
                        <div className="column wrap_data">
                            <div className="wrap_filter">
                                <label>Tipo de visualização: </label>
                                <select
                                    id="visualizacao"
                                    onChange={(e) =>
                                        setVisualizacao(e.target.value)
                                    }
                                    value={visualizacao}
                                >
                                    <option value="barra">Geral (Gráfico de barra)</option>
                                    <option value="tabela">Detalhada (tabela)</option>
                                </select>
                            </div>

                            {visualizacao === 'tabela' ?
                                <Table dados={oferta.indicadoresFinanceiros} /> :
                                <ChartIndicadores dados={oferta.indicadoresFinanceiros} />}
                        </div>) :
                    (<p style={{ textAlign: 'center' }}>Nenhum indicador financeiro encontrado.</p>)}
            </div>
        </>
    )
}

