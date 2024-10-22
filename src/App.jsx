import { Route, Routes } from "react-router-dom";
import SignInPage from "./pages/SignInPage/SignInPage";
import HomePage from "./pages/HomePage";
import "./App.css";
import SignUpPage from "./pages/SignInPage/SignUpPage";

function App() {
     return (
          <Routes>
               <Route path="/login" element={<SignInPage />} />
               <Route path="/signup" element={<SignUpPage />} />
               <Route path="/home" element={<HomePage />} />
          </Routes>
     );
}

export default App;
