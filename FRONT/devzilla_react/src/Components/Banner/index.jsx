import Image from '../../Assets/Images/banner_b3.png'
import './style.css'

function quebra_string(string){
    var qtd = 10
    var qtdX = 0

    str_br = ''

    if(string.length == qtd + qtdX){
        qtd = qtd + 10
        qtdX = qtdX + 1
        div.value = valor + 'X'
    }

    return(arr_str.toString())
}

export default function Banner(props){
    return(
        <section className="banner">
            <img
                src={Image}
                alt=""
            />
            <div className="wrap_title">
                <span>{quebra_string(props.titulo)}</span>
                <br />
                <span>em um só lugar</span>
            </div>
            <div className="mask_banner"></div>
        </section>
    )
}