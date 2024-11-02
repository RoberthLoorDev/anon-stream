import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleSignIn } from "../supabase/auth";

export default function useFormSignIn() {
     const navigate = useNavigate();

     const [formData, setFormData] = useState({
          email: "",
          password: "",
     });
     const [formError, setFormError] = useState(null);

     const onSubmitForm = async (event) => {
          event.preventDefault();

          const response = await handleSignIn(formData.email, formData.password);
          const errorMessage = response.message;
          const responseSucess = response.sucess;

          if (errorMessage) {
               setFormError(errorMessage);
               return;
          }

          if (responseSucess) navigate("/home");
     };

     const handleChange = (e) => {
          setFormData({
               ...formData,
               [e.target.name]: e.target.value,
          });

          setFormError(null);
     };

     return {
          formData,
          setFormData,
          setFormError,
          formError,
          onSubmitForm,
          handleChange,
     };
}
