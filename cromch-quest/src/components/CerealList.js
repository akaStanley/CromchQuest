import React, { useState } from "react";
import AddCerealForm from "./AddCerealForm";
import Cereal from "./Cereal";

function CerealList() {
  const [cereals, setCereals] = useState([]);

  const addCereal = (cereal) => {
    if (!cereal.name || /^\s*$/.test(cereal.name)) {
      return;
    }

    const newCereals = [cereal, ...cereals];

    setCereals(newCereals);
    console.log(...cereals);
  };

  const updateCereal = (cerealId, newValue) => {
    if (!newValue.name || /^\s*$/.test(newValue.name)) {
      return;
    }

    setCereals((prev) =>
      prev.map((item) => (item.id === cerealId ? newValue : item))
    );
  };

  const removeCereal = (id) => {
    const removedArr = [...cereals].filter((cereal) => cereal.id !== id);

    setCereals(removedArr);
  };

  return (
    <>
      <h1>What's the Cromch for Today?</h1>
      <AddCerealForm onSubmit={addCereal} />
      <Cereal
        cereals={cereals}
        removeCereal={removeCereal}
        updateCereal={updateCereal}
      />
    </>
  );
}

export default CerealList;
