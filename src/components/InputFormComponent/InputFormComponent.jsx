import PropTypes from "prop-types";
import { useState } from "react";
import inputStyles from "./InputFormComponent.module.css";

export default function InputFormComponent({ name, placeholder, value, onChange, icon, type }) {
     const [isTouchedInput, setIsTouchedInput] = useState(false);

     const handleBlur = () => {
          setIsTouchedInput(true);
     };

     const isEmpty = isTouchedInput && !value;

     return (
          <div className={`${inputStyles.inputcontainer} ${isEmpty ? inputStyles.inputerror : ""}`}>
               <input
                    className={inputStyles.inputform}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={handleBlur}
                    type={type}
               />

               <span className={`${isEmpty ? inputStyles.alertmessage : inputStyles.hidealertmessage}`}>
                    No dejar este campo vació
               </span>

               <img src={icon} alt="" className={inputStyles.iconinput} />
          </div>
     );
}

InputFormComponent.propTypes = {
     name: PropTypes.string.isRequired,
     placeholder: PropTypes.string,
     value: PropTypes.string.isRequired,
     onChange: PropTypes.func.isRequired,
     icon: PropTypes.any,
     type: PropTypes.string,
};
