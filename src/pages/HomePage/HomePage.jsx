import { icons } from "../../assets/icons/icons";
import CardSecretComponent from "../../components/CardSecretComponent/CardSecretComponent";
import Layout from "../../layout/Layout";
import stylesHome from "./HomePage.module.css";

export default function HomePage() {
     return (
          <Layout>
               <div className={stylesHome.containerHome}>
                    <h2 className={stylesHome.iconHome}>LOGO</h2>

                    {/* User account */}
                    <div className={stylesHome.userContainer}>
                         <img src={icons.username} className={stylesHome.iconStreamer} alt="Usuario" />
                         <div className={stylesHome.nameDescriptionContainer}>
                              <span className={stylesHome.nameStreamer}>D0oppa</span>
                              <span className={stylesHome.descriptionStreamer}>Streamer de éxito</span>
                         </div>
                         <img className={stylesHome.iconLogout} src={icons.logout} alt="Cerrar sesión" />
                    </div>

                    {/* body */}
                    <div className={stylesHome.bodyHome}>
                         <h2 className={stylesHome.titleroom}>Salas</h2>

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
