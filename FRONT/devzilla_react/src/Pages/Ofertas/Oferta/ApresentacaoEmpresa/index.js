import { useState } from 'react'

import comparison from '../../../../Assets/Illustrations/illustr_comparison.svg'

import { IoIosArrowDropdownCircle } from 'react-icons/io';

import Modal from "../../../../Components/Modal";

import ipos from '../../../../Assets/DadosExemplos/ipos.json'

import './style.css'

export default function ApresentacaoEmpresa(props){
    const ipo = props.ipo

    const [showModal, setShow] = useState(false)

    const toggleModal = (e) => {
        e.preventDefault();
        showModal ? setShow(false) : setShow(true);
    }

    const [step, setStep] = useState(1);

    return(
        <section className="container apresentacao_empresa">

            <Modal
                show={showModal}
                onClose={toggleModal}
                title={'Escolha uma oferta'}
            >
                { step == 1 ? <SelecaoOferta /> : <ComparacaoIPO ipos={ipos} /> }

                <div className='modal_footer'>
                    <button className="btn btn_primary" onClick={() => setStep(2)}>Continuar</button>
                </div>
            </Modal>

            <a href="https://nubank.com.br/relatorios-financeiros/" target="_blank" className='wrap_img' style={{background: ipo.cor}}>
                <img src={require(`../../../../Assets/Images/ipo/${ipo.imagem}`)} className="logo" alt={`Logo da empresa ${ipo.nome}`}/>
            </a>
            <div className="informacoes_empresa">
                <div>
                    <h2>{ipo.nome}</h2>
                    <small>04.972.092/0001-22</small>
                </div>
                <small><strong>Setor:</strong> {ipo.setor}</small>
                <small><strong>Status:</strong> { ipo.status }</small>
                <small><strong>Valor inicial:</strong> R$ {ipo.valor}</small>
                <a href="#" className="btn btn_primary arrow">Prospecto</a>
            </div>

            <div className="direcionamentos">
                <div>
                    <h2>Informações importantes</h2>
                    <a href="#governanca" className="btn btn_primary arrow text_blue">Diretoria da empresa <IoIosArrowDropdownCircle /> </a>
                    <a href="#sobre" className="btn btn_primary arrow text_blue">Sobre a Nubank <IoIosArrowDropdownCircle /></a>
                    <a href="#destino" className="btn btn_primary arrow text_blue">Destino dos recursos <IoIosArrowDropdownCircle /></a>
                    <a href="#indicadores" className="btn btn_primary arrow text_blue">Indicadores financeiros <IoIosArrowDropdownCircle /></a>
                    <a href="#balanco" className="btn btn_primary arrow text_blue">Balanços Patrimoniais <IoIosArrowDropdownCircle /></a>
                </div>
            </div>

            <div className="comparar">
                <h2>Comparar com outra oferta</h2>
                <img src={comparison} />

                <a href="" className="btn btn_primary arrow" onClick={toggleModal}>Comparar oferta </a>
            </div>
        </section>
    )
}

function SelecaoOferta(){

    const [oferta, setOferta] = useState();

    return(
        <div className='wrap_options' onChange={(e) => setOferta(e.target.value)} value={oferta}>
            {ipos.map((ipo, index) => {
                const logo = require(`../../../../Assets/Images/ipo/${ipo.imagem_dark}`)
                return(
                    <label key={ipo.id}>
                        <input 
                            type="radio" 
                            name="forma_pgt" 
                            value={ipo.nome} 
                            defaultChecked={index == 0}
                            onChange={(e) => setOferta(e.target.value)} />
                        <div className="option wrap_img">
                            <span className='logo' style={{backgroundImage: `url(${logo})`}} />
                            <h3>{ipo.nome}</h3>
                        </div>
                    </label>
                )
            })}
            
        </div>
    )
}

function ComparacaoIPO(props){
    const ipos = props.ipos
    const logo1 = require(`../../../../Assets/Images/ipo/${ipos[0].imagem_dark}`)
    const logo2 = require(`../../../../Assets/Images/ipo/${ipos[1].imagem_dark}`)
    return(
        <section id='comparacao'>
            <div className='empresa_info'>
                <div className="option wrap_img">
                    <span className='logo' style={{backgroundImage: `url(${logo1})`}} />
                </div>
                <h3>{ipos[0].nome}</h3>
                <small>{ipos[0].cnpj}</small>

                <small><strong>Setor:</strong> {ipos[0].setor}</small>
                <small><strong>Status:</strong> { ipos[0].status }</small>
                <small><strong>Valor inicial:</strong> R$ {ipos[0].valor}</small>
                <a href="#" className="btn btn_secondary arrow_long">Prospecto</a>
            </div>

            <div className='empresa_info'>
                <div className="option wrap_img">
                    <span className='logo' style={{backgroundImage: `url(${logo2})`}} />
                </div>
                <h3>{ipos[1].nome}</h3>

                <small>{ipos[1].cnpj}</small>
                <small><strong>Setor:</strong> {ipos[1].setor}</small>
                <small><strong>Status:</strong> { ipos[1].status }</small>
                <small><strong>Valor inicial:</strong> R$ {ipos[1].valor}</small>
                <a href="#" className="btn btn_secondary arrow_long">Prospecto</a>
            </div>
        </section>
    )
}