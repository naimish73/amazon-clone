import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
    const [{ basket }, dispatch] = useStateValue();
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // user is logged in
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                // user is logged out
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
        return () => {
            // clean up operations here
            unsubscribe();
        };
    }, []);

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
                    <Route path="/login" element={<Login />} />
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
