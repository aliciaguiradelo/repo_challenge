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

import { options } from '../../../../Assets/Utils';

export default function ChartComparacao({ ofertas, tipo }) {
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

    const oferta1 = ofertas[0];
    const oferta2 = ofertas[1];

    const anosSet = new Set([
        ...oferta1.indicadoresFinanceiros
            .map(item => item.ano),

        ...oferta2.indicadoresFinanceiros
            .map(item => item.ano)
    ]);

    const anosArray = Array.from(anosSet) || []

    const datasetOferta1 = {
        label: `${tipo} de ${oferta1.nome}`,
        data: anosArray.map(ano => {
            const indicador = oferta1.indicadoresFinanceiros.find(item => `${item.descricao} ${item.tipo}` == tipo && item.ano == ano);
            const valor = indicador ? parseFloat(indicador.valor) : 0;
            return valor;
        }),
        backgroundColor: oferta1.cor,
    };

    const datasetOferta2 = {
        label: `${tipo} de ${oferta2.nome}`,
        data: anosArray.map(ano => {
            const indicador = oferta2.indicadoresFinanceiros.find(item => `${item.descricao} ${item.tipo}` == tipo && item.ano == ano);
            const valor = indicador ? parseFloat(indicador.valor) : 0;
            return valor;
        }),
        backgroundColor: oferta2.cor,
    };

    const datasets = [];

    datasets.push(datasetOferta1);
    datasets.push(datasetOferta2);

    const data = {
        labels: anosArray,
        datasets: datasets,
    };

    return <Chart type="bar" data={data} options={options} />;
}
