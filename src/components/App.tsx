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
                    <Route path="/" element={<h1>PublicPage</h1>}/>
                    <Route path="/login" element={<h1>LoginPage</h1>}/>
                    <Route path="/protected" element={<h1>protected</h1>}/>
                </Route>
            </Routes>
        </AuthProvider>
    )
}

export default App
