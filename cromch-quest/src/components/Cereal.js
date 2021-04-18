import React, { useState } from "react";
import { Button, Table, Modal, ModalBody, ModalFooter } from "reactstrap";
import AddCerealForm from "./AddCerealForm";

const Cereal = ({ cereals, removeCereal, updateCereal }) => {
  const [edit, setEdit] = useState(null);
  const [pendDelete, setPendDelete] = useState(null);

  const submitUpdate = (value) => {
    updateCereal(edit.id, value);
    setEdit(null);
  };

  if (edit) {
    return <AddCerealForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <>
      <Table hover responsive>
        <thead>
          <tr>
            <th align="left" style={{ width: "15rem" }}>
              Cereal
            </th>
            <th>Details</th>
            <th align="right" style={{ width: "10.5rem" }}></th>
          </tr>
        </thead>
        <tbody>
          {cereals.map((cereal, index) => (
            <tr key={index}>
              <td>{cereal.name}</td>
              <td>{cereal.notes}</td>
              <td>
                <Button
                  style={{
                    marginRight: "1rem",
                  }}
                  color="danger"
                  onClick={() => setPendDelete(cereal)}
                >
                  Delete
                </Button>
                <Button color="warning" onClick={() => setEdit(cereal)}>
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal isOpen={pendDelete}>
        <ModalBody>Are you sure?</ModalBody>
        <ModalFooter>
          <Button
            color="danger"
            onClick={() => {
              removeCereal(pendDelete.id);
              setPendDelete(null);
            }}
          >
            Delete
          </Button>

          <Button color="secondary" onClick={() => setPendDelete(null)}>
            Actually, nevermind
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Cereal;
