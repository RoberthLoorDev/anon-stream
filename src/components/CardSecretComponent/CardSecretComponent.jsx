import { useState } from "react";
import { icons } from "../../assets/icons/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import SelectSecretModal from "../SelectSecretModal/SelectSecretModal";
import style from "./CardSecretComponent.module.css";
import PropTypes from "prop-types";

export default function CardSecretComponent({ title = "Título", created_at, roomId }) {
     const [openedModal, setOpenedModal] = useState(false);

     const handleModal = () => {
          setOpenedModal(!openedModal);
     };

     return (
          <article className={style.secretContainer}>
               <div className={style.titleContainer}>
                    <span className={style.secretsNumber}>30</span>
                    <span className={style.secretText}>Secretos</span>
               </div>

               {/* secrets container */}
               <div className={style.secretDataContainer}>
                    <div className={style.secretData}>
                         <img src={icons.secretTitle} alt="Título del secreto" className={style.iconSecretTitle} />
                         <h3 className={style.titleSecret}>{title}</h3>
                    </div>

                    <div className={style.secretData}>
                         <img src={icons.dateTitle} alt="Título del secreto" className={style.iconSecretDate} />
                         <span className={style.secretDate}>{created_at}</span>
                    </div>
               </div>

               <div className={style.buttonsContainer}>
                    <div className={style.buttonOptionContainer}>
                         <ButtonComponent
                              text="Presentar"
                              variant="tertiary"
                              width="143px"
                              height="50px"
                              icon={icons.playWhite}
                         />
                         <span className={style.options} onClick={handleModal}>
                              ⋮
                         </span>
                    </div>
                    {openedModal && <SelectSecretModal />}
               </div>
          </article>
     );
}

CardSecretComponent.propTypes = {
     title: PropTypes.string.isRequired,
     created_at: PropTypes.string,
     roomId: PropTypes.number,
};
