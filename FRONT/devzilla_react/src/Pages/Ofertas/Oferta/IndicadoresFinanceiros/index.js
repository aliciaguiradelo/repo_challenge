import { useState } from "react";

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

    const ipo = props.ipo;
    const [visualizacao, setVisualizacao] = useState('barra');

    return(
        <>
            <div className="container indicadores" style={{paddingBottom: 0}}>    
                <h1 className="line_after">Indicadores financeiros</h1>
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
                            <option value="tabela">Detalhada (tabela)</option>
                        </select>
                    </div>

                        { visualizacao === 'tabela' ? <Table /> : 
                        <Chart type='bar' data={ipo.indicadores_financeiros_bruto} /> }

                    
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