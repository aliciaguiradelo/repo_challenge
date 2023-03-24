import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

import img_login from '../../Assets/Images/b3_login.png'

import ilustracao from '../../Assets/Illustrations/illustr_cadastro.svg'

import { RxPerson } from 'react-icons/rx'
import { HiOutlineEnvelope } from 'react-icons/hi2'
import { RiLockPasswordLine } from 'react-icons/ri'

import { Link } from "react-router-dom";

import './style.css'

export default function Cadastro(){
    return(
        <div>
            <Header />

            <main id="cadastro">
                <section class="container container_form">
                    <div class="wrap_form">
                        <img src={img_login} />
                        <form>
                            <h2>Seja bem vindo!</h2>
                            <small>Para continuar, por favor insira seus dados.</small>

                            <img src={ilustracao} />

                            <label for="nome">Nome</label>
                            <div class="wrap_input">
                                <RxPerson />
                                <input type="text" placeholder="Digite seu nome" id="nome" />
                            </div>

                            <label for="email">Email</label>
                            <div class="wrap_input">
                                <HiOutlineEnvelope />
                                <input type="email" placeholder="Digite seu email" id="email" />
                            </div>

                            <label for="email">Senha</label>
                            <div class="wrap_input">
                                <RiLockPasswordLine />
                                <input type="password" placeholder="Digite sua senha" id="senha" />
                            </div>

                            <label for="email">Confirmar senha</label>
                            <div class="wrap_input">
                                <RiLockPasswordLine />
                                <input type="password" placeholder="Digite sua senha" id="senha_confirm" />
                            </div>

                            <a href="#" class="btn btn_primary arrow">Criar Conta</a>

                            <Link class="outros_links" to="/login">Já possui conta? <strong>clique aqui</strong></Link>
                            
                        </form>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}