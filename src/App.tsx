import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import { SharedLayout } from "./layouts/SharedLayout";
import { Bid, Bids } from "./pages";

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<SharedLayout/>}>
                <Route index element={<Navigate to={"bids"}/>} />
                <Route path={"/bids"} element={<Bids/>}/>
                <Route path={"/bids/:bidId"} element={<Bid/>}/>
            </Route>
        </Routes>
    );
}

export default App;
