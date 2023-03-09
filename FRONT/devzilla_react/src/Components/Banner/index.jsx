import { useEffect } from 'react';
import Image from '../../Assets/Images/banner_b3.png'
import './style.css'

export default function Banner(props){

    const { titulo } = props;

    function quebra_string(str){
    
        let str_arr = str.split(" ");
        let nova_str = '<span>'
    
        for(let i = 0; i < str_arr.length; i++){
            nova_str += str_arr[i]
    
            if ((i + 1) % 4 === 0) nova_str += "</span> <br /> <span>"
            else nova_str += ' '
        }
        return(nova_str)
    }

    const title = quebra_string(titulo)

    return(
        <section className="banner">
            <img
                src={Image}
                alt=""
            />
            <div dangerouslySetInnerHTML={{ __html: title }} className="wrap_title"></div>
            <div className="mask_banner"></div>
        </section>
    )
}