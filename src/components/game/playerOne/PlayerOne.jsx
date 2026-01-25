import { useState } from "react"
import { useNavigate } from "react-router";
import { Bounce, ToastContainer, toast } from "react-toastify";

const PlayerOne = () => {

  const [number,setNumber] = useState ("")
  const navigate = useNavigate()

  const handleNumber = (e)=> {
    setNumber(e.target.value)
  }

  const handleNumberClick = ()=> {
    console.log(number);
    if (!number) {
      toast.error("give a number")
      return
    }
      const numberOneSend = number; // save number before clearing input
    toast.success("Number saved! 🎮");
    setNumber(""); // reset input

      setTimeout(() => {
        navigate("/two",{
          state : {number : numberOneSend}                                        
        })
      }, 3000);
    
  }

  
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

      <div>
         <div className="min-h-screen flex justify-center items-center text-center">
        <div className="">
          <h1 className="font-bold text-3xl">Player - 1 </h1>
          <div>
            <input
            value={number}
            onChange={handleNumber}
              className="border outline-0 px-15 text-center py-3 rounded-lg mt-8"
              type="number"
              placeholder="Give a number"/>
          </div>
          <div>
            <button
            onClick={handleNumberClick}
              className="shadow-xl/20 border px-8 py-1 rounded-lg cursor-pointer bg-amber-300 font-bold mt-15">
              Let’s play
              
            </button>
            <p className='mt-10 text-[50px] font-semibold text-green-500'>Please give a number</p>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default PlayerOne
