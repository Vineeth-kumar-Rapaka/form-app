import React, { useState } from "react";

const CheckBox = () => {
  const [data, setData] = useState({
    isAgreed: false,
  });

  const handleChange = (event) => {
    setData({
      isAgreed: event.target.checked,
    });
  };

  return (
    <div>
      <h3>Checkbox implementation</h3>
      <form action="">
        <input type="checkbox" name="isAgreed" onChange={handleChange} />
        <label htmlFor=""> Do you agree to the terms and conditions</label>
      </form>
      <br />
      <h5>{data.isAgreed == false ? "" : "You can move on now"}</h5>
    </div>
  );
};

export default CheckBox;
