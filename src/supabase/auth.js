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
                         sucess: false,
                         message: "Usuario ya registraado, inicie sesión",
                         code: error.code,
                    };
               }

               throw new Error(error.message);
          }
          return data;
     } catch (error) {
          console.error(error);
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
                    return { sucess: false, message: "El correo o la contraseña son incorrcetos" };
               }

               //other error
               throw new Error(error.message);
          }

          return { sucess: true, data: data };
     } catch (error) {
          console.error(`Error de autenticación: ${error.message}`);
          return {
               sucess: false,
               message: error.message,
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

          return data;
     } catch (error) {
          console.error(error);
     }
};
