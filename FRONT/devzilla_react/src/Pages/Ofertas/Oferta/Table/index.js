
export default function Table({ dados }) {
    const anos = [...new Set(dados.map(item => item.ano))];
    const dadosUnicos = [...new Set(dados.map(item => `${item.descricao}-${item.tipo}`))];
  
    return (
      <div className="wrap_table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              {anos.map(ano => <th key={ano}>{ano} </th>)}
            </tr>
          </thead>
  
          <tbody>
            {dadosUnicos.map(dadoUnico => {
              const [descricao, tipo] = dadoUnico.split('-');
              return (
                <tr key={`${descricao}-${tipo}`}>
                  <td>{descricao} {tipo}</td>
                  {anos.map(ano => {
                    const dadoAno = dados.find(dado => dado.descricao === descricao && dado.tipo === tipo && dado.ano === ano);
                    return (
                      <td key={`${descricao}-${tipo}-${ano}`}>
                        {dadoAno && dadoAno.valor}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }  