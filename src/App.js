import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";

function App() {
    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route
                        path="/checkout"
                        element={
                            <>
                                {" "}
                                <Header /> <Checkout />{" "}
                            </>
                        }
                    />
                    <Route path="/login" element={<h1>Login</h1>} />
                    <Route
                        path="/"
                        element={
                            <>
                                {" "}
                                <Header /> <Home />{" "}
                            </>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
