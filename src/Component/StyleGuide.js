import React from "react";
import "./StyleGuide.css";
import logo from '../Resources/CFire.jpg'
import Navbar from './Navbar'
export default class StyleGuide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            userid: "UserName",
            picture: [],
            followerCount: ""

        };
    }


    render() {

        return (
            <html>
            <div className="styleguide-container">
                <Navbar/>
                <h1>StyleGuide</h1>
                <div className="styleguide-divider-group">
                    <p className="label">Colors</p>
                    <span className="styleguide-divider"></span>
                </div>

                <div className="styleguide-colors">
                    <div className="styleguide-color1"></div>
                    <div className="styleguide-color2"></div>
                    <div className="styleguide-color3"></div>
                    <div className="styleguide-color4"></div>


                </div>

                <div className="styleguide-description-group">
                    <div className="styleguide-description">
                        <p>Light Blue</p>
                        <p>Hex#: add8e6</p>
                        

                    </div>
                    <div className="styleguide-description">
                        <p>Light Gray</p>
                        <p>Hex#: e4e4e4</p>

                    </div>
                    <div className="styleguide-description">
                        <p>Whitesmoke</p>
                        <p>Hex#: f5f5f5</p>

                    </div>
                    <div className="styleguide-description">
                        <p>Black</p>
                        <p>Hex#: 000000</p>

                    </div>
                </div>


                <div className="styleguide-divider-group">
                    <p className="label">Fonts</p>
                    <span className="styleguide-divider"></span>
                </div>

                <div className="styleguide-fonts">
                    <div className="styleguide-font1"> Calibri
                    <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    </div>
                    <div className="styleguide-font2"> Calibri
                    <p>abcdefghijklmnopqrstuvwxyz</p>
                    </div>




                </div>

                <div className="styleguide-divider-group">
                    <p className="label">Logo</p>
                    <span className="styleguide-divider"></span>
                </div>

                <div className="styleguide-logo">
                    <div className="styleguide-logo-wrap">
                    <img className="stylegide-logo-img" src={logo}></img>

                    </div>

                </div>
            </div>
            </html>
        );


    }
}
