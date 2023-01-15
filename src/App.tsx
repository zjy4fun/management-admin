import {useRoutes} from "react-router-dom";
import React from "react";
import {AuthProvider} from "./context/UserContext";
import routes from "./routes";

function App() {
    return (
        <AuthProvider>
            {useRoutes(routes)}
        </AuthProvider>
    )
}

export default App
