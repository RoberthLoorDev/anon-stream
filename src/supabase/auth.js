import { supabase } from "../supabaseClient";

export const handleSignUp = async (email, password) => {
     try {
          const { data, error } = await supabase.auth.signUp({
               email,
               password,
          });

          if (error) {
               if (error.code === "user_already_exists") {
                    return {
                         success: false,
                         message: "Usuario ya registraado, inicie sesión",
                         code: error.code,
                    };
               }

               throw new Error(error.message);
          }

          return {
               success: true,
               data,
               message: "Registro de usuario exitoso",
          };
     } catch (error) {
          console.error(`Error al registrar el usuario: ${error}`);
          return {
               success: false,
               message: "Error en el registro, intentalo de nuevo",
          };
     }
};

//sign in using email and password
export const handleSignIn = async (email, password) => {
     try {
          const { data, error } = await supabase.auth.signInWithPassword({
               email,
               password,
          });

          if (error) {
               if (error.code === "invalid_credentials") {
                    return { success: false, message: "El correo o la contraseña son incorrectos" };
               }

               //other error
               throw new Error(error.message);
          }

          return { success: true, data: data, message: "Inicio se sesión exitoso" };
     } catch (error) {
          console.error(`Error de inicio de sesión: ${error}`);
          return {
               success: false,
               message: error,
          };
     }
};

//sign up using google account
export const signUpGoogle = async () => {
     try {
          const { data, error } = await supabase.auth.signInWithOAuth({
               provider: "google",
               options: {
                    redirectTo: "http://localhost:5173/home",
               },
          });

          if (error) throw new Error("Error al registrarse con Google", error);

          return {
               success: true,
               data,
               message: "Inicio de sesión con Google exitoso",
          };
     } catch (error) {
          console.error(`Error en el inicio de sesión con Google: ${error}`);
          return {
               success: false,
               message: "Error al iniciar sesión con Google. Por favor, intente nuevamente.",
          };
     }
};
