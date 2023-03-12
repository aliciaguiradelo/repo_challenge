import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element = { <Home /> }  path="/" />
          <Route element = { <Blog /> }  path="/blog" />
          {/* <Route component = { Sobre }  path="/sobre" /> */}
          {/* <Route component = { Ofertas }  path="/ofertas" /> */}
      </Routes>
    </BrowserRouter>
  );
}