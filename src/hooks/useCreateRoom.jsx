import { useState } from "react";
import { useRooms } from "../context/RoomsContext";

export default function useCreateRoom() {
     const { handleCreateRooms } = useRooms();
     const [formData, setFormData] = useState({
          title: "",
          description: "",
          isSensored: false,
     });

     const cleanValues = () => {
          setFormData({
               title: " ",
               description: " ",
               isSensored: false,
          });
     };

     const onHandleSubmit = async (event) => {
          event.preventDefault();
          await handleCreateRooms(formData);
          cleanValues();
     };

     const onChange = (event) => {
          const { name, type, checked, value } = event.target;

          setFormData({
               ...formData,
               [name]: type === "checkbox" ? checked : value,
          });
     };

     return { onHandleSubmit, formData, onChange, cleanValues };
}
