import { icons } from "../../assets/icons/icons";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import RoomsContainer from "../../components/RoomsContainer/RoomsSecretContainer";
import { useAuth } from "../../context/useAuth";
import { useOpenModal } from "../../hooks/useOpenModal";
import Layout from "../../layout/Layout";
import ModalLayout from "../../layout/ModalLayout";
import { getRandomTitleUser } from "../../utils/titleUserRandom";
import stylesHome from "./HomePage.module.css";
import CreateRoomForm from "../../components/FormsFormModalLayout/CreateRoomForm";

export default function HomePage() {
     const { signout, user } = useAuth();
     const userTitle = getRandomTitleUser();
     const profileImage = user.user_metadata.avatar_url;
     const username = user.user_metadata.name || user.user_metadata.full_name;

     const { handleModal, openModal } = useOpenModal();
     // const { rooms, fetchRooms, error, loading } = useGetRooms();

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
                                   width="220px"
                                   icon={icons.plus}
                                   variant="primary"
                                   height="45px"
                                   onClick={handleModal}
                              />
                         </div>

                         {/* rooms */}
                         <RoomsContainer />
                    </div>
               </div>

               {/* Modal create room */}
               {openModal ? (
                    <ModalLayout openModal={openModal} handleModal={handleModal}>
                         <CreateRoomForm handleModal={handleModal} />
                    </ModalLayout>
               ) : (
                    " "
               )}
          </Layout>
     );
}
