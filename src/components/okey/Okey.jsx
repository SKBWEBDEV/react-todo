import { useState } from "react"


const Okey = () => {


  const [list,setList] = useState ([])
  const [data,setData] = useState ("")

  const handleText = (e)=> {
    setData(e.target.value);
  }

  const handleClick = ()=> {
    let arr = [...list]
  //  console.log(list);
   arr.push(data)
    setList(arr)
    setData("")
  }


  return (
    <div className="mx-auto text-center h-screen py-50">

      <div>
        <input
        value={data}
        onChange={handleText}
        type="text" placeholder="text" className="px-8 py-2 rounded-2xl outline-0 border"/><br />
        <button onClick={handleClick} className="border mt-5 px-5 py-2 rounded-lg cursor-pointer">
          Click Here</button>
      </div>

      <div>
        {
          list.map((item,index)=>(
            <li key={index}>{item}</li>
          ))
        }
      </div>
      
    </div>
  )
}

export default Okey
