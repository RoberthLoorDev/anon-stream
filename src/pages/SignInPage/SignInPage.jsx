import { useState } from "react";
import InputFormComponent from "../../components/InputFormComponent/InputFormComponent";

import styles from "./SignIn.module.css";
import { icons } from "../../assets/icons/icons";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

import { handleSignIn } from "../../supabase/auth";

import { useNavigate } from "react-router-dom";

export default function SignInPage() {
     const navigate = useNavigate();

     const [formData, setFormData] = useState({
          email: "",
          password: "",
     });

     const onSubmitForm = async (event) => {
          event.preventDefault();

          try {
               await handleSignIn(formData.email, formData.password);
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
     };

     return (
          <div className={styles.signincontainer}>
               <form onSubmit={onSubmitForm} className={styles.form}>
                    <h1 className={styles.h1login}>Inicio de sesión </h1>
                    <p className={styles.plogin}>Inicia sesión para administrar los secretos de tu comunidad 🤫</p>

                    {/* inputs */}
                    <div className={styles.inputscontainer}>
                         <InputFormComponent
                              name="email"
                              onChange={handleChange}
                              value={formData.email}
                              placeholder="Correo"
                              icon={icons.emailIcon}
                         />

                         <InputFormComponent
                              name="password"
                              onChange={handleChange}
                              value={formData.password}
                              placeholder="Contraseña"
                              icon={icons.lockIIcon}
                              type="password"
                         />
                    </div>

                    <a href="/signup" className={styles.textRegisterHere}>
                         ¿No tienes una cuenta?{" "}
                         <b style={{ fontStyle: "italic", textDecoration: "underline" }}>Registrate aquí</b>
                    </a>

                    {/* sign in options aditionals */}
                    <div className={styles.containerTextSignInUsing}>
                         <div className={styles.textSignInUsing}>
                              <span style={{ backgroundColor: "#0C0F13", padding: "0 17px" }}>O inicia sesión usando</span>
                         </div>
                    </div>

                    {/* buttons  options login */}
                    <div className={styles.buttonsContainer}>
                         <ButtonComponent
                              icon={icons.google}
                              text="Google"
                              width="111px"
                              height="45px"
                              alt="Iniciar sesión con Google"
                         />

                         <ButtonComponent
                              icon={icons.twitch}
                              text="Twitch"
                              width="111px"
                              height="45px"
                              alt="Iniciar sesión con Twitch"
                         />

                         <ButtonComponent
                              icon={icons.discord}
                              text="Discord"
                              width="111px"
                              height="45px"
                              alt="Iniciar sesión con Discord"
                         />
                    </div>
               </form>
          </div>
     );
}
