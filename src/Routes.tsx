import { Route, Routes as RoutesComponet, BrowserRouter } from "react-router-dom"
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import HooksAxios from "./pages/Hooks-e-Axios2";
import Usuario from "./pages/Usuario";

export default function Routes() {
    return (
        <BrowserRouter>
            <RoutesComponet>
                <Route path="/" element={<Home />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/hooks-axios" element={<HooksAxios />} />
                <Route path="/usuario" element={<Usuario />} />
            </RoutesComponet>
        </BrowserRouter>
    );
}