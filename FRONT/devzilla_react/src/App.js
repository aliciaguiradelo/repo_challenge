import { Route, Routes, BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Artigo from "./Pages/Blog/Artigo";
import Ofertas from "./Pages/Ofertas";

import Admin from "./Pages/Admin";
import Artigos from "./Pages/Admin/Artigos";
import Comentarios from "./Pages/Admin/Comentarios";
import Dashboard from "./Pages/Admin/Dashboard";
import AdminOfertas from "./Pages/Admin/Ofertas";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element = { <Home /> }  path="/" />
          <Route element = { <Blog /> }  path="/blog" />
          <Route element = { <Artigo /> }  path="/blog/artigo" />
          <Route element = { <Ofertas /> }  path="/ofertas" />
          <Route element = { <Admin /> }  path="/admin/*" />
          {/* <Route component = { Sobre }  path="/sobre" /> */}
      </Routes>

      {/* <Switch>
        <Route path="/admin/dashboard" exact element={ <Dashboard /> }/>
        <Route path="/admin/comentarios" element={ <Comentarios /> }/>
        <Route path="/admin/artigos" element={ <Artigos /> }/>
        <Route path="/admin/ofertas" element={ <AdminOfertas /> }/>
      </Switch> */}
    </BrowserRouter>
  );
}