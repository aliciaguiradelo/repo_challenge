import './style.css'
import Card from './Card'
import CardEmpresa from './CardEmpresa'
import Button from '../Button'
import { useEffect, useState } from 'react'

import ReactLoading from 'react-loading';

import { useQuery } from 'react-query'

export default function ListaCards(props) {
  const { tipo, botao, admOptions, max } = props

  const [dados, setDados] = useState(props.dados)

  const path = tipo === 'materia' ? 'postagem' : 'empresa'

  const { isLoading, error, data } = useQuery(`repo-${path}`, () =>
    fetch(`https://investium-api.herokuapp.com/${path}`).then(res =>
      res.json())
  )

  useEffect(() => {
    if (!dados && !isLoading && !error) {
      max ? setDados(data.slice(0, max)) : setDados(data)
    }
  }, [isLoading, error, data])

  return (
    <section className="container bg_gray">
      <h1 className="line_after">{tipo === 'materia' ? 'Matérias' : 'Empresas (IPOs)'}</h1>

      {isLoading ? (
        <div className='wrap_loading'>
          <ReactLoading type="spinningBubbles" color='#444' />
          <p>Carregando dados...</p>
        </div>
      ) : (
        <div className="lista_cards">
          {tipo === 'materia' ? (
            dados?.map((artigo) => (
              <Card
                key={artigo.id}
                tipo={tipo}
                dados={artigo}
                admOptions={admOptions}
              />
            ))
          ) : (
            dados?.map((empresa) => (
              <CardEmpresa
                key={empresa.id}
                tipo={tipo}
                dados={empresa}
                admOptions={admOptions}
              />
            ))
          )}
        </div>
      )}

      {botao && (
        <Button
          link={tipo === 'materia' ? '/blog' : '/empresas'}
          icon_name="arrow_long"
          texto="Ver todas"
          style="secondary"
        />
      )}
    </section>
  )
}
