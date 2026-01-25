import React, { useEffect, useState } from "react";

const Useffect = () => {
  let [show, setShow] = useState(0);
  // let [shows,setShows] = useState(0)

  //   const handleClick = ()=> {
  // const interVal = setInterval(() => {
  //       if (show  == 10) {
  //       return  clearInterval(interVal)

  //       }
  //       show ++
  //       setShow(show)
  //     }, 90);

  //     const interVal12 = setInterval(() => {
  //       if (shows  == 20) {
  //       return  clearInterval(interVal12)

  //       }
  //       shows ++
  //       setShows(shows)
  //     }, 40);

  //   }

  useEffect(() => {

    
    if (show >= 10) {
      return
    }
    const shakib = setInterval(() => {
      setShow((pref) => pref+1);

    }, 100);
      return () => clearInterval(shakib);    
  }, [show]);

  console.log(show);

  return (
    <div>
      <div className="text-center py-50 font-bold text-[60px]">
        <p>{show}</p>
        {/* <p>{shows}</p> */}
        <button
          // onClick={handleClick}
          className="border py-0 px-25 mt-10 cursor-pointer rounded-lg">
          Click
        </button>
      </div>
    </div>
  );
};

export default Useffect;
