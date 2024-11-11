import styles from "./SwitchComponent.module.css";
import PropTypes from "prop-types";

export default function SwitchComponent({ value, name, onChange }) {
     return (
          <label className={styles.toggleSwitch}>
               <input type="checkbox" value={value} onChange={(event) => onChange(event)} name={name} />
               <div className={styles.toggleSwitchBackground}>
                    <div className={styles.toggleSwitchHandle}></div>
               </div>
          </label>
     );
}
SwitchComponent.propTypes = {
     value: PropTypes.bool.isRequired,
     name: PropTypes.string.isRequired,
     onChange: PropTypes.func,
};
