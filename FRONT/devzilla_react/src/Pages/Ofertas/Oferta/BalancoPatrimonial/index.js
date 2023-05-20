import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import ReactLoading from 'react-loading';

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

import { options } from '../../../../Assets/Utils'

export default function BalancoPatrimonial({ id }) {
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

  const [balancos, setBalancos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8080/InvestiumAPI/rest/balanco/byEmpresa/${id}`)
      .then((resp) => resp.json())
      .then((indicadores) => {
        setBalancos(indicadores);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="wrap_loading">
        <ReactLoading type="spinningBubbles" color="#444" />
        <p>Carregando balanços patrimoniais...</p>
      </div>
    );
  }

  if (balancos.length === 0) {
    return (
      <>
        <div className="container indicadores" style={{ paddingBottom: 0, paddingTop: 0 }}>
          <h1 className="line_after">Balanços Patrimoniais</h1>
        </div>

        <div className="container row charts_section indicadores" style={{ paddingTop: 0 }}>
          <p>Nenhum balanço patrimonial encontrado.</p>
        </div>
      </>
    );
  }

  const labelsAtivos = balancos.flatMap((balanco) =>
    balanco.ativos.map((ativo) => ativo.descricao)
  );
  const valoresAtivos = balancos.flatMap((balanco) =>
    balanco.ativos.map((ativo) => ativo.valor)
  );

  const labelsPassivos = balancos.flatMap((balanco) =>
    balanco.passivos.map((passivo) => passivo.descricao)
  );
  const valoresPassivos = balancos.flatMap((balanco) =>
    balanco.passivos.map((passivo) => passivo.valor)
  );

  const dataAtivos = {
    labels: labelsAtivos,
    datasets: [
      {
        label: 'Balanços Ativos',
        data: valoresAtivos,
        backgroundColor: '#005BAA',
      },
    ],
  };

  const dataPassivos = {
    labels: labelsPassivos,
    datasets: [
      {
        label: 'Balanços Passivos',
        data: valoresPassivos,
        backgroundColor: '#D18B57',
      },
    ],
  };

  return (
    <>
      <div className="container" style={{ paddingBottom: 0, paddingTop: 0 }}>
        <h1 className="line_after">Balanços Patrimoniais</h1>
      </div>

      <div className="container row charts_section" style={{ paddingTop: 0 }}>
        <div className="column wrap_data">
          <h2>Ativos</h2>
          <Bar data={dataAtivos} options={options} />
        </div>

        <div className="column wrap_data">
          <h2>Passivos</h2>
          <Bar data={dataPassivos} options={options} />
        </div>
      </div>
    </>
  );
}
