import React, { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import {  useNavigate } from "react-router";

const Game = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate ()

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    console.log(input);
    if (input === "") {
     toast.error("Give your name");
    } else {
      toast.success("Let's start 🎮");
      setTimeout(() => {
        navigate("/one")
      }, 3000);
      setInput("");
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
        transition={Bounce}/>

      <div className="min-h-screen flex justify-center items-center text-center">
        <div className="">
          <h1 className="font-bold text-3xl">Wanna Play game?</h1>
          <div>
            <input
              value={input}
              onChange={handleChange}
              className="border outline-0 px-15 text-center py-3 rounded-lg mt-8"
              type="text"
              placeholder="What is your name"/>
          </div>
          <div>
            <button
              onClick={handleClick}
              className="shadow-xl/20 border px-8 py-1 rounded-lg cursor-pointer bg-amber-300 font-bold mt-15">
              Start Game
            </button>
          </div>
        </div>
      </div>

      <div className="hidden">okey</div>
    </div>
  );
};

export default Game;
