import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Campo from "../../Components/Campo";

import img_login from '../../Assets/Images/b3_login.png'

import ilustracao from '../../Assets/Illustrations/illustr_login.svg'

import { RxPerson } from 'react-icons/rx'
import { HiOutlineEnvelope } from 'react-icons/hi2'
import { RiLockPasswordLine } from 'react-icons/ri'

import { Link } from "react-router-dom";

import '../Cadastro/style.css'
import { useState } from "react";

export default function Cadastro(){

    const [email, setEmail] = useState('')
    const [errorEmail, setErrorEmail] = useState('')

    return(
        <div>
            <Header />

            <main id="login">
                <section class="container container_form">
                    <div class="wrap_form">
                        <img src={img_login} />
                        <form>
                            <h2>Bem vindo de volta!</h2>
                            <small>Para continuar, por favor insira seus dados.</small>

                            <img src={ilustracao} />

                            <Campo
                                label="Email"
                                id="email"
                                placeholder="Digite seu email"
                                type="email"
                                icon={<HiOutlineEnvelope />}
                                // {{errorMsg != '' && hasError}
                                hasError
                                errorMsg={errorEmail}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <Campo
                                label="Senha"
                                id="senha"
                                placeholder="Digite sua senha"
                                type="password"
                                icon={<RiLockPasswordLine />}
                            />

                            <a href="#" class="btn btn_primary arrow">Entrar</a>

                            <a class="outros_links" href="#">Esqueceu a senha? <strong>clique aqui</strong></a>
                            <Link class="outros_links" to="/cadastro">Ainda não possui conta? <strong>clique aqui</strong></Link>
                            
                        </form>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}