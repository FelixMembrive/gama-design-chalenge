import { Route, Routes as RoutesComponet, BrowserRouter } from "react-router-dom"
import Contato from "./pages/Contato";
import Home from "./pages/Home";

export default function Routes() {
    return (
        <BrowserRouter>
            <RoutesComponet>
                <Route path="/" element={<Home />} />
                <Route path="/contato" element={<Contato />} />
            </RoutesComponet>
        </BrowserRouter>
    );
}