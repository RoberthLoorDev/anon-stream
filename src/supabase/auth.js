import { supabase } from "../supabaseClient";

export const handleSignUp = async (email, password) => {
     try {
          const { data, error } = await supabase.auth.signUp({
               email,
               password,
          });

          if (error) throw new Error(error.message);
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

          if (error) throw new Error(error.message);

          return data;
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

          if (error) throw new Error("Error al registrarse con Google", error);

          return data;
     } catch (error) {
          console.error(error);
     }
};
