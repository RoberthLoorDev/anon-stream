import { useState } from "react";
import { getRooms } from "../supabase/rooms";
import { useEffect } from "react";

export default function useGetRooms() {
     const [rooms, setRooms] = useState(null);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);

     const fetchRooms = async () => {
          const response = await getRooms();
          if (!response.success) setError("Error al obtener las salas");
          setRooms(response.data);
          setLoading(false);
     };

     useEffect(() => {
          fetchRooms();
     }, []);

     return {
          rooms,
          loading,
          error,
          fetchRooms,
     };
}
