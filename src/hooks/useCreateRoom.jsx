import { useState } from "react";
import { createRoom } from "../supabase/rooms";
import toast from "react-hot-toast";

export default function useCreateRoom(fetchRooms) {
     const [formData, setformData] = useState({
          title: "",
          description: "",
          isSensored: false,
     });

     const cleanValues = () => {
          setformData({
               title: " ",
               description: " ",
               isSensored: false,
          });
     };

     const onHandleSubmit = async (event) => {
          event.preventDefault();

          const responsePromise = createRoom(formData);

          toast.promise(responsePromise, {
               loading: "Creando sala",
               success: "Sala creada correctamente",
               error: "Error al crear la sala",
          });

          const statusResponse = (await responsePromise).success;
          if (statusResponse) cleanValues();
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
