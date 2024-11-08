import styles from "./SwitchComponent.module.css";

export default function SwitchComponent() {
     return (
          <label className={styles.toggleSwitch}>
               <input type="checkbox" />
               <div className={styles.toggleSwitchBackground}>
                    <div className={styles.toggleSwitchHandle}></div>
               </div>
          </label>
     );
}
