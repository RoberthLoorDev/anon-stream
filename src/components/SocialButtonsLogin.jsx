import styles from "../pages/SignInPage/SignIn.module.css";
import { icons } from "../assets/icons/icons";
import { signUpGoogle } from "../supabase/auth";
import ButtonComponent from "./ButtonComponent/ButtonComponent";

export default function SocialButtonsLogin() {
     return (
          <>
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
          </>
     );
}
