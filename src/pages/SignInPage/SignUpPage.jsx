import { useState } from "react";
import { icons } from "../../assets/icons/icons";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import InputFormComponent from "../../components/InputFormComponent/InputFormComponent";
import styles from "./SignIn.module.css";

import { handleSignUp } from "../../supabase/auth";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
     const navigate = useNavigate();

     const [formData, setFormData] = useState({
          email: "",
          password: "",
          repeatPassword: "",
     });

     const onSubmitForm = async (event) => {
          try {
               event.preventDefault();
               await handleSignUp(formData.email, formData.password);
               navigate("/dashboard");
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

                         <InputFormComponent
                              name="repeatPassword"
                              onChange={handleChange}
                              value={formData.repeatPassword}
                              placeholder="Repetir contraseña"
                              icon={icons.lockIIcon}
                              type="password"
                         />

                         <ButtonComponent text="Registrarse" variant="primary" type="submit" />
                    </div>
                    <a href="/login" className={styles.textRegisterHere}>
                         ¿Ya tienes una cuenta?{" "}
                         <b style={{ fontStyle: "italic", textDecoration: "underline" }}>Inicia sesión aquí</b>
                    </a>
                    1{/* sign in options aditionals */}
                    <div className={styles.containerTextSignInUsing}>
                         <div className={styles.textSignInUsing}>
                              <span style={{ backgroundColor: "#0C0F13", padding: "0 17px" }}>O registrate usando</span>
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
