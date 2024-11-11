import { Route, Routes } from "react-router-dom";
import SignInPage from "./pages/SignInPage/SignInPage";
import HomePage from "./pages/HomePage/HomePage";
import "./App.css";
import SignUpPage from "./pages/SignInPage/SignUpPage";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./context/ProtectedRoute";
import { Toaster } from "react-hot-toast";

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

               <Toaster
                    toastOptions={{
                         style: {
                              fontSize: "18px",
                         },
                         duration: 5000,
                    }}
               />
          </AuthProvider>
     );
}

export default App;
