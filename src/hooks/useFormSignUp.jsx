import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleSignUp } from "../supabase/auth";

export default function useFormSignUp() {
     const navigate = useNavigate();

     const [formData, setFormData] = useState({
          email: "",
          password: "",
          repeatPassword: "",
     });

     const [formError, setFormError] = useState(null);

     const onSubmitForm = async (event) => {
          event.preventDefault();
          const matchingPassworsd = formData.password == formData.repeatPassword;

          if (!matchingPassworsd) {
               setFormError("Las contarseñas deben ser iguales 🤨");
               return;
          }

          if (formData.password.length < 8) {
               setFormError("La contraseña debe tener al menos 8 dígitos");
               return;
          }

          try {
               await handleSignUp(formData.email, formData.password);
               navigate("/home");
          } catch (error) {
               console.error(error);
          }
     };

     const handleChange = (e) => {
          setFormData({
               ...formData,
               [e.target.name]: e.target.value,
          });

          setFormError(null);
     };

     return {
          formError,
          formData,
          onSubmitForm,
          handleChange,
          handleSignUp,
     };
}
