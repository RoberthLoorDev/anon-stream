import PropTypes from "prop-types";
import ButtonComponent from "../ButtonComponent/ButtonComponent.jsx";
import InputComponent from "../InputFormComponent/InputFormComponent.jsx";
import SwitchComponent from "../ToggleSwitch/SwitchComponent.jsx";
import styles from "./ModalForms.module.css";
import { useState } from "react";
import { useRooms } from "../../context/RoomsContext.jsx";

export default function CreateRoomForm({ handleModal }) {
     const { handleCreateRooms, handleFetchRooms } = useRooms();
     const [formData, setFormData] = useState({
          title: "",
          description: "",
          isSensored: false,
     });

     const cleanValues = () => {
          setFormData({
               title: " ",
               description: " ",
               isSensored: false,
          });
     };

     const onHandleSubmit = async (event) => {
          event.preventDefault();
          await handleCreateRooms(formData);
          await handleFetchRooms();
          cleanValues();
          handleModal();
     };

     const onChange = (event) => {
          const { name, type, checked, value } = event.target;
          setFormData({
               ...formData,
               [name]: type === "checkbox" ? checked : value,
          });
     };

     return (
          <form onSubmit={onHandleSubmit}>
               <h3 className={styles.titleForm}>Crear sala</h3>
               <p className={styles.descriptionForm}>Crea una sala para que otros usuarios escriban sus secretos o anecdotas</p>

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
                    <ButtonComponent variant="primary" text="Crear" />
                    <ButtonComponent variant="tertiary" text="Cancelar" onClick={handleModal} type="button" />
               </div>
          </form>
     );
}

CreateRoomForm.propTypes = {
     handleModal: PropTypes.func,
};
