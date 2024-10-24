import { useState } from "react";
import InputFormComponent from "../../components/InputFormComponent/InputFormComponent";

import { icons } from "../../assets/icons/icons";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import styles from "./SignIn.module.css";

import { handleSignIn, signUpGoogle } from "../../supabase/auth";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
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

     return (
          <div className={styles.signincontainer}>
               <form onSubmit={onSubmitForm} className={styles.form}>
                    <h1 className={styles.h1login}>Inicio de sesión </h1>
                    <p className={styles.plogin}>Inicia sesión para administrar los secretos de tu comunidad 🤫</p>

                    {/* form error */}
                    {formError && <span className={styles.errorForm}>{formError}</span>}

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

                         <ButtonComponent text="Iniciar sesión" variant="primary" type="submit" />
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
               </form>

               {/* buttons  options login */}
               <div className={styles.buttonsContainer}>
                    <ButtonComponent
                         icon={icons.google}
                         text="Google"
                         width="111px"
                         height="45px"
                         alt="Iniciar sesión con Google"
                         onClick={signUpGoogle}
                         type="button"
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
          </div>
     );
}
