import './style.css'
import Card from './Card'
import CardEmpresa from './CardEmpresa'
import Button from '../Button'

export default function ListaCards(props){
    const { dados, tipo, botao, admOptions } = props

    return(
        <section className="container bg_gray">   
            <h1 className="line_after">{ tipo == 'materia' ? 'Matérias' : 'Empresas (IPOs)' }</h1>

            <div className="lista_cards">
                { tipo === 'materia' ? (
                    dados.map((artigo) => {
                        return(
                            <Card 
                                tipo={tipo}
                                dados={artigo}
                                admOptions={admOptions}
                            />
                        )
                    }) ) :
                 (
                    dados.map((empresa) => {
                        return(
                            <CardEmpresa 
                                tipo={tipo}
                                dados={empresa}
                                admOptions={admOptions}
                            />
                        )
                    }) )
                }
                
                
            </div>

            { botao && 
                <Button
                    link=""
                    icon_name="arrow_long"
                    texto="Ver todas"
                    style="secondary"
                />  
            }
        </section>
    )
}