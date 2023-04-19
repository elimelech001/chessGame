import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/components/homePage";
import PlayBoard from "./pages/components/playBoard";
import LogIn from "./pages/handlePlayer/login";
import PickGame from "./pages/components/handlePlayer/pickGame";
import SignInWithGoogle from "./pages/handlePlayer/SignInWithGoogle";

function App() {
    const [link, getLink] = useState(null);
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<HomePage/>} />

                        <Route
                            path="SignInWithGoogle"
                            element={<SignInWithGoogle />}
                        />
                        <Route
                            path="pickGame"
                            element={<PickGame getLink={getLink} />}
                        />
                       
                        <Route
                            path="Playboard/:link"
                            element={<> {<PlayBoard link= {link} />} </>}
                        />
                        <Route path="*" element={<> error </>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
