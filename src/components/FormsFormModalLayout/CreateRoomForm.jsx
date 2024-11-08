import InputComponent from "../InputFormComponent/InputFormComponent.jsx";
import SwitchComponent from "../ToggleSwitch/SwitchComponent.jsx";
import ButtonComponent from "../ButtonComponent/ButtonComponent.jsx";
import styles from "./ModalForms.module.css";

export default function CreateRoomForm() {
     return (
          <form action="">
               <h3 className={styles.titleForm}>Crear sala</h3>
               <p className={styles.descriptionForm}>Crea una sala para que otros usuarios escriban sus secretos o anecdotas</p>

               <div className={styles.inputContainer}>
                    <InputComponent placeholder="Título" name="khjabdsdff" />
                    <InputComponent placeholder="Descripción (opcional)" height="172px" isTextArea={true} name="khjabdsdff" />
               </div>

               <div className={styles.switchContainer}>
                    <span>Activar censura </span>
                    <SwitchComponent />
               </div>
               <p className={styles.switchDescription}>Permite censurar palabras potencialmente baneables</p>

               <div className={styles.buttonContainer}>
                    <ButtonComponent variant="primary" text="Crear" />
                    <ButtonComponent variant="tertiary" text="Cancelar" />
               </div>
          </form>
     );
}
