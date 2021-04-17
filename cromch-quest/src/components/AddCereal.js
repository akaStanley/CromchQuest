import React, { useState } from "react";

function AddCereal(props) {
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
            placeholder="Update your item"
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
          <button onClick={handleSubmit}>Update</button>
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

          <button onClick={handleSubmit}>Add Cereal</button>
        </>
      )}
    </form>
  );
}

export default AddCereal;
