import { Modal } from "@mui/material";
import { useRecoilValue } from "recoil";
import useModal from "../lib/hooks/useModal";
import ModalBuild from "./ModalBuild";
import ModalCreate from "./ModalCreate";

import { modalState, ModalType } from "../lib/recoil/modal";

function ModalGlobal() {
  const { modalType } = useRecoilValue<ModalType>(modalState) || {};
  const { isModal, hideModal } = useModal();

  const renderComponent = () => {
    switch (modalType) {
      case "ModalCreate":
        return <ModalCreate />;
      case "ModalBuild":
        return <ModalBuild />;
      default:
        return <div />;
    }
  };

  return (
    <Modal
      open={isModal != null}
      onClose={() => hideModal()}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      {renderComponent()}
    </Modal>
  );
}

export default ModalGlobal;
