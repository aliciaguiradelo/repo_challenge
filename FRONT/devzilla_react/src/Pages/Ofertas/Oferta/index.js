import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

import './style.css'

import IndicadoresFinanceiros from "./IndicadoresFinanceiros";
import ApresentacaoEmpresa from "./ApresentacaoEmpresa"
import Governanca from "./Governanca";
import Topo from "./Topo";
import SecaoTexto from "./SecaoTexto";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ReactLoading from 'react-loading'

import BalancoPatrimonial from "./BalancoPatrimonial";

import { useQuery } from "react-query";

export default function Oferta() {

    const { id } = useParams()

    // const [oferta, setOferta] = useState({})
    // const [loading, setLoading] = useState(true)

    const { isLoading, error, data: oferta } = useQuery('ofertaUnica', () =>
        fetch(`https://investium-api.herokuapp.com/empresa/${id}`).then(res =>
        res.json()
        )
    )

    return (
        <div>
            <Header />
            <main id="empresa">
                {isLoading ?
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

                            <ApresentacaoEmpresa oferta={oferta} />

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