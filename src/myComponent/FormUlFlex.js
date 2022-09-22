function FormUlFlex(props) {
    const css = {
        body : {
            width: '360px',
            height: '390px',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'spaceBetween'
        },
        text : {
            width: '300px',

        },
        img : {
            width: '98px',
            height: '103px'
        }
    }

    return (
       <div style={css.body}>
           <img src={props.img} alt="картинка" style={css.img}/>
           <h2 style={css.text}>{props.textHeader}</h2>
           <text style={css.text}>{props.text}</text>

       </div>
    );
}
export default FormUlFlex;
