import { useState, useEffect, useContext } from "react";
import ReactLoading from 'react-loading';
import { ComparacaoContext } from "../../CompararIPOs";

export default function SelecaoOferta({ id }) {
  const [empresas, setEmpresas] = useState([]);
  const [oferta1, setOferta1] = useState({});
  const [oferta2, setOferta2] = useState({});
  const [selecao, setSelecao] = useState('');
  const [loading, setLoading] = useState(true);

  const { setOfertas } = useContext(ComparacaoContext);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:8080/InvestiumAPI/rest/empresa')
      .then(resp => resp.json())
      .then(empresas => {
        const ofertaAtual = empresas.find((empresa) => empresa.id === id);
        const outrasEmpresas = empresas.filter((empresa) => empresa.id !== id);
        setOferta1(ofertaAtual);
        setEmpresas(outrasEmpresas);
        setOferta2(outrasEmpresas[0]);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {

    if (oferta2 === undefined) setOferta2(empresas[0]);
    setOfertas([oferta1, oferta2]);
    
  }, [oferta1, oferta2, empresas, setOfertas]);

  const handleSelecaoChange = (e) => {
    setSelecao(e.target.value);
  };

  useEffect(() => {
    if (selecao !== '') {
      const ofertaSelecionada = empresas.find((empresa) => empresa.nome === selecao);
      setOferta2(ofertaSelecionada);
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
