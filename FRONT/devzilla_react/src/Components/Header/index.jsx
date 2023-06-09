import { ReactComponent as IconPerson } from '../../Assets/Icons/icon_person.svg'
import { ReactComponent as IconSave } from '../../Assets/Icons/icon_save.svg'
import { ReactComponent as IconSearch } from '../../Assets/Icons/icon_search.svg'

import './style.css'

import Menu from '../RotasMenu'

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Header() {

    // DIMINUIR O MENU QUANDO O USUÁRIO SCROLLA
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;

        if (window.scrollY > 50) {
            if (prevScrollpos > currentScrollPos) {
                document.querySelector("header").style.top = "0";
                document.querySelector("header").style.paddingBottom = "1.5em";
            } else {
                document.querySelector("header").style.top = "-15vh";
                document.querySelector("header").style.paddingBottom = "1em";
            }
            prevScrollpos = currentScrollPos;
        }
    }

    const [user, setUser] = useState(null)

    useEffect(() => {
        setUser(JSON.parse(sessionStorage.getItem("dadosUsuario")))
    }, [])

    return (
        <header>
            <div className="row">
                <Link to="/">
                    <h1 className="logo">investium</h1>
                </Link>

                <section>
                    <a href={user ? '/perfil' : '/login' } className="my_account">
                        <IconPerson />
                        {user ? user.nome.split(' ')[0] : 'minha conta' }
                    </a>

                    {/* <a href="perfil_usuario.html#artigos_salvos" className="saved"> */}
                    {/* <IconSave /> */}
                    {/* itens salvos */}
                    {/* </a> */}
                    {sessionStorage.getItem("dadosUsuario") ? (
                        <small style={{ textAlign: "end", marginTop: ".5em" }}>
                            <strong>
                                <a className="text_blue"
                                    onClick={() => { sessionStorage.removeItem("dadosUsuario"); window.location.href = '/' }}
                                >
                                    sair da minha conta
                                </a>
                            </strong>
                        </small>
                    ) : (
                        <small>Ainda não tem conta? <strong><Link to="/cadastro" className="text_blue">cadastre-se</Link></strong> ou <strong><Link to="/login" className="text_blue">faça login</Link></strong></small>
                    )}
                </section>
            </div>

            <div className="row btns_menu">

                {/* HasButton indica que na versão mobile do site vai aparecer o btn hamburguer que abre o menu */}
                <Menu hasButton />

                <div className="search">
                    <input type="text" placeholder="O que você está procurando?" />
                    <button className="btn btn-primary">
                        <IconSearch />
                    </button>
                </div>
            </div>
        </header>
    )
}