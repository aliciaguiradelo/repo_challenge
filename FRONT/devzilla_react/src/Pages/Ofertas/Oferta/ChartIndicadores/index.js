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

import randomColor from 'randomcolor';

import { options } from '../../../../Assets/Utils'

export default function ChartIndicadores ({ dados }){
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

    dados = dados.filter(indicador => indicador.tipo.toLowerCase() == 'total')

    const anos = [...new Set(dados.map(item => item.ano))];
    const indicadores = [...new Set(dados.map(item => item.descricao))];

    const datasets = indicadores.map(indicador => {
        const dadosIndicador = dados.filter(item => item.descricao === indicador);

        return {
            label: indicador,
            data: dadosIndicador.map(item => parseFloat(item.valor)),
            backgroundColor: randomColor()
        };
    });

    const indicadores_financeiros = {
        labels: anos,
        datasets: datasets
    };        

    return(
        <Chart type='bar' data={indicadores_financeiros} options={options} />
    )
}