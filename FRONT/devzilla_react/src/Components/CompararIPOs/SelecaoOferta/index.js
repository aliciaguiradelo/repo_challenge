import { useState, useEffect, useContext } from "react";
import ReactLoading from 'react-loading';
import { ComparacaoContext } from "../../CompararIPOs";

export default function SelecaoOferta({ id, step }) {
  const [empresas, setEmpresas] = useState([]);
  const [oferta1, setOferta1] = useState({});
  const [oferta2, setOferta2] = useState({});
  const [selecao, setSelecao] = useState('');
  const [loading, setLoading] = useState(true);

  const { setOfertas, ofertas } = useContext(ComparacaoContext);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:8080/InvestiumAPI/rest/empresa')
      .then(resp => resp.json())
      .then(empresas => {

        if(step == 2 && id){
          const ofertaAtual = empresas.find((empresa) => empresa.id === id)
          const outrasEmpresas = empresas.filter((empresa) => empresa.id !== id)
          setOferta1(ofertaAtual);
          setEmpresas(outrasEmpresas);
          setOferta2(outrasEmpresas[0]);
        }

        else if(step == 1){
          setOferta1(empresas[0])
          setEmpresas(empresas);
        }

        else{
          const outrasEmpresas = empresas.filter((empresa) => empresa.id !== ofertas[0].id)
          setEmpresas(outrasEmpresas);
          setOferta2(outrasEmpresas[0]);
        }

        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });

      console.log(ofertas)
  }, [id, step]);

  useEffect(() => {

    if (oferta2 === undefined || oferta2 === {}) setOferta2(empresas[0]);
    if (oferta1 === undefined || oferta1 === {}) setOferta1(empresas[0]);
    setOfertas([oferta1, oferta2]);
    
  }, [oferta1, oferta2, empresas, setOfertas]);

  const handleSelecaoChange = (e) => {
    setSelecao(e.target.value);
  };

  useEffect(() => {
    if (selecao !== '') {
      const ofertaSelecionada = empresas.find((empresa) => empresa.nome === selecao);
      step == 1 ? setOferta1(ofertaSelecionada) : setOferta2(ofertaSelecionada);
    }
  }, [empresas, selecao]);

  return (
    <div className='wrap_options'>
      {loading ? (
        <div>
          <ReactLoading type="spinningBubbles" color='#444' />
          <p>Carregando empresas...</p>
        </div>
      ) : (
        <>
          {empresas.map((ipo, index) => (
            <label key={ipo.id}>
              <input
                type="radio"
                name="empresa"
                value={ipo.nome}
                defaultChecked={index == 0}
                onChange={handleSelecaoChange}
              />
              <div className="option wrap_img" style={{ background: ipo.cor }}>
                <span className='logo' style={{ backgroundImage: `url(${ipo.imagem})` }} />
                <h3>{ipo.nome}</h3>
              </div>
            </label>
          ))}
        </>
      )}
    </div>
  );
}
