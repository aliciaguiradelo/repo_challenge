import './style.css'

export default function Button (props){
    const { link, style, texto, icon_name } = props
    return(
        <a href={link} className={`btn btn_${style || 'primary'} ${icon_name}`}>{texto}</a>
    )
}