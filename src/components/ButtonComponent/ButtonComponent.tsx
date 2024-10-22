import React from "react";
import stylesButton from "./ButtonComponent.module.css";
import { icons } from "../../assets/icons/icons";

export default function ButtonComponent({ text, icon, width, height }) {
     return (
          <button className={stylesButton.button} style={{ width: width ? width : "100%", height: height ? height : "50px" }}>
               <img src={icon} className={stylesButton.iconInButton} alt="Iniciar sesión con Googles" />
               <span className={stylesButton.textInButton}>{text}</span>
          </button>
     );
}
