import PropTypes from "prop-types";
import { createContext, useCallback, useContext, useState } from "react";
import toast from "react-hot-toast";
import { getRooms, updateRoom, createRoom, handleDeleteRoom } from "../supabase/rooms";
import { useEffect } from "react";

const RoomsContext = createContext();

export const RoomProvider = ({ children }) => {
     const [rooms, setRooms] = useState([]);
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState(null);

     //fetch rooms
     const handleFetchRooms = useCallback(async () => {
          setLoading(true);
          setError(null);
          try {
               const response = await getRooms();
               if (!response.success) setError("Error al obtener las salas");

               setRooms(response.data);
          } catch (error) {
               console.error(error.message);
               setError(error.message || "Error inesperado");
          } finally {
               setLoading(false);
          }
     }, []);

     //create rooms
     const handleCreateRooms = useCallback(
          async (formData) => {
               setLoading(true);
               setError(null);
               try {
                    const responsePromise = createRoom(formData);

                    toast.promise(responsePromise, {
                         loading: "Creando sala",
                         success: "Sala creada correctamente",
                         error: "Error al crear la sala",
                    });

                    await handleFetchRooms();
               } catch (error) {
                    console.error(error.message);
                    setError(error.message || "Error inesperado");
               } finally {
                    setLoading(false);
               }
          },
          [handleFetchRooms]
     );

     //TIENES QUE SEGUIR

     //update rooms
     const handleUpdateRoom = useCallback(
          async (roomInfo) => {
               setLoading(true);

               try {
                    const responsePromisse = updateRoom(roomInfo);

                    toast.promise(responsePromisse, {
                         loading: "Actualizando sala",
                         success: "Sala actualizada correctamente",
                         error: "Error al actualizar la sala",
                    });

                    await handleFetchRooms();
               } catch (error) {
                    console.error(`Error al actualizar la sala: ${error.message}`);
                    setError(error.message || "Error inesperado");
               } finally {
                    setLoading(false);
               }
          },
          [handleFetchRooms]
     );

     //delete rooms
     const handleDeleteRooms = useCallback(
          async (roomId) => {
               setLoading(true);
               try {
                    const responsePromisse = handleDeleteRoom(roomId);

                    toast.promise(responsePromisse, {
                         loading: "Actualizando sala",
                         success: "Sala actualizada correctamente",
                         error: "Error al actualizar la sala",
                    });

                    await handleFetchRooms();
               } catch (error) {
                    console.error(`Error al eliminar la sala: ${error.message}`);
               } finally {
                    setLoading(false);
               }
          },
          [handleFetchRooms]
     );

     useEffect(() => {
          handleFetchRooms();
     }, []);

     return (
          <RoomsContext.Provider
               value={{ rooms, handleFetchRooms, handleUpdateRoom, handleCreateRooms, handleDeleteRooms, loading, error }}
          >
               {children}
          </RoomsContext.Provider>
     );
};

//hook to access to context
export const useRooms = () => useContext(RoomsContext);

//types
RoomProvider.propTypes = {
     children: PropTypes.node,
};
