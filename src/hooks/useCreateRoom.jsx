import { useState } from "react";
import { createRoom } from "../supabase/rooms";

export default function useCreateRoom() {
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

          const response = await createRoom(formData);
          console.log(formData);
          const statusResponse = response.success;

          if (statusResponse) cleanValues();
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
