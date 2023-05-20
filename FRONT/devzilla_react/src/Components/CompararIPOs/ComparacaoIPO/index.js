import { useState, useContext } from 'react';

import { ComparacaoContext } from "../../CompararIPOs"

import Table from './TableComparacao'
import ChartComparacao from './ChartComparacao';

export default function ComparacaoIPO(props) {

    const { ofertas } = useContext(ComparacaoContext)

    const oferta1 = ofertas[0]
    const oferta2 = ofertas[1]

    //Pegando os anos que tem indicadores financeiros disponíveis das ofertas
    const anosSet = new Set([
        ...oferta1.indicadoresFinanceiros
            .map(item => item.ano),

        ...oferta2.indicadoresFinanceiros
            .map(item => item.ano)
    ]);

    const anosArray = Array.from(anosSet) || []

    //Pegando as descrições dos indicadores disponíveis das ofertas
    const descSet = new Set([
        ...oferta1.indicadoresFinanceiros
            .map(item => `${item.descricao} ${item.tipo}`),

        ...oferta2.indicadoresFinanceiros
            .map(item => `${item.descricao} ${item.tipo}`)
    ]);

    const descArray = Array.from(descSet)

    const [visualizacao, setVisualizacao] = useState('barra');
    const [ano, setAno] = useState(anosArray[0]);
    const [dado, setDado] = useState(descArray[0]);

    return (
        <section id='comparacao'>

            <InfoEmpresa oferta={oferta1} />
            <InfoEmpresa oferta={oferta2} />

            {(oferta1.indicadoresFinanceiros.length > 0 || oferta2.indicadoresFinanceiros.length > 0) ?
                (<>
                    <h2>Dados financeiros de {oferta1.nome} e {oferta2.nome}</h2>

                    <div className="wrap_filter">
                        <label>Visualização: </label>
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

                    {visualizacao == 'tabela' &&
                        <div className="wrap_filter">
                            <label>Ano: </label>
                            <select
                                id="visualizacao"
                                onChange={(e) => setAno(e.target.value)}
                                value={ano}
                            >
                                {anosArray.map((ano) => {
                                    return <option value={ano} key={ano}>{ano}</option>
                                })}

                            </select>
                        </div>
                    }

                    {visualizacao == 'barra' &&
                        <div className="wrap_filter">
                            <label>Indicadores: </label>
                            <select
                                id="dados"
                                onChange={(e) =>
                                    setDado(e.target.value)
                                }
                                value={dado}
                            >
                                {descArray.map((desc) => {
                                    return <option value={desc} key={desc}>{desc}</option>
                                })}
                            </select>
                        </div>
                    }

                    {visualizacao === 'tabela' ?
                        <Table ofertas={ofertas} ano={ano} />
                        :
                        <ChartComparacao ofertas={ofertas} tipo={dado} />}
                </>)
                :
                (<p>Nenhum dado financeiro encontrado para comparação!</p>)}

        </section>
    )
}

function InfoEmpresa({ oferta }) {

    return (
        <div className='empresa_info'>
            <a href={oferta.linkEmpresa} target='_blank' >
                <div className="option wrap_img" style={{ background: oferta.cor }}>
                    <span className='logo' style={{ backgroundImage: `url(${oferta.imagem})` }} />
                </div>

                <h3>{oferta.nome}</h3>
            </a>

            <small className='cnpj'>{123}</small>
            <small><strong>Setor:</strong> {oferta.setor.descricao} </small>
            <small>
                <strong>Status: </strong>
                <strong style={{ color: oferta.ativoIpo ? '#0B8C3D' : '#BD3800' }}>
                    {oferta.ativoIpo ? 'ativa' : 'finalizada'}
                </strong>
            </small>
            <small><strong>Valor inicial:</strong> R$ {oferta.valorInicialIpo.toFixed(2).replace('.', ',')}</small>
            <a href={oferta.linkProspecto} target="_blank" className="btn btn_secondary arrow_long">Prospecto</a>
        </div>
    )
}