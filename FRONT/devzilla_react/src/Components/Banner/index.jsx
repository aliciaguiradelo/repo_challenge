import { useEffect } from 'react';
import wave from '../../Assets/Images/wave.svg'
import './style.css'

import { useState } from 'react';

import CompararIPOs from '../CompararIPOs';

export default function Banner(props){

    const { titulo, imagem, button } = props;

    function quebra_string(str){
    
        let str_arr = str.split(" ");
        let nova_str = '<span>'
    
        for(let i = 0; i < str_arr.length; i++){
            nova_str += str_arr[i]
    
            if ((i + 1) % 3 === 0) nova_str += "</span> <br /> <span>"
            else nova_str += ' '
        }
        return(nova_str)
    }

    const title = quebra_string(titulo)

    //caso o prop "imagem" venha vazio, a imagem padrão vai ser aquela da B3
    let img = require('../../Assets/Images/banner_b3.png')

    if(imagem !== undefined) img = require(`../../Assets/Images${imagem}`)

    const [showModal, setShow] = useState(false)

    const abrirModal = (e) => {
        e.preventDefault();
        setShow(true)
    }

    const fecharModal = () => {
        setShow(false);
    };

    return(
        <>
            <section className="banner">
                <img src={ img } alt="" id='img_banner'/>
                <div className='wrap-items-banner'>
                    <div dangerouslySetInnerHTML={{ __html: title }} className="wrap_title"></div>
                    {button && <button className='btn btn_tertiary' onClick={abrirModal}>{button.texto}</button>}
                </div>
                <div className="mask_banner"></div>
                <img src={ wave } alt="" className='wave'/>
            </section>

            <CompararIPOs id={null} show={showModal} abrirModal={abrirModal} fecharModal={fecharModal} />
        </>
    )
}