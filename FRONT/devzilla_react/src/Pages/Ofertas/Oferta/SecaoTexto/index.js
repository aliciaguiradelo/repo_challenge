export default function SecaoTexto(props){
    const { titulo, descricao, id } = props
    return(
        <div className="gray_wallpaper">
            <section className="container" id={id}>
                <h1 className="line_after">{titulo}</h1>
                <p>{ descricao }</p>
            </section>
        </div>
    )
}