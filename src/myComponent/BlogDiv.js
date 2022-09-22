import React, {useEffect, useRef, useState} from 'react';




/*
    PROPS


    1 type
      - text
      - photoRight
      - photoLeft
      - photo


    2 text
      - your text

    3 image
      - your image

    4 cloud
      - true
      - false
    5 img
      - your image
    6 photoBig
      - true
      - false


 */
function BlogDiv(props) {
    const css = {
        body : {
            width: props.cloud ? '70%' : 'calc(100% - 60px)',
            height: 'auto',

            marginRight: props.cloud ? '15%' : '0',
            marginLeft: props.cloud ? '15%' : '0',
            marginTop: props.cloud ? '50px' : '0',
            marginBottom: props.cloud ? '50px' : '0',

            padding: '30px',

            backgroundColor: '#0d1a2c',
            color: 'white',
            fontSize: '16px',


            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',

            borderRadius: props.cloud ? '15px' : '0'
        },
        text : {
            width: props.cloud ? '80%' : '60%',

            paddingLeft: props.type === 'text' ? props.cloud ? '10%' : '20%' : '0',

            wordWrap: 'break-word'
        },
        image : {
            maxWidth: props.cloud ? '20%' : '35%'
        },
        textImage : {
            width: props.cloud ? '80%' : '60%',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            borderRadius: '20px'
        },
        textImageBig : {
            width: props.cloud ? '60%' : '40%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            borderRadius: '20px'
        },
        imageBig : {
            maxWidth: props.cloud ? '40%' : '60%'
        },
    }




    if (props.type === 'text') {
        return (
            <div style={css.body}>
                <text style={css.text}>{props.text}</text>
            </div>
        )
    } else if (props.type === 'photoRight') {
        let cssTextImage = css.textImage
        let cssImage = css.image
        if (props.photoBig) {
            cssTextImage = css.textImageBig
            cssImage = css.imageBig
        }
        return (
            <div style={css.body}>
                <div style={cssTextImage}>
                    <text style={css.text}>{props.text}</text>
                </div>
                <img src={props.img} alt="фоточка" style={cssImage}/>
            </div>
        )
    } else if (props.type === 'photoLeft') {
        let cssTextImage = css.textImage
        let cssImage = css.image
        if (props.photoBig) {
            cssTextImage = css.textImageBig
            cssImage = css.imageBig
        }
        return (
            <div style={css.body}>
                <img src={props.img} alt="фоточка" style={cssImage}/>
                <div style={cssTextImage}>
                    <text style={css.text}>{props.text}</text>
                </div>
            </div>
        )
    } else if (props.type === 'photo') {
        let cssImage = css.image
        if (props.photoBig) {
            cssImage = css.imageBig
        }
        css.body.justifyContent = 'center'
        return (
            <div style={css.body}>
                <img src={props.img} alt="фоточка" style={cssImage}/>
            </div>
        )
    } else {
        console.log('ERROR')
    }
}

export default BlogDiv
