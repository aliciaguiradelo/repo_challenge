import { useState } from 'react'

import comparison from '../../../../Assets/Illustrations/illustr_comparison.svg'

import { IoIosArrowDropdownCircle } from 'react-icons/io';

import './style.css'

import CompararIPOs from '../../../../Components/CompararIPOs';

export default function ApresentacaoEmpresa(props) {

    const { id, nome, linkEmpresa, cor, imagem, setor, ativoIpo, valorInicialIpo, linkProspecto, cnpj } = props.oferta

    const status = ativoIpo ? 'ativa' : 'finalizada'

    const [showModal, setShow] = useState(false)

    const abrirModal = (e) => {
        e.preventDefault();
        setShow(true)
    }

    const fecharModal = () => {
        setShow(false);
    };

    return (
        <>

            <CompararIPOs id={id} show={showModal} abrirModal={abrirModal} fecharModal={fecharModal} />
            <section className="container apresentacao_empresa">
                <a href={linkEmpresa} target="_blank" className='wrap_img' style={{ background: cor }}>
                    <img src={imagem} className="logo" alt={`Logo da empresa ${nome}`} />
                </a>
                <div className="informacoes_empresa">
                    <div>
                        <h2>{nome}</h2>
                        <small><strong>CNPJ:</strong> {cnpj}</small>
                    </div>
                    <small><strong>Setor:</strong> {setor.descricao}</small>
                    <small><strong>Status:</strong> {status}</small>
                    <small><strong>Valor inicial:</strong> R$ {valorInicialIpo.toFixed(2).replace('.', ',')}</small>
                    <a href={linkProspecto} target='_blank' className="btn btn_primary arrow">Prospecto</a>
                    <strong><a href="/blog/artigo/5" style={{margin: '0'}} className="link">Saiba mais</a></strong>
                </div>

                <div className="direcionamentos">
                    <div>
                        <h2>Informações importantes</h2>
                        <a href="#governanca" className="btn btn_primary arrow text_blue">Diretoria da empresa <IoIosArrowDropdownCircle /> </a>
                        <a href="#sobre" className="btn btn_primary arrow text_blue">Sobre a Nubank <IoIosArrowDropdownCircle /></a>
                        <a href="#oferta" className="btn btn_primary arrow text_blue">Destino dos recursos <IoIosArrowDropdownCircle /></a>
                        <a href="#indicadores" className="btn btn_primary arrow text_blue">Indicadores financeiros <IoIosArrowDropdownCircle /></a>
                        <a href="#balanco" className="btn btn_primary arrow text_blue">Balanços Patrimoniais <IoIosArrowDropdownCircle /></a>
                    </div>
                </div>

                <div className="comparar">
                    <h2>Comparar com outra oferta</h2>
                    <img src={comparison} />

                    <button className="btn btn_primary arrow" onClick={abrirModal}>Comparar oferta</button>
                </div>
            </section>
        </>
    )
}
