import './style.css'
import Button from "../../Button"

export default function Card(props){
    const { id, imagem, titulo, subtitulo } = props
    return(
        <article class="card">
            <a href="artigo_individual.html">
                <img src={require(`../../../Assets/Images/${imagem}`)} />
            </a>
            <div class="card_content">
                <h3 class="c_title">{titulo}</h3>
                <small>{subtitulo}</small>

                <Button
                    link="artigo_individual"
                    icon_name="arrow"
                    texto="ler mais"
                    style="secondary"
                />
                
            </div>
        </article>
    )
}