// import Okey from "./components/okey/Okey"


import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import Game from "./components/game/Game"
import PlayerOne from "./components/game/playerOne/PlayerOne"
import PlayerTwo from "./components/playerTwo/PlayerTwo";

// import Prac from "./components/prac/Prac"
// import Useffect from "./components/useffect/Useffect"

// import Timing from "./components/okey/timing/Timing"
// import TodoList from "./components/todolist/TodoList"


function App() {

  const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Game/></div>,
  },
  {
    path: "/one",
    element: <div><PlayerOne/></div>,
  },
  {
    path: "/two",
    element: <div><PlayerTwo/></div>,
  },
]);


  return (


    <>
      {/* <Okey/> */}
      {/* <Timing/>
      <TodoList/> */}
      {/* <Prac/>  */}
      {/* <Useffect/>  */}
      
      
      <RouterProvider router={router} />
    </>
  )
}

export default App
