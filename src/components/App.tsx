import {Route, Routes} from "react-router-dom";
import React from "react";
import AuthProvider from "../context/UserContext";
import Layout from '../components/Layout';

function App() {
    return (
        <AuthProvider>
            <h1>登录鉴权页面</h1>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<div>PublicPage</div>}/>
                    <Route path="/login" element={<div>LoginPage</div>}/>
                    <Route path="/protected" element={<div>protected</div>}/>
                </Route>
            </Routes>
        </AuthProvider>
    )
}

export default App
