

function UlFlexImgText(props) {
    const css = {
        body : {
            width: '100%',
            height: 'auto',

            paddingTop: '10px',
            paddingBottom: '10px',

            backgroundColor: props.backgroundColor
        },
        ul : {
            width: '100%',

            padding: '0',

            listStyleType: 'none',

            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        element : {
            maxWidth: '350px',

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
            maxHeight: '100px'
        }
    }
    const UlForm = (count) => {
        let h1Text = eval('props.h1Text' + count);
        let text = eval('props.text' + count);
        return (
            <div style={css.element}>
                <img src={props.img[count - 1]} alt=""
                style={css.elementImg}/>
                <h2>{h1Text}</h2>
                <text>{text}</text>
            </div>
        )
    }
    const countCheck = (count) => {
        if (count === 4) {
            return (
                <ul style={css.ul}>
                    <li>{UlForm(1)}</li>
                    <li>{UlForm(2)}</li>
                    <li>{UlForm(3)}</li>
                    <li>{UlForm(4)}</li>
                </ul>
            )
        } else if (count === 5) {
            return (
                <ul style={css.ul}>
                    <li>{UlForm(1)}</li>
                    <li>{UlForm(2)}</li>
                    <li>{UlForm(3)}</li>
                    <li>{UlForm(4)}</li>
                    <li>{UlForm(5)}</li>
                </ul>
            )
        } else if (count === 6) {
            return (
                <ul style={css.ul}>
                    <li>{UlForm(1)}</li>
                    <li>{UlForm(2)}</li>
                    <li>{UlForm(3)}</li>
                    <li>{UlForm(4)}</li>
                    <li>{UlForm(5)}</li>
                    <li>{UlForm(6)}</li>
                </ul>
            )
        }
    }


    return (
        <div style={css.body}>
            {countCheck(props.count)}


        </div>
    )
}

export default UlFlexImgText;
