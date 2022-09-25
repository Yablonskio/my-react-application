import {Route, Routes, Link} from "react-router-dom"
import './App.css'
import image from "./image";
// components
import Top from "./myComponent/Top";
import Footer from "./myComponent/Footer";
// ^ components

// pages
import Home from "./myComponent/Pages/Home"
import About from "./myComponent/Pages/About"
import Servises from "./myComponent/Pages/Servises"
import Blog from "./myComponent/Pages/Blog"
import Contact from "./myComponent/Pages/Contact"
import SingIn from "./myComponent/SingIn"
import Smartphone from "./myComponent/Pages/blog/Smartphone"
import RocketBlankTextImage from "./myComponent/Pages/blog/RocketBlankTextImage"
import Brain from "./myComponent/Pages/blog/Brain"
// ^ pages

let logoUlimg1 = [
    image.logoUl1,
    image.logoUl2,
    image.logoUl3,
    image.logoUl4
]
let logoUlimg2 = [
    image.logoUl11,
    image.logoUl12,
    image.logoUl13,
    image.logoUl14,
    image.logoUl15
]

function App() {
  return (
    <div className="App">
        <Top />
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/servises" element={<Servises />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signIn" element={<SingIn register={false} />} />

            <Route path="/blog/smartphone" element={<Smartphone />} />
            <Route path="/blog/brain" element={<Brain />} />
            <Route path="/blog/rocketBlankTextImage" element={<RocketBlankTextImage />} />
        </Routes>
        <Footer
            dark={true}
        />
    </div>
  );
}

export default App;
