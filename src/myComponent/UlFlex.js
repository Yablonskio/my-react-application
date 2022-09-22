function UlFlex(props) {
    let heightImage
    !props.heightImage ? heightImage = '58px' :
        heightImage = props.heightImage
    const css = {
        body : {
            width: '100%',
            height: 'auto',

            backgroundColor: props.backgroundColor,

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'

        },
        ul : {
            width: '70%',
            height: '112px',

            margin: '0',

            listStyleType: 'none',

            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
        },
        img : {
            height: heightImage
        }



    }


    if (props.count === 4) {
        return (
            <div style={css.body}>
                <ul style={css.ul}>
                    <li><img src={props.img[0]} alt="имаджэ" style={css.img} /></li>
                    <li><img src={props.img[1]} alt="имаджэ" style={css.img} /></li>
                    <li><img src={props.img[2]} alt="имаджэ" style={css.img} /></li>
                    <li><img src={props.img[3]} alt="имаджэ" style={css.img} /></li>
                </ul>
            </div>
        )
    } else if (props.count === 5) {
        return (
            <div style={css.body}>
                <ul style={css.ul}>
                    <li><img src={props.img[0]} alt="имаджэ" style={css.img} /></li>
                    <li><img src={props.img[1]} alt="имаджэ" style={css.img} /></li>
                    <li><img src={props.img[2]} alt="имаджэ" style={css.img} /></li>
                    <li><img src={props.img[3]} alt="имаджэ" style={css.img} /></li>
                    <li><img src={props.img[4]} alt="имаджэ" style={css.img} /></li>
                </ul>


            </div>
        )
    } else if (props.count === 6) {
        return (
            <div style={css.body}>
                <ul>
                    <li><img src={props.img[0]} alt="имаджэ" style={css.img} /></li>
                    <li><img src={props.img[1]} alt="имаджэ" style={css.img} /></li>
                    <li><img src={props.img[2]} alt="имаджэ" style={css.img} /></li>
                    <li><img src={props.img[3]} alt="имаджэ" style={css.img} /></li>
                    <li><img src={props.img[4]} alt="имаджэ" style={css.img} /></li>
                    <li><img src={props.img[5]} alt="имаджэ" style={css.img} /></li>
                </ul>


            </div>
        )
    } else {
        console.log('ERROR IN UlFlex.js')
    }


}
export default UlFlex;
