import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/details/Detail";
import Home from "../pages/home/Home";

export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/detail" element={<Detail/>}/>
            </Routes>
        </BrowserRouter>


    )
}