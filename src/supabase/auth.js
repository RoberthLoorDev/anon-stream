import { supabase } from "../supabaseClient";

export const handleSignUp = async (email, password) => {
     try {
          const { data, error } = await supabase.auth.signUp({
               email,
               password,
          });

          if (error) {
               console.log("Error al registrar el usuario", error);
               return error.message;
          }

          console.log("Usuario registrador", data);
     } catch (error) {
          console.error(error);
     }
};

export const handleSignIn = async (email, password) => {
     try {
          const { data, error } = await supabase.auth.signInWithPassword({
               email,
               password,
          });

          if (error) {
               console.error(error.message);
               throw new Error("Error al iniciar sesion", error.message);
          }

          console.log("Inicio se sesion exitoso", data);
     } catch (error) {
          console.error(error);
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

          if (error) {
               console.log("Error al registrarse con Google", error);
               return error.message;
          }

          console.log("Usuario registrado", data);
     } catch (error) {
          console.error(error);
     }
};
