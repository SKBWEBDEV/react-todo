import { useState } from "react"


const Okey = () => {


  // const [list,setList] = useState ([])
  // const [data,setData] = useState ("")

  // const handleText = (e)=> {
  //   setData(e.target.value);
  // }

  // const handleClick = ()=> {
  //   let arr = [...list]
  // //  console.log(list);
  //  arr.push(data)
  //   setList(arr)
  //   setData("")
  // }

  const [data,setData] = useState ("")
  const [okey,setOkey] = useState ("")
  const [list,setList] = useState ([])

  const [light,setLight] = useState (true)

  const handleText = (e)=> {
    setData(e.target.value);
    
  } 
  const handleTwo = (e)=> {
    setOkey(e.target.value);
    
  } 

  const handleClick = ()=> {
    console.log(data,"done");
    let arr = [...list]
    arr.push(data,okey)
    setList(arr)
    setData("")
    setOkey("")
  } 


  const handleReset = ()=> {
    console.log('reset');
    setData("")
    setOkey("")
  }


  return (
    <div
      className={`h-screen transition-all duration-300 ${light ? "bg-white text-black" : "bg-black text-white"}`}>

      <div>
        <input
        value={data}
        onChange={handleText}
        type="text" placeholder="text" className="px-8 py-2 rounded-2xl outline-0 border"/>
        <input
        value={okey}
        onChange={handleTwo}
        type="text" placeholder="text" className="px-8 py-2 rounded-2xl outline-0 border"/>
        {/* <br /> */}
        <button onClick={handleClick} className="border mt-5 px-5 py-2 rounded-lg cursor-pointer">
          Click Here</button>
<br />

<div>
  {
    light ? <button onClick={()=> setLight (!light) } className="border mt-5 px-5 py-2 rounded-lg cursor-pointer">
          White</button> : <button onClick={()=> setLight (!light) } className="border mt-5 px-5 py-2 rounded-lg cursor-pointer">
          Dark</button>
  }
</div>

        
<br />
        <button onClick={handleReset} className="border mt-5 px-5 py-2 rounded-lg cursor-pointer">
          Reset</button>
      </div>

      <div>
        {/* {
          list.map((item,index)=>(
            <li key={index}>{item}</li>
          ))
        } */}

        {
          list.map((item,index)=> (
            <p className="flex gap-14" key={index}>{item}</p>
          ))
        }


      </div>
      
    </div>
  )
}

export default Okey





// ----------------- dark mode and white mode -------------------------------------

//  className={`h-screen transition-all duration-300
//         ${light ? "bg-white text-black" : "bg-black text-white"}
//       `}
// ----------------- dark mode and white mode -------------------------------------
