import styles from "./ModalLayout.module.css";
import PropTypes from "prop-types";

export default function ModalLayout({ children }) {
     return (
          <div className={styles.globalContainer}>
               {/* form container */}
               <div className={styles.modalContainer}>
                    <div className={styles.contentModal}>{children}</div>
               </div>
          </div>
     );
}

ModalLayout.propTypes = {
     children: PropTypes.node,
};
