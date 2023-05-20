import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

import './style.css'

import ipos from '../../../Assets/DadosExemplos/ipos.json'

import IndicadoresFinanceiros from "./IndicadoresFinanceiros";
import ApresentacaoEmpresa from "./ApresentacaoEmpresa"
import Governanca from "./Governanca";
import Topo from "./Topo";
import SecaoTexto from "./SecaoTexto";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ReactLoading from 'react-loading'

import BalancoPatrimonial from "./BalancoPatrimonial";

export default function Oferta() {

    const ipo = ipos[1];

    const { id } = useParams()

    const [oferta, setOferta] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:8080/InvestiumAPI/rest/empresa/${id}`)
            .then(resp => resp.json())
            .then((oferta) => {
                setOferta(oferta)
                setLoading(false)
            })
            .catch(error => {
                console.error(error)
                setLoading(false)
            })
    }, [id])

    return (
        <div>
            <Header />
            <main id="empresa">
                {loading ?
                    (
                        <div className='wrap_loading'>
                            <ReactLoading type="spinningBubbles" color='#444' />
                            <p>Carregando empresa...</p>
                        </div>
                    )
                    :
                    (
                        <>
                            <Topo oferta={oferta} />

                            <ApresentacaoEmpresa ipo={ipo} oferta={oferta} />

                            <SecaoTexto
                                titulo={`Sobre a empresa ${oferta.nome}`}
                                descricao={oferta.descricao}
                                id="sobre"
                            />

                            <Governanca id={id} />

                            <SecaoTexto
                                titulo="Sobre a oferta (IPO)"
                                descricao={oferta.descricaoIpo}
                                id="oferta"
                            />

                            <IndicadoresFinanceiros oferta={oferta} id={id} />

                            <BalancoPatrimonial id={id} />
                        </>
                    )}

            </main>
            <Footer />
        </div>
    )
}