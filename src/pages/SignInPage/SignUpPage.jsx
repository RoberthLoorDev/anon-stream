import { icons } from "../../assets/icons/icons";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import InputFormComponent from "../../components/InputFormComponent/InputFormComponent";
import styles from "./SignIn.module.css";
import SocialButtonsLogin from "../../components/SocialButtonsLogin";
import useFormSignUp from "../../hooks/useFormSignUp";

export default function SignUpPage() {
     const { formError, handleChange, onSubmitForm, formData } = useFormSignUp();

     return (
          <div className={styles.signincontainer}>
               <form onSubmit={onSubmitForm} className={styles.form}>
                    <h1 className={styles.h1login}>Registrarse </h1>
                    <p className={styles.plogin}>Regístrate para administrar los secretos de tu comunidad 🤫</p>

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

                    {/* sign in options aditionals */}
                    <div className={styles.containerTextSignInUsing}>
                         <div className={styles.textSignInUsing}>
                              <span style={{ backgroundColor: "#0C0F13", padding: "0 17px" }}>O registrate usando</span>
                         </div>
                    </div>
               </form>

               <SocialButtonsLogin />
          </div>
     );
}
