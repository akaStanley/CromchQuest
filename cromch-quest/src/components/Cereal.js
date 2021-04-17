import React, { useState } from "react";
import { Button } from "reactstrap";
import AddCereal from "./AddCereal";

const Cereal = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState(null);

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit(null);
  };

  if (edit) {
    return <AddCereal edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.name}
        <br />
        {todo.notes}
      </div>
      <div className="icons">
        <Button color="danger" onClick={() => removeTodo(todo.id)}>
          Delete
        </Button>
        <Button color="warning" onClick={() => setEdit(todo)}>
          Edit
        </Button>
      </div>
    </div>
  ));
};

export default Cereal;
