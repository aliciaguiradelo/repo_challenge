import Modal from "../Modal";
import { createContext, useState } from "react";

import SelecaoOferta from "./SelecaoOferta";
import ComparacaoIPO from "./ComparacaoIPO";

import ipos from '../../Assets/DadosExemplos/ipos.json'

export const ComparacaoContext = createContext();

export default function CompararIPOs({ id, show, fecharModal }) {
  const [step, setStep] = useState(1);
  const [ofertas, setOfertas] = useState([{}, {}]);

  const ComparacaoContextValue = {
    ofertas,
    setOfertas,
    id,
  };

  const toggleModal = () => { fecharModal() };

  return (
    <ComparacaoContext.Provider value={ ComparacaoContextValue }>
      <Modal
        show={show}
        onClose={toggleModal}
        title={step === 1 ? "Escolha uma oferta" : "Comparar ofertas"}
      >
        { step === 1 ? <SelecaoOferta id={ id }/> : <ComparacaoIPO ipos={ipos} /> }

        <div className="modal_footer">
          {step === 1 ? (
            <button 
              className="btn btn_primary" 
              onClick={() => setStep(2)}
              disabled={ofertas === [{}, {}]}>
              Continuar
            </button>
          ) : (
            <>
              <button className="btn btn_primary" onClick={() => setStep(1)}>
                Voltar
              </button>
              <button className="btn btn_tertiary" onClick={toggleModal}>
                Fechar
              </button>
            </>
          )}
        </div>
      </Modal>
    </ComparacaoContext.Provider>
  );
}
