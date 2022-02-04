import React from "react";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Zoom from "@mui/material/Zoom";
import ProjectInfoTabs from "../ProjectInfoTabs";
import'./style.css';

const ModalComponent = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className="Font-mulish cursor-pointer h-full" onClick={handleOpen}>
        {props.children}
      </div>
      <Modal
        className="flex items-center justify-center"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        
      >
        <Zoom in={open}>
          <div className="ModalComponent-Wrapper">
            <p className="ModalComponent-Title">{props.name}</p>
            <ProjectInfoTabs {...props} />
          </div>
        </Zoom>
      </Modal>
    </React.Fragment>
  );
};

export default ModalComponent;
