import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

import illustr_qs from '../../Assets/Illustrations/illustr_qs.svg'
import illustr_qs2 from '../../Assets/Illustrations/illustr_qs_2.svg'

import { BsFillMouseFill, BsGithub, BsLinkedin } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'
import { HiOutlineMail } from 'react-icons/hi'

import './style.css'

export default function Sobre(){
    return(
        <div>
            <Header />

            <main id="sobre">
                <Banner />
                <SectionSobre />
                <Pitch />
                <Time />
            </main>

            <Footer />

        </div>
    )
}

function Banner(){
    return(
        <section id="banner_qs">
            <div class="container row">
                <div class="column">
                    <h1>Todas as <span>IPOs disponíveis</span> em um só lugar!</h1>
                </div>
                <div class="column">
                    <img src={illustr_qs} />
                </div>
                <div class="deslize">
                    <div>
                        <BsFillMouseFill />
                        <span>deslize para saber mais</span>
                    </div>
                    <IoIosArrowDown />
                </div>
            </div>
        </section>
    )
}

function SectionSobre(){
    return(
        <>
            <section id="chamada_projeto">
                <div class="container">
                    <h2>O que te impede de  <div><span>investir?</span></div> Você sabe o que é <div><span>IPO?</span></div>
                        <br />Têm dificuldade em termos sobre a <div><span>bolsa de valores?</span></div>
                        <br />Não consegue encontrar <div><span>IPOs abertas?</span></div></h2>
                    <h1>Então você está no <div><span>lugar certo!</span></div></h1>
                </div>
            </section>

            <section class="row container" id="section1">
                <div class="column">
                    <img src={illustr_qs2} />
                </div>
                
                <div class="column">
                    <h1 class="line_after">Sobre nós</h1>
                    <p>Nosso principal objetivo é <strong>facilitar o acesso a informações relevantes sobre ofertas públicas iniciais. </strong></p>

                    <p>Além disso, na página inicial você encontra um <strong>blog</strong> com artigos que te <strong>explicam termos complexos relacionados à bolsa de valores.</strong></p>

                    <p>Tudo isso para ajudar você, <strong>pessoa comum</strong>, a entrar no mundo de investimentos sem medo!</p>

                </div>
            </section>
        </>
    )
}

function Pitch(){
    return(
        <section id="pitch">
            <div class="container">
                <h1 class="line_after">O projeto (vídeo pitch)</h1>
                <div class="wrap_iframe">
                    <iframe width="100%" height="500" src="https://www.youtube.com/embed/y-9ptfp1NRc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </section>
    )
}

function Time(){
    return(
        <section class="container" id="time">
            <h1 class="line_after">Conheça nosso time</h1>
            <div class="lista_cards">

                <Membro 
                    nome="Alícia Guiradelo"
                    rm="96960"
                    linkedin=""
                    email=""
                    github=""
                    imagem="Alicia.jpg"
                />

                <Membro 
                    nome="Ana Carolina Prado"
                    rm="96997"
                    linkedin="https://www.linkedin.com/in/anacdprado/"
                    email="anacarolinadantasp@gmail.com"
                    github="https://github.com/anadantasp"
                    imagem="Ana.jpg"
                />

                <Membro 
                    nome="Arthur Foschiani"
                    rm="96525"
                    linkedin="https://www.linkedin.com/in/arthurfoschiani"
                    email="arthur.foschiani@outlook.com"
                    github="https://github.com/arthurfoschiani"
                    imagem="Arthur.jpg"
                />

            </div>

            <div class="lista_cards">
                <Membro 
                    nome="Larah Correa"
                    rm="96384"
                    linkedin=""
                    email=""
                    github=""
                    imagem="Larah.jpeg"
                />

                <Membro 
                    nome="Mariana Santos"
                    rm="97503"
                    linkedin="https://www.linkedin.com/in/mariana-santos-fernandes-de-sousa/"
                    email="marianasfernandessousa@gmail.com"
                    github="marianasfernandessousa@gmail.com"
                    imagem="Mari.jpg"
                />
            </div>
        </section>
    )
}

function Membro(props){
    return(
        <div class="card card_time">
            <img src={require(`../../Assets/Time/${props.imagem}`)} class="perfil_time" />
            <div class="card_content">
                <a href={props.linkedin} target="_blank"><h3 class="c_title">{props.nome}</h3></a>

                <small>RM: {props.rm}</small>
                <div class="wrap_icons">
                    <a href={props.linkedin} target="_blank">
                        <BsLinkedin />
                    </a>
                    <a href={props.github} target="_blank">
                        <BsGithub />
                    </a>
                    <a href={`mailto:${props.email}`} target="_blank">
                        <HiOutlineMail className="email_icon" />
                    </a>
                </div>
            </div>
        </div>
    )
}