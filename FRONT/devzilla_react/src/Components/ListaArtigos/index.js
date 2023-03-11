import './style.css'
import Card from './Card'

export default function ListaCards(props){
    const { dados, tipo } = props

    return(
        <section class="container bg_gray">   
            <h1 class="line_after">{ tipo == 'materia' ? 'Matérias' : 'Ofertas Públicas Iniciais' }</h1>

            <div class="lista_cards">
                { dados.map((artigo) =>{
                    return(
                        <Card 
                            tipo={tipo}
                            dados={artigo}
                        />
                    )
                }) }
                
            </div>
        </section>
    )
}