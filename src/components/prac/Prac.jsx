import React from "react";

const Prac = () => {
  const handleClick = () => {

    
    let a = 4
    let d = 5


    if (d<a) {
      alert("a is the largest number")
    }else if (d>a){
      alert("b is ta  largest number")
    }else{
      alert("nothing")
    }
   
  }

  return (
    <div>
      <div className="text-center flex items-center justify-center h-screen">
        <button
          onClick={handleClick}
          className="border cursor-pointer px-8 py-2 rounded-lg">
          click here
        </button>

      </div>
    </div>
  );
};

export default Prac;
