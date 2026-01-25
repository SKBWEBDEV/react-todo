import React, { useState } from "react";
import { useLocation } from "react-router";
import { Bounce, ToastContainer, toast } from "react-toastify";

const PlayerTwo = () => {
  const location = useLocation();
  const numberTwoSend = location.state?.number;
  console.log(numberTwoSend);

  const [two, setTwo] = useState("");
  const [chance, setChance] = useState(0);

  const handleTwoChange = (e) => {
    setTwo(e.target.value);
  };

  const handleClick = () => {
    if (chance >= 5) {
      toast.error("time is over");
      return;
    }
    setChance(prev => prev + 1);
    if (!two) {
      toast.error("give the number of first player");
    } else if (numberTwoSend === two) {
      toast.success("second player is win 🎉");
      setTwo("");
    } else {
      toast.success("first player is win 🎉");
      setTwo("");
    }
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />

      <div>
        <div className="min-h-screen flex justify-center items-center text-center">
          <div className="">
            <h1 className="font-bold text-3xl">Player - 2 </h1>
            <p className="pt-5 font-semibold text-lime-400">Chance: {chance}</p>
            <div>
              <input
                value={two}
                onChange={handleTwoChange}
                className="border outline-0 px-15 text-center py-3 rounded-lg mt-8"
                type="number"
                placeholder="Guess the number"
              />
            </div>
            <div>
              <button
                onClick={handleClick}
                className="shadow-xl/20 border px-8 py-1 rounded-lg cursor-pointer bg-amber-300 font-bold mt-15"
              >
                Guess
              </button>
              {/* <p className='mt-10 text-[50px] font-semibold text-green-500'>Please give a number</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerTwo;
