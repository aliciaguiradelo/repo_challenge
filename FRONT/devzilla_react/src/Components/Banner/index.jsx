import Image from '../../Assets/Images/banner_b3.png'
import './style.css'

function quebra_string(string){
    let arr_str = string.split('')

    for (let i = 0; i < string.lenght; i++){
        if(i % 10 === 0) arr_str.splice(i, 0, "<br/>")
        arr_str.join()
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