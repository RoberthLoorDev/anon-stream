import { supabase } from "../supabaseClient";

export const createRoom = async (roomData) => {
     const { title, description, isSensored } = roomData;

     try {
          const {
               data: { session },
          } = await supabase.auth.getSession();

          if (!session) {
               return {
                    success: false,
                    message: "Usuario no autenticado",
               };
          }

          const idUser = session?.user.id;

          const { data, error } = await supabase
               .from("rooms")
               .insert({
                    user_id: idUser,
                    title,
                    description,
                    is_sensored: isSensored,
               })
               .select("*");

          if (error) throw new Error(error.message);

          return {
               success: true,
               data,
               message: "Sala registrada exitosamente",
          };
     } catch (error) {
          console.error(`Error al crear la sala: ${error}`);
          return {
               success: false,
               message: `Error al registrar la nueva sala`,
          };
     }
};
