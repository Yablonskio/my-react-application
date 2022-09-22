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

/*







































        <BlankTextImage
            img={brain}
            imgButton1={false}
            imgButton2={false}
            reverse={true}
            h1Text={"Apply AI, Deep Learning and Data Sciece to solve"}
            mainText={"Lorem ipsum is placeholder text commonly used" +
                " in the graphic, print, and publishing industries" +
                " for previewing layouts and visual mockups."}
            button={1}
            button1={"Learn More"}
        />
        <UlFlex
            count={5}
            img={logoUl}
            img1={logoUl11}
            img2={logoUl12}
            img3={logoUl13}
            img4={logoUl11}
            img5={logoUl11}



        />
        <BlankTextImage
            img={smartphone}
            imgButton1={false}
            imgButton2={false}
            reverse={false}
            h1Text={"What our clients say about our awesome solutions"}
            mainText={"To take a trivial example, which of us ever" +
                " undertakes laborious physical exercise, except to" +
                " obtain some advantage from it who do not know." +
                "Lorem ipsum is placeholder text commonly used in" +
                " the graphic, print, and publishing ." +
                "Lorem ipsum is placeholder previewing layouts and" +
                " visual mockups. Lorem ipsum is placeholder text" +
                " commonly used in the graphic, print, and publishing" +
                " industries for previewing layouts and visual mockups."}
            button={0}
        />
 */
