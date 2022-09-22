

function BlankTextImage(props) {
    let colorBody = '#0d1a2c';let widthText = '600px';
    let alignText = 'flexStart'
    if (props.dark) colorBody = '#070e17'
    if (!props.img) {widthText = '100%'; alignText = 'center'}
    let css = {
        body : {
            width: '100%',

            backgroundColor: colorBody,
            color: 'white',

            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
        },
        // TEXTS
        divText : {
            width: widthText,

            marginBottom: '60px',

            display: 'flex',
            flexDirection: 'column',
            alignItems: alignText
        },
        topText : {
            textTransform: 'uppercase',
            color: '#3A68B8',
            fontSize: '18px',
            lineHeight: '160%'
        },
        h1Text : {
            maxWidth: '330px'
        },
        mainText : {
            maxWidth: '460px',

            color: '#FFFFFF',
            opacity: '0.7'
        },
        // ^ TEXTS
        // BUTTONS
        divButtons : {
            width: '360px',

            display: 'flex',
            justifyContent: 'space-between'
        },
        button : {
            padding: '10px',
            paddingRight: '20px',
            paddingLeft: '20px',

            marginTop: '40px',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            backgroundColor: '#3A68B8',
            color: 'white',
            fontSize: '20px',
            lineHeight: '27px',

            border: 'none',
            borderRadius: '5px'
        },
        // ^ BUTTONS
        // IMAGE
        divImg : {
            width: '650px',
            height: '650px',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        img : {
            maxWidth: '650px',
            maxHeight: '650px'
        },
        playIcon : {
            height: '26px',

            marginRight: '10px'
        }
        // ^ IMAGE

    }
    let imgcheck = (img) => {
        if (img) {
            return <img src={img} alt="имадже в кнопке" style={css.playIcon}/>
        }
        return true
    }
    let img = (img) => {
        if (img) {
            return <div style={css.divImg}>
                <img src={img} alt="имадже" style={css.img}/>
            </div>
        }
        return true
    }
    let buttoncheck = (button) => {
        if (button === 0) {
            return true
        } else if (button === 1) {
            return (<div style={css.divButtons}>
                <button style={css.button}>
                    <text>{imgcheck(props.imgButton1)}{props.button1}</text>
                </button>
            </div>)
        } else if (button === 2) {
            return (<div style={css.divButtons}>
                <button style={css.button}>
                    <text>{imgcheck(props.imgButton1)}{props.button1}</text>
                </button>
                <button style={css.button}>
                    <text>{imgcheck(props.imgButton2)}{props.button2}</text>
                </button>
            </div>)
        } else {
            console.log('CATCH A ERROR')
            return false
        }
    }
    if (props.reverse) {
        return (
            <div style={css.body}>
                {img(props.img)}
                <div style={css.divText}>
                    <h3 style={css.topText}>{props.topText}</h3>
                    <h1 style={css.h1Text}>{props.h1Text}</h1>
                    <text style={css.mainText}>{props.mainText}</text>
                    {buttoncheck(props.button)}
                </div>
            </div>
        )
    } else {
        return (
            <div style={css.body}>
                <div style={css.divText}>
                    <h3 style={css.topText}>{props.topText}</h3>
                    <h1 style={css.h1Text}>{props.h1Text}</h1>
                    <text style={css.mainText}>{props.mainText}</text>
                    {buttoncheck(props.button)}
                </div>
                {img(props.img)}
            </div>
        )
    }
}
export default BlankTextImage;
