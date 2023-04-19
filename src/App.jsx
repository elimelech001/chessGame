import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./homePage";
import PlayBoard from "./pages/playBoard";
import LogIn from "./pages/player/login";
import PickGame from "./pages/player/pickGame";
import SignInWithGoogle from "./pages/player/SignInWithGoogle";

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
