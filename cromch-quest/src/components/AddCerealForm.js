import React, { useState } from "react";
import {
  Button,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

function AddCerealForm(props) {
  const [name, setName] = useState(props.edit ? props.edit.name : "");
  const [notes, setNotes] = useState(props.edit ? props.edit.notes : "");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      name,
      notes,
    });
    setName("");
    setNotes("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <Modal isOpen={props.edit}>
            <ModalHeader>Edit Cereal</ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label>Cereal Name</Label>
                <Input
                  placeholder="Cereal Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="text"
                />
              </FormGroup>
              <FormGroup>
                <Label>Details</Label>
                <Input
                  placeholder="Add Notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  type="textarea"
                  name="text"
                />
              </FormGroup>
              <Button color="primary" onClick={handleSubmit}>
                Save
              </Button>
            </ModalBody>
          </Modal>
        </>
      ) : (
        <>
          <FormGroup>
            <Label>Cereal Name</Label>
            <Input
              placeholder="Add a Cereal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="text"
            />
          </FormGroup>
          <FormGroup>
            <Label>Details</Label>
            <Input
              placeholder="Add Notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              type="textarea"
              name="text"
            />
          </FormGroup>
          <div>
            <Button color="primary" onClick={handleSubmit}>
              Add Cereal
            </Button>
          </div>
        </>
      )}
    </form>
  );
}

export default AddCerealForm;
