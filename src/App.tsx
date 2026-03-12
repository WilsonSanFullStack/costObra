import { Routes, Route } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { Home } from "./components/Home";


export const App = () => {
  return (
    <div className="bg-gray-500 min-w-full max-w-full min-h-full max-h-full">

    <Routes>
      <Route path='/' element={<Home />}/> 
    </Routes>
    </div>
  )
}
