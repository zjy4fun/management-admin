import {Route, Routes} from "react-router-dom";
import React from "react";
import AuthProvider from "./context/UserContext";
import Layout from './pages/Layout';
import Login from "./pages/Login";

function App() {
    return (
        <AuthProvider>
            {/*此处应该有 Consumer，用来消费传进来的值或方法，根据传进来的值判断路由*/}
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route element={<Layout/>}>
                    <Route path="/" element={<div>PublicPage</div>}/>
                    {/*TODO*/}
                    {/*<RequireAuth> 里面对UserContext做判断 */}
                    {/*<RequireAuth>*/}
                        <Route path="/protected" element={<div>protected</div>}/>
                    {/*</RequireAuth>*/}
                </Route>
            </Routes>
        </AuthProvider>
    )
}

export default App
