import image from "../image"
import {Link, Route, Routes} from 'react-router-dom'
import Home from "./Pages/Home";
import About from "./Pages/About";
import Servises from "./Pages/Servises";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import SingIn from "./SingIn";
function Top() {
    let css = {
        body : {
            width: '100%',
            height: '70px',

            backgroundColor: '#0A121F',
            color: 'white',

            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
        },
        img : {
            height: '57px'
        },
        ul : {
            width: '450px',

            listStyleType: 'none',

            display: 'flex',
            justifyContent: 'space-between'
        },
        li : {
            fontSize: '16px',
            color: 'white',
            textDecoration: 'none'
        },
        button : {
            width: '100px',
            height: '50px',

            backgroundColor: '#3A68B8',
            color: 'white',
            textDecoration: 'none',
            fontSize: '16px',
            border: 'none',
            borderRadius: '5px'

        }
    }

    return (
        <div style={css.body}>
            <img src={image.logo} alt="логотип" style={css.img}/>
            <ul style={css.ul}>
                <li><Link to='/home' style={css.li}>Home</Link></li>
                <li><Link to='/about' style={css.li}>About</Link></li>
                <li><Link to='/servises' style={css.li}>Services</Link></li>
                <li><Link to='/blog' style={css.li}>Blog</Link></li>
                <li><Link to='/contact' style={css.li}>Contact</Link></li>
            </ul>
            <Link to='/signIn' style={css.button}>
                <button style={css.button}>Sign In</button>
            </Link>



        </div>
    );
}

export default Top;
