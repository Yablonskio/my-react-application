import BlankTextImage from "../BlankTextImage";
import UlFlex from "../UlFlex";
import UlFlexImgText from "../UlFlexImgText";
import image from "../../image";
let logoUlImg1 = [
    image.logoUl1,
    image.logoUl2,
    image.logoUl3,
    image.logoUl4
]
let logoUlImg2 = [
    image.logoUl11,
    image.logoUl12,
    image.logoUl13,
    image.logoUl14,
    image.logoUl15
]
function Home() {
    return (
        <div>
            <BlankTextImage
                img={image.rocketBlankTextImage}
                topText={'Next genaretion platform'}
                h1Text={'Artificial intelligence & Syber security'}
                mainText={'Lorem ipsum is placeholder text ' +
                    'commonly used in the graphic, print, and ' +
                    'publishing industries for previewing layouts' +
                    ' and visual mockups.'}
                button={2}
                button1={'Get Started'}
                imgButton2={image.playIcon}
                button2={'Watch Video'}
            />
            <UlFlex
                img={logoUlImg1}
                backgroundColor={'#0d1a2c'}
                count={4}

            />
            <BlankTextImage
                reverse={true}
                img={image.brain}
                h1Text={'Apply AI, Deep Learning and Data Sciece to solve'}
                mainText={'Lorem ipsum is placeholder text commonly used' +
                    ' in the graphic, print, and publishing industries ' +
                    'for previewing layouts and visual mockups.'}
                button={1}
                button1={'Learn More'}
            />
            <UlFlexImgText
                count={5}
                img={logoUlImg2}
                h1Text1={'Naxly as the Winners in Global Agency Awards'}
                text1={'Lorem ipsum is placeholder text commonly used' +
                    ' in print, and publishing industries for previewing' +
                    ' layouts and visual mockups.'}
                h1Text2={'Expert Prespective Agency Awards'}
                text2={'Lorem ipsum is placeholder text commonly used' +
                    ' in print, and publishing industries for previewing' +
                    ' layouts and visual mockups.'}
                h1Text3={'Business Prespective Global Agency Awards'}
                text3={'Lorem ipsum is placeholder text commonly used' +
                    ' in print, and publishing industries for previewing' +
                    ' layouts and visual mockups.'}
                h1Text4={'Value for Results in Global Agency Awards'}
                text4={'Lorem ipsum is placeholder text commonly used' +
                    ' in print, and publishing industries for previewing' +
                    ' layouts and visual mockups.'}
                h1Text5={'Global Experience in Agency Awards'}
                text5={'Lorem ipsum is placeholder text commonly used' +
                    ' in print, and publishing industries for previewing' +
                    ' layouts and visual mockups.'}
                backgroundColor={'#070e17'}
            />
            <BlankTextImage
                img={image.smartphone}
                h1Text={'What our clients say about our awesome solutions'}
                mainText={'To take a trivial example, which of us ever' +
                    ' undertakes laborious physical exercise, except to' +
                    ' obtain some advantage from it who do not know.' +
                    'ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ' +
                    'ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ' +
                    'Lorem ipsum is placeholder text commonly used in the' +
                    ' graphic, print, and publishing .' +
                    'ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ' +
                    'ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ' +
                    'Lorem ipsum is placeholder previewing layouts and' +
                    ' visual mockups.' +
                    'ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ' +
                    'ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ' +
                    'Lorem ipsum is placeholder text commonly used in ' +
                    'the graphic, print, and publishing industries for ' +
                    'previewing layouts and visual mockups.'
                }
                button={0}
            />
        </div>
    )
}
export default Home
