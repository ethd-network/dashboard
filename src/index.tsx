import React from 'react';
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";


import "./css/style.sass"

import Header from "./header";
import Blocks from "./blocks";

function Index() {
    return (
        <>
            <Header/>
        </>
    )
}

export default function Start() {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    )
    root.render(
        <BrowserRouter>
            <Routes>
                <Route index element={<Index/>}/>
                <Route path="/" element={<Index/>}/>
                <Route path="/blocks" element={<Blocks/>}/>
                <Route path="/block/:h" element={<Blocks/>}/>
            </Routes>
        </BrowserRouter>
    )
}

Start()
