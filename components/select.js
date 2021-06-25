import React, { useState } from "react";

const Select = () => {
  const [cityState, setCityState] = useState("");

  return (
    <div className="container p-5">
      <h3>Select implementation</h3>
      <select
        className="form-select form-select-lg"
        onChange={(event) => {
          const selectedFood = event.target.value;
          setCityState(selectedFood);
        }}
      >
        <option value="Hyderabad">Hyderabad</option>
        <option value="Roorkee">Roorkee</option>
        <option value="Banglore">Banglore</option>
        <option value="Delhi">Delhi</option>
      </select>
      <br />
      <p>
        You seleted <b>{cityState}</b>
      </p>
    </div>
  );
};

export default Select;
