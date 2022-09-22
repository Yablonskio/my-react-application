import React from 'react'
import {Link} from 'react-router-dom'

function BlogTop(props) {
    const css = {
        body : {
            width: '100%',
            height: '50px',

            backgroundColor: '#0A121F',

            display: 'flex'
        },
        link : {
            height: '25px',

            margin: 'auto',
            marginLeft: '140px',

            color: 'white',
            textDecoration: 'none',
            fontSize: '24px'
        },
    }







    return (
        <div style={css.body}>
            <Link to='/blog' style={css.link}>
                ←Blog
            </Link>
        </div>
    )
}

export default BlogTop;
