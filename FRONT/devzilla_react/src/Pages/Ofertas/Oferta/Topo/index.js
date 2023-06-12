
import { RxCalendar } from 'react-icons/rx'
import { BiBuildings } from 'react-icons/bi'

import moment from 'moment'

export default function Topo(props){

    const { ativoIpo, setor, valorInicialIpo, dataInicioIPO  } = props.oferta
    const status = ativoIpo ? 'ativa' : 'finalizada'

    return(
        <section className="container topo_empresas">
            <div className="bloco_empresa">
                <small>Data início</small>
                <p>
                    <RxCalendar />
                    {moment(dataInicioIPO).format('DD/MM/YYYY')}
                </p>
            </div>
            <div className="blocoAtiva_empresa">
                <small>Status</small>
                <p className={status}>{ status }</p>
            </div>

            <div className="segundo_topo">
                <small>Setor</small>
                <p>
                    <BiBuildings />
                    { setor.descricao }
                </p>
            </div>

            <div className="terceiro_topo">
                <small>Faixa de preço inicial</small>
                <p>R$ { valorInicialIpo.toFixed(2).replace('.', ',') }</p>
            </div>
        </section>
    )
}