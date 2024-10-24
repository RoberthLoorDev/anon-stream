import { icons } from "../../assets/icons/icons";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import InputFormComponent from "../../components/InputFormComponent/InputFormComponent";
import SocialButtonsLogin from "../../components/SocialButtonsLogin";
import useFormSignIn from "../../hooks/useFormSignIn";
import styles from "./SignIn.module.css";

export default function SignInPage() {
     const { formData, formError, handleChange, onSubmitForm } = useFormSignIn();

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

               <SocialButtonsLogin />
          </div>
     );
}
