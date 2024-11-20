import { useState } from "react";
import { updateRoom } from "../supabase/rooms";
import toast from "react-hot-toast";

export default function useUpdateRoom(fetchRooms, roomData) {
     const [formData, setformData] = useState(roomData);

     const cleanValues = () => {
          setformData({
               title: " ",
               description: " ",
               isSensored: false,
          });
     };

     const onHandleSubmit = async (event) => {
          event.preventDefault();

          const responsePromise = updateRoom(formData);

          toast.promise(responsePromise, {
               loading: "Actualizando sala",
               success: "Sala actualizada correctamente",
               error: "Error al actualizar la sala",
          });

          const isOkStatus = (await responsePromise).success;
          if (isOkStatus) cleanValues();
          fetchRooms();
     };

     const onChange = (event) => {
          const { name, type, checked, value } = event.target;

          setformData({
               ...formData,
               [name]: type === "checkbox" ? checked : value,
          });
     };

     return { onHandleSubmit, formData, onChange, cleanValues };
}
