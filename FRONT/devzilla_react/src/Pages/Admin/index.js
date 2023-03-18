import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header";

import { Routes, Route, Outlet } from "react-router";

import Dashboard from "./Dashboard";
import Comentarios from "./Comentarios";
import Artigos from "./Artigos";
import AdminOfertas from './Ofertas'

import './style.css'

export default function Admin(){
    return(
        <div>
            <Header />

            <main id='admin'>

                <Sidebar />

                <Routes>
                    <Route path="/dashboard" element={ <Dashboard /> }/>
                    <Route path="/comentarios" element={ <Comentarios /> }/>
                    <Route path="/artigos" element={ <Artigos /> }/>
                    <Route path="/ofertas" element={ <AdminOfertas /> }/>
                </Routes>

                <Outlet />
            </main>
        </div>
    )
}