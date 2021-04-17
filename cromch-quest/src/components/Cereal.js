import React, { useState } from "react";
import { Button } from "reactstrap";
import AddCerealForm from "./AddCerealForm";

const Cereal = ({ cereals, removeCereal, updateCereal }) => {
  const [edit, setEdit] = useState(null);

  const submitUpdate = (value) => {
    updateCereal(edit.id, value);
    setEdit(null);
  };

  if (edit) {
    return <AddCerealForm edit={edit} onSubmit={submitUpdate} />;
  }

  return cereals.map((cereal, index) => (
    <div key={index}>
      <div>
        {cereal.name}
        <br />
        {cereal.notes}
      </div>
      <div>
        <Button color="danger" onClick={() => removeCereal(cereal.id)}>
          Delete
        </Button>
        <Button color="warning" onClick={() => setEdit(cereal)}>
          Edit
        </Button>
      </div>
    </div>
  ));
};

export default Cereal;
