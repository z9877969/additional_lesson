import { createContext, useCallback, useContext, useState } from "react";

import { createPortal } from "react-dom";

const modalStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "#00000050",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const modalRoot = document.querySelector("#modal-root");

const ModalContext = createContext(); // Provider + Consumer

export const useSetModal = () => {
  const value = useContext(ModalContext); // setIsModalOpen
  return value;
};

const ModalProvider = ({ children }) => {
    // const isLoading = useSelector(state => state.isLoading);
    // const [isL, setIsL] = useState(false);
  const [modal, setModal] = useState(null);
  const toggleModal = useCallback(
    (modal = null) => {
      setModal(modal);
    },
    [setModal]
  ); // ref1
  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };
  return (
    <>
      {(isLoading || isL) &&
        createPortal(
          <div style={modalStyle} onClick={handleCloseModal}>
            {modal}
          </div>,
          modalRoot
        )}
      <ModalContext.Provider value={toggleModal}>
        {children}
      </ModalContext.Provider>
    </>
  );
};

export default ModalProvider;
