import Image from '../../Assets/Images/banner_b3.png'
import './style.css'

export default function Banner(props){
    return(
        <section className="banner">
            <img
                src={Image}
                alt=""
            />
            <div className="wrap_title">
                <span>Todos os IPOs</span>
                <br />
                <span>em um só lugar</span>
            </div>
            <div className="mask_banner"></div>
        </section>
    )
}