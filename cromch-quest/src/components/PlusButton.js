import React from "react";
import { Button } from "reactstrap";

const PlusButton = (props) => {
  return (
    <div
      style={{
        padding: "50px",
        float: "center",
        position: "fixed",
        bottom: 0,
      }}
    >
      <Button color="primary">Add Cereal</Button>{" "}
    </div>
  );
};

export default PlusButton;
