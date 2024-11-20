import stylesModal from "./SelectRoomSecretModal.module.css";
import { icons } from "../../assets/icons/icons";
import ModalLayout from "../../layout/ModalLayout";
import { useState } from "react";
import UpdateRoomForm from "../FormsFormModalLayout/UpdateRoomForm";
import PropTypes from "prop-types";

export default function SelectSecretModal({ roomData }) {
     const [openModalEdit, setOpenModalEdit] = useState(false);

     const handleModal = () => setOpenModalEdit(!openModalEdit);

     return (
          <div>
               <ModalLayout handleModal={handleModal} openModal={openModalEdit}>
                    <UpdateRoomForm handleModal={handleModal} roomData={roomData}></UpdateRoomForm>
               </ModalLayout>

               <div className={stylesModal.modalContainer}>
                    <button className={stylesModal.option}>
                         <img src={icons.editWhite} alt="Editar sala" className={stylesModal.iconOption} />
                         <span onClick={handleModal}>Editar</span>
                    </button>

                    <button className={stylesModal.option}>
                         <img src={icons.deleteRed} alt="Editar sala" className={stylesModal.iconOption} />
                         <span className={stylesModal.textDelete}>Eliminar</span>
                    </button>
               </div>
          </div>
     );
}

SelectSecretModal.propTypes = {
     roomData: PropTypes.object,
};
