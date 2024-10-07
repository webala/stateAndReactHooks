import { useState } from "react";

const StatefulLive = () => {
  const [value, setValue] = useState(0);

  console.log("state: ", value);

  const handleAdd = () => {
    value += 1;
  };
  const handleSubtract = () => {
       setValue((previousState) => {
         return previousState - 1;
       });
    // value -= 1;
  };

  return (
    <div>
      <p>
        This component holds a number state. Here is the value{" "}
        {value >= 0 ? value : "It is at zero or less"}
      </p>
      <div className="flex items-center gap-3">
        <button onClick={handleAdd}>Click me to add</button>
        <button onClick={handleSubtract}>Click me to subtract</button>
      </div>
    </div>
  );
};

export default StatefulLive;
