import PropTypes from "prop-types";
import { useState } from "react";
import { useRooms } from "../../context/RoomsContext.jsx";
import ButtonComponent from "../ButtonComponent/ButtonComponent.jsx";
import InputComponent from "../InputFormComponent/InputFormComponent.jsx";
import SwitchComponent from "../ToggleSwitch/SwitchComponent.jsx";
import styles from "./ModalForms.module.css";

export default function UpdateRoomForm({ handleModal, roomData }) {
     const { handleUpdateRoom, handleFetchRooms } = useRooms();
     const [formData, setformData] = useState(roomData);

     const onHandleSubmit = async (event) => {
          event.preventDefault();
          await handleUpdateRoom(formData);
          await handleFetchRooms();
          cleanValues();
          handleModal();
     };

     const onChange = (event) => {
          const { name, type, checked, value } = event.target;

          setformData({
               ...formData,
               [name]: type === "checkbox" ? checked : value,
          });
     };

     const cleanValues = () => {
          setformData({
               title: " ",
               description: " ",
               isSensored: false,
          });
     };

     return (
          <form onSubmit={onHandleSubmit}>
               <h3 className={styles.titleForm}>Actualizar sala de secretos</h3>
               <p className={styles.descriptionForm}>
                    Edita la sala ya creada para que los usuarios puedan escribrir sus secretos
               </p>

               <div className={styles.inputContainer}>
                    <InputComponent placeholder="Título" name="title" value={formData.title} onChange={onChange} />
                    <InputComponent
                         placeholder="Descripción (opcional)"
                         height="172px"
                         isTextArea={true}
                         name="description"
                         value={formData.description}
                         onChange={onChange}
                    />
               </div>

               <div className={styles.switchContainer}>
                    <span>Activar censura </span>
                    <SwitchComponent name="isSensored" onChange={onChange} value={Boolean(formData.isSensored)} />
               </div>
               <p className={styles.switchDescription}>Permite censurar palabras potencialmente baneables</p>

               <div className={styles.buttonContainer}>
                    <ButtonComponent variant="primary" text="Actualizar" />
                    <ButtonComponent variant="tertiary" text="Cancelar" onClick={handleModal} type="button" />
               </div>
          </form>
     );
}

UpdateRoomForm.propTypes = {
     handleModal: PropTypes.func,
     roomData: PropTypes.object,
};
