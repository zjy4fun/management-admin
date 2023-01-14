import {Route, Routes} from "react-router-dom";
import React from "react";
import AuthProvider from "./context/UserContext";
import Layout from './pages/Layout';
import Login from "./pages/Login";

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route element={<Layout/>}>
                    <Route path="/" element={<div>PublicPage</div>}/>
                    <Route path="/protected" element={<div>protected</div>}/>
                </Route>
            </Routes>
        </AuthProvider>
    )
}

export default App
