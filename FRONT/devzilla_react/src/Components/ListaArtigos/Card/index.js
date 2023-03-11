import './style.css'
import Button from "../../Button"
import atualizacao_icon from '../../../Assets/Icons/icon_arrow_down.svg'

export default function Card(props){
    const { tipo, dados } = props

    return(
        tipo == 'materia' ? <Materia item={dados} /> : <IPO item={dados} />     
    )
}

function Materia(props){
    const { id, imagem, titulo, subtitulo } = props.item
    return(
        <article className="card artigo">
            <a href="artigo_individual.html">
                <img src={require(`../../../Assets/Images/blog/${imagem}`)}/>
            </a>
            <div className="card_content">
                <h3 className="c_title">{titulo}</h3>
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

function IPO(props){
    const { id, imagem, nome, status, cor, valor, atualizacao } = props.item
    return(
        <article className="card ipo">
            <div className="card_content">
                <a href="empresa.html" className='wrap_img' style={{background: cor}}>
                    <img src={require(`../../../Assets/Images/ipo/${imagem}`)} className="logo"/>
                </a>

                <h3 className="c_title">{nome}</h3>
                <small className={status}>{status}</small>
                <p className='valor'><span>R$</span>{valor}</p>

                <span className={atualizacao[0]+ ' atualizacao'}>
                    <img src={atualizacao_icon} />
                    {atualizacao[1]}
                </span>

                <Button
                    link="artigo_individual"
                    icon_name="arrow"
                    texto="mais detalhes"
                    style="secondary"
                />
                
            </div>
        </article>
    )
}