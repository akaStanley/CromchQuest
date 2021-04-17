import React, { useState } from "react";
import { Button } from "reactstrap";

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
          <input
            placeholder="Add a Cereal Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="text"
          />
          <textarea
            placeholder="Add details"
            onChange={(e) => setNotes(e.target.value)}
            value={notes}
            name="text"
          />
          <Button onClick={handleSubmit}>Update</Button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a Cereal Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="text"
          />
          <textarea
            placeholder="Add details"
            onChange={(e) => setNotes(e.target.value)}
            value={notes}
            name="text"
          />

          <Button color="primary" onClick={handleSubmit}>
            Add Cereal
          </Button>
        </>
      )}
    </form>
  );
}

export default AddCerealForm;
