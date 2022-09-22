import image from "../image";
function Footer(props) {
    let colorBody = '#0d1a2c'
    if (props.dark) colorBody = '#070e17'
    const css = {
        body : {
            width: '100%',
            height: '500px',

            backgroundColor: colorBody,
            color: '#d0d0d0',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        div : {
            width: '260px',
            height: '268px'
        },
        divImg : {
            maxWidth: '160px'
        },
        bodyUl : {
            width: '500px',

            paddingRight: '40px',

            listStyleType: 'none',

            display: 'flex',
            justifyContent: 'space-between'
        },
        ul : {
            padding: '0',

            listStyleType: 'none',
        },
        li : {
            cursor: 'pointer'
        },
        imgLi : {
            maxHeight: '10px',

            marginRight: '5px'
        },
        h3 : {
            cursor: 'default'
        },
        divImage : {
            width: '160px',

            display: 'flex',
            justifyContent: 'space-between'
        },
        imgDiv : {
            maxHeight: '15px',
            cursor: 'pointer'
        },
        language : {
            cursor: 'default',

            display: 'flex',
            alignItems: 'center'
        },
        languageImg1 : {
            maxHeight: '13px',

            marginRight: '5px'
        },
        languageImg2 : {
            maxWidth: '10px',

            marginLeft: '5px'
        },
    }


    return (
        <div style={css.body}>
            <div style={css.div}>
                <img src={image.logoFooter} alt="фоточка в футере"
                style={css.divImg}/><br />
                <text>Lorem ipsum is placeholder text commonly
                    used in the graphic, print, and layouts and
                    visual mockups.</text>
                <ul style={css.ul}>
                    <li>
                        <img src={image.mail} alt=""
                        style={css.imgLi}/>
                        <b>Company@gmail.com.com</b>
                    </li><br />
                    <li>
                        <img src={image.phone} alt=""
                             style={css.imgLi}/>
                        <b>Phone: (064) 332-1233</b>
                    </li><br />
                    <li>
                        <img src={image.mark} alt=""
                             style={css.imgLi}/>
                        <b>450 Wall Street, USA, New York</b>
                    </li>
                </ul>
            </div>
            <ul style={css.bodyUl}>
                <li>
                   <h3 style={css.h3}>INFORMATION</h3>
                    <ul style={css.ul}>
                        <li style={css.li}>New Collection</li><br />
                        <li style={css.li}>About Store</li><br />
                        <li style={css.li}>Contact Us</li><br />
                        <li style={css.li}>Latest News</li><br />
                        <li style={css.li}>Our Sitemap</li><br />
                        <li style={css.li}>Orders History</li>
                    </ul>
                </li>
                <li>
                    <h3 style={css.h3}>FOOTER MENU</h3>
                    <ul style={css.ul}>
                        <li style={css.li}>Instagram profile</li><br />
                        <li style={css.li}>New Collection</li><br />
                        <li style={css.li}>Contact Us</li><br />
                        <li style={css.li}>Latest News</li><br />
                        <li style={css.li}>Terms & Conditions</li><br />
                        <li style={css.li}>Purchase Theme</li>
                    </ul>
                </li>
                <li>
                    <h3 style={css.h3}>USEFUL LINKS</h3>
                    <ul style={css.ul}>
                        <li style={css.li}>Instagram profile</li><br />
                        <li style={css.li}>New Collection</li><br />
                        <li style={css.li}>Contact Us</li><br />
                        <li style={css.li}>Latest News</li><br />
                        <li style={css.li}>Terms & Conditions</li><br />
                        <li style={css.li}>Purchase Theme</li>
                    </ul>
                </li>

            </ul>
            <div style={css.div}>
                <h3 style={css.h3}>ABOUT THE STORE</h3>
                <text>Lorem ipsum is placeholder text
                    commonly used in the graphic, print,
                    and layouts and visual mockups.</text>
                <br /><br />
                <b style={css.li}>www.company.com</b>
                <br /><br />
                <div style={css.divImage}>
                    <img src={image.facebook} alt="фоточка"
                    style={css.imgDiv}/>
                    <img src={image.instagram} alt="фоточка"
                         style={css.imgDiv}/>
                    <img src={image.twitter} alt="фоточка"
                         style={css.imgDiv}/>
                    <img src={image.inImg} alt="фоточка"
                         style={css.imgDiv}/>
                    <img src={image.youtube} alt="фоточка"
                         style={css.imgDiv}/>
                </div><br />
                <div style={css.language}>
                    <img src={image.language} alt="фоточка"
                         style={css.languageImg1}/>
                    <text>English</text>
                    <img src={image.checkMark} alt="фоточка"
                         style={css.languageImg2}/>
                </div>
            </div>
        </div>
    )

}
export default Footer;
