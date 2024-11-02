import { Route, Routes } from "react-router-dom";
import SignInPage from "./pages/SignInPage/SignInPage";
import HomePage from "./pages/HomePage";
import "./App.css";
import SignUpPage from "./pages/SignInPage/SignUpPage";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./context/ProtectedRoute";

function App() {
     return (
          <AuthProvider>
               <Routes>
                    <Route path="/login" element={<SignInPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route
                         path="/home"
                         element={
                              <ProtectedRoute>
                                   <HomePage />
                              </ProtectedRoute>
                         }
                    />
               </Routes>
          </AuthProvider>
     );
}

export default App;
