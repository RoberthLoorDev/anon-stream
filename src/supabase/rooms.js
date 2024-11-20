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

export const getRooms = async () => {
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

          const userId = session?.user.id;

          const { data, error } = await supabase
               .from("rooms")
               .select("*")
               .eq("user_id", userId)
               .order("created_at", { ascending: false });

          if (error) throw new Error(error.message);

          return {
               success: true,
               data,
               message: "Datos obtenidos de forma exitosa",
          };
     } catch (error) {
          console.error(`Error al obtener los datos: ${error}`);

          return {
               success: false,
               message: `Error al obtener los datos: ${error}`,
          };
     }
};

export const updateRoom = async (roomInfo) => {
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

          const { title, description, isSensored, roomid } = roomInfo;
          const { data, error } = await supabase
               .from("rooms")
               .update({ title, description, is_sensored: isSensored })
               .eq("id", roomid);

          if (error) throw new Error(error.code);

          return {
               success: true,
               data,
               message: "Actualizacion realizada exitosamente",
          };
     } catch (error) {
          console.error(`Error al actualizar la sala: ${error}`);
     }
};
