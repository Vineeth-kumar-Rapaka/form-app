import React, { useState } from "react";

const Radio = () => {
  const [data, setData] = useState({
    gender: "",
  });

  const handleChange = (event) => {
    setData({
      gender: event.target.value,
    });
  };

  return (
    <form action="">
      <h3>Radio implementation</h3>
      <div>
        <label htmlFor="">Male : </label>
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="">Female : </label>
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={handleChange}
        />
      </div>
      <p>
        You selected <b>{data.gender}</b>
      </p>
      <br />
    </form>
  );
};

export default Radio;
