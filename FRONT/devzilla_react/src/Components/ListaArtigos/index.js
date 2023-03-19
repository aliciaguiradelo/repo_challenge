import './style.css'
import Card from './Card'
import Button from '../Button'

export default function ListaCards(props){
    const { dados, tipo, botao, admOptions } = props

    return(
        <section className="container bg_gray">   
            <h1 className="line_after">{ tipo == 'materia' ? 'Matérias' : 'Ofertas Públicas Iniciais' }</h1>

            <div className="lista_cards">
                { dados.map((artigo) =>{
                    return(
                        <Card 
                            tipo={tipo}
                            dados={artigo}
                            admOptions={admOptions}
                        />
                    )
                }) }
                
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