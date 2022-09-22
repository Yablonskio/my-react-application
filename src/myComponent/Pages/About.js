import BlankTextImage from "../BlankTextImage";
import UlFlex from "../UlFlex";
import UlFlexImgText from "../UlFlexImgText";
import image from "../../image";
function About() {


    return (
        <div>
            <BlankTextImage
                h1Text={'About'}
                mainText={'Lorem ipsum is placeholder text ' +
                    'commonly used in the graphic, print, and ' +
                    'publishing industries for previewing layouts' +
                    ' and visual mockups.'}
                button={0}
            />
        </div>
    )
}
export default About
