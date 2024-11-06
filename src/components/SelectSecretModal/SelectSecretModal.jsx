import stylesModal from "./SelectSecretModal.module.css";
import { icons } from "../../assets/icons/icons";

export default function SelectSecretModal() {
     return (
          <div>
               <div className={stylesModal.modalContainer}>
                    <button className={stylesModal.option}>
                         <img src={icons.editWhite} alt="Editar sala" className={stylesModal.iconOption} />
                         <span>Editar</span>
                    </button>

                    <button className={stylesModal.option}>
                         <img src={icons.deleteRed} alt="Editar sala" className={stylesModal.iconOption} />
                         <span className={stylesModal.textDelete}>Eliminar</span>
                    </button>
               </div>
          </div>
     );
}
