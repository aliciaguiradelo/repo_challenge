import ImgDash from '../../../Assets/Illustrations/banner_dashboard.svg'
import './style.css'

import { TbCategory2, TbSearch, TbShare3 } from 'react-icons/tb'
import { RiArticleLine } from 'react-icons/ri'
import { HiCursorClick } from 'react-icons/hi'

import { barOptions, categoryData, categoryPieData } from '../../../Assets/DadosExemplos/dashboard'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';

import { Bar, Pie } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard(props){
    return(
        <section className="conteudo_admin container">
            <section className="banner_dashboard">
                <div>
                    <h1 className='line_after'>Dashboard</h1>

                    <p style={{marginTop: 1 + 'em'}}>Bem vindo a sua dashboard.</p>
                    <p>Aqui você encontra informações importantes para te ajudar a dar os próximos passos e escrever novos artigos e cadastrar novas IPOs.</p>
                    <p className="negrito_p">Dica: clique nos itens para abir uma tela com mais informações.</p>
                    
                </div>
                <img src={ImgDash} alt="" />
            </section>

            <section className="">
                <h1 className="line_after">Artigos</h1>
                <article class="bloco_maisvistos">
                    <ItemMaisVisto nome="Educação Financeira" icone={<TbCategory2 />} label="Categoria mais vista" />
                    <ItemMaisVisto nome="Como funcionam IPO’s" icone={<RiArticleLine />} label="ARTIGO MAIS VISTO" />
                    <ItemMaisVisto nome="Bolsa de valores" icone={<TbSearch />} label="Termo mais buscado" />
                </article>
                <article class="blocos_grafico">
                    <div>
                        <h2>Categorias</h2>
                        <Pie data={categoryPieData} />
                    </div>
                    <div>
                        <h2>Categoria: IPO’s</h2>
                        <Bar options={barOptions} data={categoryData} />
                    </div>
                </article>
            </section>

            <section>
                <h1 className="line_after">IPO’s</h1>
                <article className="bloco_empresas">
                    <Empresa nome="OBA HORTIFRUTI" preco="R$ 100,00" icone={<HiCursorClick />} label="IPO mais VISITADA"/>
                    <Empresa nome="KALUNGA" preco="R$ 100,00" icone={<TbShare3 />} label="IPO MAIS COMPARTILHADA"/>
                    <Empresa nome="NUBANK" preco="R$ 100,00" icone={<TbSearch />} label="IPO mais buscada"/>
                </article>
            </section>

        </section>
    ) 
}

function Empresa(props){
    return(
        <div>
            <h2>{props.nome}</h2>
            <div className="bloco_preco">
                <h3>{props.preco}</h3>
                <small>por ação</small>
            </div>
            <div className="bloco_iconedash">
                {props.icone}
                <p>{props.label}</p>
            </div>
        </div>
    )
}

function ItemMaisVisto(props){
    return(
        <div>
            <h2>{props.nome}</h2>
            <div>
                {props.icone}
                <p>{props.label}</p>
            </div>
        </div>
    )
}