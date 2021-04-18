import React from "react";
import { Button } from "reactstrap";

const PlusButton = (props) => {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          float: "right",
          padding: "50px",
          position: "fixed",
          bottom: 0,
        }}
      >
        <Button color="primary">Add Cereal</Button>
      </div>
    </div>
  );
};

export default PlusButton;
