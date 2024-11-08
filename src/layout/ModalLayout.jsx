import React from "react";
import InputFormComponent from "../components/InputFormComponent/InputFormComponent";

export default function ModalLayout() {
     return (
          <div>
               <form action="">
                    <InputFormComponent placeholder="Título" />
                    <InputFormComponent placeholder="Descripción (opcional)" />

                    <span>Activar censura </span>
               </form>
          </div>
     );
}
