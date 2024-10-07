import React, { useState } from "react";

const Stateful = () => {
  const [value, setValue] = useState(0);
  const handleAdd = () => setValue((prev) => prev + 1);
  const handleSubtract = () => setValue((prev) => prev - 1);

  return (
    <div>
      <p>
        This component holds a number state. Here is the value{" "}
        {value > 0 ? value : "It is at zero or less"}
      </p>
      <div className="flex items-center gap-3">
        <button onClick={handleAdd}>Click me to add</button>
        <button onClick={handleSubtract}>Click me to subtract</button>
      </div>
    </div>
  );
};

export default Stateful;
