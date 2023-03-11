import './style.css'
import Card from './CardArtigo'

export default function ListaArtigos(props){
    const { artigos } = props

    return(
        <section class="container" id="lista_artigos">   
            <h1 class="line_after">Matérias</h1>

            <div class="lista_cards">
                { artigos.map((artigo) =>{
                    return(
                        <Card 
                            titulo={artigo.titulo}
                            subtitulo={artigo.subtitulo}
                            imagem={artigo.imagem}
                        />
                    )
                }) }
                
            </div>
        </section>
    )
}