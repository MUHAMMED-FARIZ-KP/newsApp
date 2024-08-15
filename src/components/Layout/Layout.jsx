import Home from "../Home/Home"
import About from "../About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Layout = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Layout