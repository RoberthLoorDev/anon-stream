import PropTypes from "prop-types";
import { createContext, useCallback, useContext, useState } from "react";
import toast from "react-hot-toast";
import { getRooms, updateRoom, createRoom } from "../supabase/rooms";
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
     const handleCreateRooms = useCallback(async (formData) => {
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
     }, []);

     //TIENES QUE SEGUIR

     //update rooms
     const handleUpdateRoom = async (roomInfo) => {
          setLoading(true);

          try {
               const responsePromisse = updateRoom(roomInfo);

               toast.promise(responsePromisse, {
                    loading: "Actualizando sala",
                    success: "Sala actualizada correctamente",
                    error: "Error al actualizar la sala",
               });

               handleFetchRooms();
          } catch (error) {
               console.error(`Error al actualizar la sala: ${error.message}`);
               setError(error.message || "Error inesperado");
          } finally {
               setLoading(false);
          }
     };

     useEffect(() => {
          handleFetchRooms();
     }, []);

     return (
          <RoomsContext.Provider value={{ rooms, handleFetchRooms, handleUpdateRoom, handleCreateRooms, loading, error }}>
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
