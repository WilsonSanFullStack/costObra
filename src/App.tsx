import { Routes, Route } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { Home } from "./components/view/Home";
import { NavBar } from "./components/view/NavBar";


export const App = () => {
  return (
    <div className="">
      <NavBar />
    <Routes>
      <Route path='/' element={<Home />}/> 
    </Routes>
    </div>
  )
}
