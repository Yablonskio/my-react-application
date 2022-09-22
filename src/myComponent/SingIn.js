import image from "../image"
import {useState, useRef, useEffect} from 'react'

function SingIn(props) {
    const [signIn, setSignIn] = useState(false)
    const [inputError1, setInputError1] = useState('none')
    const [inputError12, setInputError12] = useState('none')
    const [inputError2, setInputError2] = useState('none')
    const [inputError22, setInputError22] = useState('none')
    const [register, setRegister] = useState(props.register)

    const errorEmail = (number) => {
        if (number === 0) {
            setInputError1('none')
            setInputError12('none')
        } else if (number === 1) {
            setInputError1('none')
            setInputError12('block')
        } else if (number === 2) {
            setInputError1('block')
            setInputError12('none')
        } else if (number === 3) {
            setInputError1('block')
            setInputError12('block')
        } else {
            console.log('ERROR!')
        }
    }
    const errorPassword = (number) => {
        if (number === 0) {
            setInputError2('none')
            setInputError22('none')
        } else if (number === 1) {
            setInputError2('none')
            setInputError22('block')
        } else if (number === 2) {
            setInputError2('block')
            setInputError22('none')
        } else {
            console.log('ERROR!')
        }
    }
    const [divInput1, setDivInput1] = useState({
        text: '',
        width: 0
    })
    const [divInput2, setDivInput2] = useState({
        text: '',
        width: 0
    })
    const [buttonCon, setButtonCon] = useState(false)
    const buttonConMeneger = useRef(true)
    const input1 = useRef(null)
    const inputManager1 = useRef(0)
    const input2 = useRef(null)
    const inputManager2 = useRef(0)

    const clickButton = () => {
        if (input1.current.value !== '') {
            if (input2.current.value.length < 8) {
                console.log('ffffff')
                setCssButton(css.buttonError)
                setButtonCon(false)
            } else if (inputError12 === 'block') {
                console.log('fsdfdkfdkf')
                if (!/[@]/.test(input1.current.value)) {
                    setCssButton(css.buttonError)
                    setButtonCon(false)
                } else if (!/[.]/.test(input1.current.value.split('@')[1])) {
                    setCssButton(css.buttonError)
                    setButtonCon(false)
                } else if (!/[@]/.test(input1.current.value.split('@')[1])) {
                    setCssButton(css.buttonError)
                    setButtonCon(false)
                }
            } else {
                setCssButton(css.buttonActive)
                setButtonCon(true)
            }
        } else {
            setCssButton(css.buttonError)
            setButtonCon(false)
        }
    }

    const focusOnInput = (number) => {
        if (number === 1) {
            setCssInput1(css.textAreaClick)
        } else if (number === 2) {
            setCssInput2(css.inputClick)
        }
    }
    const unFocusOnInput = (number) => {
        if (number === 1) {
            let numberError = 1
            if (Number(inputManager1.current.getBoundingClientRect().width) >= 400 &&
                Number(inputManager1.current.getBoundingClientRect().width) <= 760) {
                numberError = 3
            }
            setCssInput1(css.textArea)
            if (input1.current.value !== '') {
                if (!/[@]/.test(input1.current.value)) {
                    errorEmail(numberError)
                } else if (!/[.]/.test(input1.current.value.split('@')[1])) {
                    errorEmail(numberError)
                }
            } else {
                errorEmail(numberError)
            }
        } else if (number === 2) {
            setCssInput2(css.input)
            if (input2.current.value.length < 8) {
                errorPassword(1)
            } else {
                errorPassword(0)
            }
        }
    }
    const confirmButtonHTML = () => {
        if (buttonCon && buttonConMeneger.current) {
            buttonConMeneger.current = false
            setTimeout(() => {
                buttonConMeneger.current = true
                setButtonCon(false)
                setSignIn(true)
            },1500)
            return <img src={image.loading} style={css.image}/>
        } else if (buttonCon) {
            return <img src={image.loading} style={css.image}/>
        }
    }
    const changeWidthInput = (e, number) => {
        if (number === 1) {
            setDivInput1({...divInput1, text: e.target.value})
            input1.current.value = input1.current.value.replace(/\s/g, "")
        } else if (number === 2) {
            setDivInput2({...divInput2, text: e.target.value})
            input2.current.value = input2.current.value.replace(/\s/g, "")
        }
    }


    useEffect(() => {
        if (!signIn) {
            let a = 1
            setDivInput1( {...divInput1, width: inputManager1.current.getBoundingClientRect().width})
            if (Number(inputManager1.current.getBoundingClientRect().width) >= 290 &&
                Number(inputManager1.current.getBoundingClientRect().width) <= 400) {
                input1.current.style.width = inputManager1.current.getBoundingClientRect().width + 'px'
                input1.current.style.height = '30px'
             errorEmail(0)
            } else if (Number(inputManager1.current.getBoundingClientRect().width) <= 290 &&
                Number(inputManager1.current.getBoundingClientRect().width) <= 400) {
                input1.current.style.width = '290px'
                input1.current.style.height = '30px'
                errorEmail(0)
            } else if (Number(inputManager1.current.getBoundingClientRect().width) >= 400 &&
                Number(inputManager1.current.getBoundingClientRect().width) <= 760) {
                input1.current.style.height = '50px'
                errorEmail(2)
                a = 3
            } else if (Number(inputManager1.current.getBoundingClientRect().width) >= 760) {
                input1.current.value = input1.current.value
                    .substr(0, input1.current.value.length - 2)
                errorEmail(2)
                a = 3
            }
            let b
            b = a === 1 ? b = 0 : b = 2
            if (/[!#$%^&*()<>,/{}/~"№:;'|]/.test(input1.current.value)) {
                errorEmail(a)
            } else {
                let input1Split = input1.current.value.split('@')[1]
                if (input1.current.value.split('@')[2] !== undefined) {
                    errorEmail(a)
                } else if (input1Split?.split('.')[2] !== undefined) {
                    errorEmail(a)
                } else {
                    errorEmail(b)
                }
            }
        }
    }, [divInput1.text])
    useEffect(() => {
        if (!signIn) {
            setDivInput2({...divInput2, width: inputManager2.current.getBoundingClientRect().width})
            if (Number(inputManager2.current.getBoundingClientRect().width) >= 290 &&
                Number(inputManager2.current.getBoundingClientRect().width) <= 400) {
                input2.current.style.width = inputManager2.current.getBoundingClientRect().width + 'px'
                errorPassword(2)
            } else if (Number(inputManager2.current.getBoundingClientRect().width) <= 290 &&
                Number(inputManager2.current.getBoundingClientRect().width) <= 400) {
                errorPassword(0)
                input2.current.style.width = '290px'
            } else if (Number(inputManager2.current.getBoundingClientRect().width) >= 400) {
                input2.current.value = input2.current.value
                    .substr(0, input2.current.value.length - 2)
            }
        }

    }, [divInput2.text])


    const css = {
        body : {
            width: '400px',
            height: register ? '550px' : '400px',

            backgroundColor: '#0d1a2c',
            color: 'white',
            fontSize: '20px',
            fontFamily: 'Arial',
            borderRadius: '5px',

            margin: 'auto',
            marginTop: '50px',
            marginBottom: '100px',

            paddingLeft: '50px',
            paddingRight: '50px',
            paddingBottom: '30px',

            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        },
        h1 : {
            marginTop: '30px',
            marginBottom: '0px'
        },
        text : {
            marginTop: '20px'
        },
        textArea : {
            width: '290px',
            height: '30px',

            backgroundColor: '#14325b',
            color: 'white',
            fontSize: '20px',
            fontFamily: 'Arial',
            outline: 'none',
            borderRadius: '5px',
            resize: 'none',

            marginTop: '5px',

            padding: '0',
            paddingTop: '5px',
            paddingLeft: '5px',
            paddingRight: '5px',
            border: '0'
        },
        textAreaClick : {
            width: '290px',
            height: '30px',

            backgroundColor: '#122641',
            color: 'white',
            fontSize: '20px',
            fontFamily: 'Arial',
            outline: 'none',
            resize: 'none',

            overflow: 'hidden',
            whiteSpace: 'normal',
            borderRadius: '5px',

            marginTop: '5px',

            padding: '0',
            paddingTop: '5px',
            paddingLeft: '5px',
            paddingRight: '5px',
            border: '0',
            boxShadow: '0 0 0 2px #fff'
        },
        input : {
            width: '290px',
            height: '30px',

            backgroundColor: '#14325b',
            color: 'white',
            fontSize: '20px',
            fontFamily: 'Arial',
            outline: 'none',
            borderRadius: '5px',
            resize: 'none',

            marginTop: '5px',


            border: '0'
        },
        inputClick : {
            width: '290px',
            height: '30px',

            backgroundColor: '#122641',
            color: 'white',
            fontSize: '20px',
            fontFamily: 'Arial',
            outline: 'none',
            resize: 'none',

            overflow: 'hidden',
            whiteSpace: 'normal',
            borderRadius: '5px',

            marginTop: '5px',

            border: '0',
            boxShadow: '0 0 0 2px #fff'
        },
        inputManager : {
            minWidth: '295px',
            maxWidth: '400px',

            fontSize: '20px',
            visibility: 'hidden',
            whiteSpace: 'no-wrap'
        },
        inputManagerManager : {
            width: '400px',
            height: '0',

            display: 'inline',
            visibility: 'hidden'
        },
        divButton : {
            display: 'flex',
            alignItems: 'center',
        },
        button : {
            width: '120px',
            height: '40px',

            backgroundColor: '#14325b',
            fontSize: '24px',
            color: 'white',
            borderRadius: '5px',

            border: '0'
        },
        buttonActive : {
            width: '120px',
            height: '40px',

            backgroundColor: '#122a4b',
            color: 'white',
            fontSize: '24px',
            borderRadius: '5px',

            border: '0'
        },
        buttonError : {
            width: '120px',
            height: '40px',

            backgroundColor: '#122a4b',
            color: 'white',
            fontSize: '24px',
            borderRadius: '5px',

            boxShadow: '0 0 0 2px #b71d1d',
            border: '0'
        },
        image : {
            maxWidth: '25px',

            marginLeft: '10px'
        },
        error1 : {
            width: '400px',
            height: '15px',



            color: '#cc952a',
            fontSize: '16px',
            display: inputError1
        },
        error12 : {
            width: '400px',
            height: '15px',



            color: '#ad3131',
            fontSize: '16px',
            display: inputError12
        },
        error2 : {
            width: '400px',
            height: '15px',



            color: '#68c238',
            fontSize: '16px',
            display: inputError2
        },
        error22 : {
            width: '400px',
            height: '15px',



            color: '#ad3131',
            fontSize: '16px',
            display: inputError22
        },
        textWel : {
            marginBottom: '290px'
        },
    }

    const [cssInput1, setCssInput1] = useState(css.textArea)
    const [cssInput2, setCssInput2] = useState(css.input)
    const [cssButton, setCssButton] = useState(css.button)


    if (signIn) {
        return (
            <div style={css.body}>
                <h1 style={css.h1}>Sign In</h1>
                <text style={css.textWel}>Welcome!</text>
            </div>
        )
    } else {
        return (
            <div style={css.body}>
                <h1 style={css.h1}>Sign In</h1>


                <text style={css.text}>E-mail:</text>

                <textarea style={cssInput1}
                          ref={input1}
                          onFocus={() => focusOnInput(1)}
                          onBlur={() => unFocusOnInput(1)}
                          onChange={(e) => changeWidthInput(e, 1)}
                />
                <div style={css.error1}>E-mail is too big</div>
                <div style={css.error12}>Invalid E-mail</div>
                <div style={css.inputManagerManager}>
                    <text ref={inputManager1} style={css.inputManager}
                    >{divInput1.text}</text>
                </div>


                <text style={css.text}>Password:</text>

                <input style={cssInput2}
                       ref={input2}
                       onFocus={() => focusOnInput(2)}
                       onBlur={() => unFocusOnInput(2)}
                       onChange={(e) => changeWidthInput(e, 2)}
                />
                <div style={css.error2}>That's very good password!</div>
                <div style={css.error22}>That's password is too small!</div>
                <div style={css.inputManagerManager}>
                    <text ref={inputManager2} style={css.inputManager}
                    >{divInput2.text}</text>
                </div>


                <div style={css.divButton}>
                    <button style={cssButton}
                            onMouseUp={() => {
                                setCssButton(css.button)
                            }}
                            onMouseDown={clickButton}
                    >Confirm
                    </button>
                    {confirmButtonHTML()}
                </div>
            </div>
        )
    }
}
export default SingIn
