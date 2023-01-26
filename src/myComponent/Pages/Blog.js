import BlankTextImage from "../BlankTextImage";
import BlogFlex from "../BlogFlex";
import image from "../../image";
import {Link} from 'react-router-dom'
import {useEffect} from "react";


function Blog() {

    const css = {
        ul : {
            listStyleType: 'none',
        },
        link : {
            textDecoration: 'none'
        }
    }
    return (
        <div>
            <BlankTextImage
                h1Text={'Blog'}
                mainText={'Lorem ipsum is placeholder text ' +
                    'commonly used in the graphic, print, and ' +
                    'publishing industries for previewing layouts' +
                    ' and visual mockups.'}
                button={0}
            />
            <ul style={css.ul}>
                <li>
                    <Link to='/blog/smartphone' style={css.link}>
                        <BlogFlex
                            img={image.smartphone}
                            text={'Lorem ipsum is placeholder text ' +
                                'commonly used in the graphic, print, andrgdfdggfdgdff'}/>
                    </Link>
                </li>
                <li>
                    <Link to='/blog/brain'  style={css.link}>
                        <BlogFlex
                            img={image.brain}
                            text={'Lorem ipsum is placeholder text ' +
                                'commonly used in the graphic, print, andrgdfdggfdgdff'}/>
                    </Link>
                </li>
                <li>
                    <Link to='/blog/rocketBlankTextImage'  style={css.link}>
                        <BlogFlex
                            img={image.rocketBlankTextImage}
                            text={'Lorem ipsum is placeholder text ' +
                                'commonly used in the graphic, print, andrgdfdggfdgdff'}/>
                    </Link>
                </li>
            </ul>

        </div>
    )
}
export default Blog
