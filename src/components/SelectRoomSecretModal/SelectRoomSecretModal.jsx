import stylesModal from "./SelectRoomSecretModal.module.css";
import { icons } from "../../assets/icons/icons";
import ModalLayout from "../../layout/ModalLayout";
import { useState } from "react";
import UpdateRoomForm from "../FormsFormModalLayout/UpdateRoomForm";
import PropTypes from "prop-types";
import DeleteRoomForm from "../FormsFormModalLayout/DeleteRoomForm";

export default function SelectSecretModal({ roomData }) {
     const [modalInfo, setModalInfo] = useState({ open: false, type: "" });

     const handleModal = (type) => setModalInfo({ open: !modalInfo.open, type });

     return (
          <div>
               <ModalLayout handleModal={() => handleModal} openModal={modalInfo.open}>
                    {modalInfo.type === "edit" && <UpdateRoomForm handleModal={handleModal} roomData={roomData} />}
                    {modalInfo.type === "delete" && <DeleteRoomForm handleModal={handleModal} roomData={roomData} />}
               </ModalLayout>

               <div className={stylesModal.modalContainer}>
                    <button className={stylesModal.option} onClick={() => handleModal("edit")}>
                         <img src={icons.editWhite} alt="Editar sala" className={stylesModal.iconOption} />
                         <span>Editar</span>
                    </button>

                    <button className={stylesModal.option} onClick={() => handleModal("delete")}>
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
