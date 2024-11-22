import styles from "./ModalLayout.module.css";
import PropTypes from "prop-types";

export default function ModalLayout({ children, handleModal, openModal }) {
     //close the modal when you click out of the form
     const handleBackdropClick = (e) => {
          if (e.target === e.currentTarget) {
               handleModal();
          }
     };

     return (
          <>
               {openModal && (
                    <div className={styles.globalContainer} onClick={handleBackdropClick}>
                         {/* form container */}
                         <div className={styles.modalContainer}>
                              <div className={styles.contentModal}>{children}</div>
                         </div>
                    </div>
               )}
          </>
     );
}

ModalLayout.propTypes = {
     children: PropTypes.node,
     handleModal: PropTypes.func,
     openModal: PropTypes.bool,
};
