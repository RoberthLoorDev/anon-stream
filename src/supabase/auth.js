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
