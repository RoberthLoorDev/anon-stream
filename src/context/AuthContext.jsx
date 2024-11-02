import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

import PropTypes from "prop-types";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
     //estado del usuario
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);

     const navigate = useNavigate();

     useEffect(() => {
          const getSession = async () => {
               try {
                    const {
                         data: { session },
                    } = await supabase.auth.getSession();

                    setUser(session?.user ?? null);
                    setLoading(false);
               } catch (error) {
                    console.error(`Error al obtener la sesión del usuario: ${error}`);
                    setUser(null);
                    setLoading(false);
               }
          };

          getSession();

          const {
               data: { subscription },
          } = supabase.auth.onAuthStateChange(async (event, session) => {
               console.log(`Evento de autenticación: ${event}`);

               if (event === "SIGNED_IN") {
                    setUser(session.user);
                    navigate("/home");
               }

               if (event === "SIGNED_OUT") {
                    setUser(null);
                    navigate("/login");
               }

               if (event === "TOKEN_REFRESHED") {
                    console.log("Token actualizado automaticamente");
                    setUser(session.user);
               }
          });

          //limpiamos la suscripcion cuando el componente termina de montarse
          return () => {
               subscription.unsubscribe();
          };
     }, [navigate]);

     //funcion para cerrar sesión

     const signout = async () => {
          try {
               await supabase.auth.signOut();
               setUser(null);
               navigate("/login");
          } catch (error) {
               console.error(`Error al cerrar la sesión: ${error.message}`);
          }
     };

     //retornamos un objeto con las funcionalidades de autenticación
     const value = {
          user,
          loading,
          signout,
          isAuthenticate: user ? true : false,
     };

     return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
     children: PropTypes.node.isRequired,
};
