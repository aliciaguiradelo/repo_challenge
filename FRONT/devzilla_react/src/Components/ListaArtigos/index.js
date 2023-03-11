import './style.css'
import Card from './Card'

export default function ListaCards(props){
    const { dados, tipo } = props

    return(
        <section class="container" id="lista_artigos">   
            <h1 class="line_after">Matérias</h1>

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