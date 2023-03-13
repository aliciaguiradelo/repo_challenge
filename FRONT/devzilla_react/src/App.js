import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Artigo from "./Pages/Blog/Artigo";
import Ofertas from "./Pages/Ofertas";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element = { <Home /> }  path="/" />
          <Route element = { <Blog /> }  path="/blog" />
          <Route element = { <Artigo /> }  path="/blog/artigo" />
          <Route element = { <Ofertas /> }  path="/ofertas" />
          {/* <Route component = { Sobre }  path="/sobre" /> */}
          {/* <Route component = { Ofertas }  path="/ofertas" /> */}
      </Routes>
    </BrowserRouter>
  );
}