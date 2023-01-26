import {useState, useEffect} from "react";
function UlFlexImgText(props) {
    const [offsetWidth, setOffsetWidth] = useState(document.body.offsetWidth)
    const css = {
        body : {
            width: '100%',
            height: 'auto',

            paddingTop: '10px',
            paddingBottom: '10px',

            backgroundColor: props.backgroundColor,

            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        element : {
            maxWidth: '350px',
            minHeight: offsetWidth < 1470 ? '300px' : '240px',

            padding: '3px',
            paddingTop: '20px',
            paddingBottom: '10px',
            borderRadius: '20px',

            backgroundColor: '#122542',
            color: 'white',
            textAlign: 'center',
            opacity: '0.7',

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

            border: '10px solid ' + props.backgroundColor
        },
        elementImg : {
            maxHeight: '100px',
        }
    }
    window.addEventListener('resize', _=>{
        setOffsetWidth(document.body.offsetWidth)
    })




    const state = []
    for (let i = 0; i < props.count; i++) {
        state.push(i)
    }
    console.log(document.body.offsetWidth)
    return (
        <div style={css.body}>
            {state.map(state=>
              <div style={css.element}>
                <img src={props.img[state]} alt=""
                   style={css.elementImg}/>
              <h2>{eval('props.h1Text' + state.toString())}</h2>
              <text>{eval('props.h1Text' + state.toString())}</text>
            </div>
            )}
        </div>
    )
}

export default UlFlexImgText;
