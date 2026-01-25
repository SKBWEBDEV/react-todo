import { useState } from "react";

const Timing = () => {
  const [state, setState] = useState(0);

  const handleClick = () => {
    setState((sakib) => sakib + 1);
  };

  const handleMinas = () => {
    if (state === 0) {
      return;
    }
    setState((sakib) => sakib - 1);
  };

  return (
    <div>
      <div className="text-center flex items-center justify-center h-screen">
        <p className="text-4xl text-amber-500 font-bold">{state}</p>
        <button
          className="ml-10 border px-9 cursor-pointer py-2"
          onClick={handleClick}
        >
          add
        </button>
        <button
          className="ml-10 border px-9 cursor-pointer py-2"
          onClick={handleMinas}
        >
          minas
        </button>
      </div>
    </div>
  );
};

export default Timing;

// setState(sakib => sakib + 1); this is a function
// such
// function (okey) {
//   return prev + 1
// }
// setState(sakib => sakib + 1); this is a function
