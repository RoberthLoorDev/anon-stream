import { useState } from "react";
import InputFormComponent from "../../components/InputFormComponent/InputFormComponent";

import styles from "./SignIn.module.css";
import { icons } from "../../assets/icons/icons";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export default function SignInPage() {
     const [formData, setFormData] = useState({
          email: "",
          password: "",
     });

     const onSubmitForm = (event) => {
          event.preventDefault();
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

                    <span className={styles.textRegisterHere}>
                         ¿No tienes una cuenta?{" "}
                         <b style={{ fontStyle: "italic", textDecoration: "underline" }}>Registrate aquí</b>
                    </span>

                    {/* sign in options aditionals */}
                    <div className={styles.containerTextSignInUsing}>
                         <div className={styles.textSignInUsing}>
                              <span style={{ backgroundColor: "#0C0F13", padding: "0 17px" }}>O inicia sesión usando</span>
                         </div>
                    </div>

                    {/* buttons  options login */}
                    <div className={styles.buttonsContainer}>
                         <ButtonComponent icon={icons.google} text="Google" width="111px" height="45px" />
                         <ButtonComponent icon={icons.twitch} text="Twitch" width="111px" height="45px" />
                         <ButtonComponent icon={icons.discord} text="Discord" width="111px" height="45px" />
                    </div>
               </form>
          </div>
     );
}
