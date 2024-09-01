import {Routes,Route,Link} from "react-router-dom"
import Home from "./pages/Home"
import Previous from "./pages/Previous"
import Error from "./pages/Error"
import Navbar from "./components/ui/Navbar"
function App(){
  return (
    <>

    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="previous" element={<Previous/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>

    </>
  )
}

export default App
