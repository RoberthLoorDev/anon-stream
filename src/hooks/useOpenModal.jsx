import { useState } from "react";

export function useOpenModal() {
     const [openModal, setOpenModal] = useState(false);

     const handleModal = () => setOpenModal(!openModal);
     const closeModal = () => {
          setOpenModal(false);
     };

     return {
          openModal,
          setOpenModal,
          handleModal,
          closeModal,
     };
}
