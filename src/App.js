import React from "react";
import Games from "./pages/Games";
import Game1 from "./pages/Game1";
import Game2 from "./pages/Game2";
import Game3 from "./pages/Game3";

import "../src/styles/game/style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const router = createBrowserRouter([
    { path: "/", element: <Games /> },
    { path: "/game1", element: <Game1 /> },
    { path: "/game2", element: <Game2 /> },
    { path: "/game3", element: <Game3 /> },
]);

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Games />} />
                <Route path="/Games" element={<Games />} />
                <Route path="/game1" element={<Game1 />} />
                <Route path="/game2" element={<Game2 />} />
                <Route path="/game3" element={<Game3 />} />
            </Routes>
        </BrowserRouter>
    );
    // return <Games />;
};

export default App;
