import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
} from "reactstrap";
import CromchBar from "./CromchBar";
import PlusButton from "./PlusButton";
import CerealList from "./CerealList";
import Cereal from "./Cereal";
import AddCerealForm from "./AddCerealForm";

function App() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const addCereal = (cereal) => !cereal.name || /^\s*$/.test(cereal.name);

  return (
    <div className="App">
      <CromchBar />
      <div
        style={{
          float: "right",
          padding: "50px",
          position: "fixed",
          bottom: 0,
        }}
      >
        <Button
          color="primary"
          onClick={toggle}
          className="rounded-circle"
          style={{
            fontSize: 100,
            padding: "0rem 2.5rem",
          }}
        >
          +
        </Button>
      </div>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Cereal</ModalHeader>
        <ModalBody>
          <AddCerealForm onSubmit={addCereal} />
        </ModalBody>
      </Modal>

      <div
        style={{
          padding: "75px",
          float: "center",
        }}
      >
        <CerealList />
      </div>
    </div>
  );
}

export default App;
