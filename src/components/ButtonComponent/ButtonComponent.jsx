import PropTypes from "prop-types";
import stylesButton from "./ButtonComponent.module.css";

const variantButton = {
     primary: { backgroundColor: "597BDA", color: "#121820" },
     secondary: { backgroundColor: "#20242F", color: "white" },
     tertiary: { backgroundColor: "#212634", color: "#F4F8F9" },
     delete: { backgroundColor: "#8F1218", color: "#121820" },
};

export default function ButtonComponent({ text, icon, width, height, alt, type, variant = "secondary", onClick }) {
     return (
          <button
               type={type}
               onClick={onClick}
               className={stylesButton.button}
               style={{
                    ...variantButton[variant],
                    width: width ? width : "100%",
                    height: height ? height : "48px",
                    fontWeight: 700,
               }}
          >
               {icon ? <img src={icon} className={stylesButton.iconInButton} alt={alt} /> : ""}
               <span className={stylesButton.textInButton}>{text}</span>
          </button>
     );
}

ButtonComponent.propTypes = {
     text: PropTypes.string.isRequired,
     icon: PropTypes.any,
     width: PropTypes.string,
     height: PropTypes.string,
     alt: PropTypes.string,
     type: PropTypes.string,
     variant: PropTypes.oneOf(["primary", "secondary", "delete", "tertiary"]),
     onClick: PropTypes.func,
};
