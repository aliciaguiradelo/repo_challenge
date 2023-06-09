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
    <ComparacaoContext.Provider value={ComparacaoContextValue}>
      <Modal
        show={show}
        onClose={toggleModal}
        title={step === 1 || step === 2 ? "Escolha uma oferta" : "Comparar ofertas"}
      >
        {step == 1 ?
          <SelecaoOferta id={id} />
          : step == 2 ? <SelecaoOferta id={id} />
          : <ComparacaoIPO ipos={ipos} />}

        <div className="modal_footer">
          {step === 1 ? (
            <button
              className="btn btn_primary"
              onClick={() => (id ? setStep(3) : setStep(2))}
              disabled={ofertas === [{}, {}]}>
              Continuar
            </button>
          ) : step === 2 ? 
          (<>
            <button className="btn btn_tertiary" onClick={() => setStep(1)}>
                Voltar
            </button>
            <button
              className="btn btn_primary"
              onClick={() => setStep(3)}
              disabled={ofertas === [{}, {}]}>
              Continuar
            </button>
          </>)
          : (
            <>
              <button className="btn btn_primary" onClick={() => (id ? setStep(1) : setStep(2))}>
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
