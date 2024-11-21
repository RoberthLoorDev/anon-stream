import ButtonComponent from "../ButtonComponent/ButtonComponent";
import styles from "./ModalForms.module.css";
import PropTypes from "prop-types";
import { useRooms } from "../../context/RoomsContext";

export default function DeleteRoomForm({ handleModal, roomData }) {
     const { handleDeleteRooms, handleFetchRooms } = useRooms();
     const { title, roomid } = roomData;

     const handleDelete = async () => {
          await handleDeleteRooms(roomid);
          handleFetchRooms();
          handleModal();
     };

     return (
          <div>
               <h3 className={styles.titleForm}>Eliminar sala de secretos</h3>
               <p className={styles.descriptionForm}>
                    Se eliminará la sala: <b className={styles.titleRoom}>{title}</b>
               </p>

               <div className={styles.buttonContainer}>
                    <ButtonComponent variant="delete" text="Eliminar" onClick={handleDelete} />
                    <ButtonComponent variant="tertiary" text="Cancelar" type="button" onClick={() => handleModal()} />
               </div>
          </div>
     );
}

DeleteRoomForm.propTypes = {
     handleModal: PropTypes.func,
     roomData: PropTypes.object,
};
