import image from "../image";
function BlogFlex(props) {
    const css = {
        body : {
            width: '70%',
            height: '100px',

            marginLeft: '15%',
            marginRight: '15%',
            marginTop: '20px',
            marginBottom: '20px',

            backgroundColor: '#FFFFFF',
            borderRadius: '15px',
            cursor: 'pointer',

            display: 'flex',
            alignItems: 'center'
        },
        img : {
            maxWidth: '80px',
            minWidth: '50px',
            maxHeight: '80px',

            marginRight: '60px',
            marginLeft: '30px'
        },
        text : {
            maxWidth: '900px',

            color: 'black',
            fontSize: '24px',
        }


    }
    let img = (img) => {
        if (img) {
            return<img src={img} alt="имадже" style={css.img}/>
        }
        return true
    }
    return (
        <div style={css.body}>
            {img(props.img)}
            <text style={css.text}>{props.text}</text>
        </div>
    )
}
export default BlogFlex
