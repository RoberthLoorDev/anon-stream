import { icons } from "../../assets/icons/icons";
import CardSecretComponent from "../../components/CardSecretComponent/CardSecretComponent";
import Layout from "../../layout/Layout";
import stylesHome from "./HomePage.module.css";
import { useAuth } from "../../context/useAuth";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { getRandomTitleUser } from "../../utils/titleUserRandom";
import SwitchComponent from "../../components/ToggleSwitch/SwitchComponent";

export default function HomePage() {
     const { signout, user } = useAuth();
     const userTitle = getRandomTitleUser();

     const profileImage = user.user_metadata.avatar_url;

     const username = user.user_metadata.name || user.user_metadata.full_name;

     return (
          <Layout>
               <div className={stylesHome.containerHome}>
                    <div className={stylesHome.logoUserContainer}>
                         <h2 className={stylesHome.iconHome}>LOGO</h2>

                         {/* User account */}
                         <div className={stylesHome.userContainer}>
                              <img
                                   src={profileImage ? profileImage : icons.defaulUser}
                                   className={stylesHome.iconStreamer}
                                   alt="Usuario"
                              />
                              <div className={stylesHome.nameDescriptionContainer}>
                                   <span className={stylesHome.nameStreamer}>{username}</span>
                                   <span className={stylesHome.descriptionStreamer}>{userTitle}</span>
                              </div>
                              <img className={stylesHome.iconLogout} src={icons.logout} onClick={signout} alt="Cerrar sesión" />
                         </div>
                    </div>

                    {/* body */}
                    <div className={stylesHome.bodyHome}>
                         <div className={stylesHome.roomLineText}>
                              <h2 className={stylesHome.titleroom}>Salas</h2>
                              <ButtonComponent
                                   text="Crear sala"
                                   width="160px"
                                   icon={icons.plus}
                                   variant="primary"
                                   height="45px"
                              />
                         </div>

                         <div className={stylesHome.secretsContainer}>
                              <CardSecretComponent />
                              <CardSecretComponent />
                              <CardSecretComponent />
                         </div>
                    </div>
               </div>
          </Layout>
     );
}
