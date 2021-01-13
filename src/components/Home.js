import React from 'react'
import Iframe from 'react-iframe'
import { withRouter } from 'react-router';

const Home = () => {

    return (


        <div className="container" >
            <h3 className="center">Realistic SkaterXL</h3>
            <div className="headerintro">
                <div className="headertext">
                    <h5 className="center head1">Welcome to my Realistic SkaterXL website. I post all of my SKATERXL edits over hear 
                    and share my process of editing <br></br></h5>
                </div>
                <div className="video">
                    <Iframe className="video1" url="https://www.youtube.com/watch?v=p8b3geySKCo"
                        frameBorder="0"
                        width="580px"
                        height="280px"
                        id="myId"
                        /*display="initial"*/
                        /*position="right"*/ />
                </div>
            </div>
            <div className="headerContent">
                <h5 className="headerContent">Applewood park</h5>
            </div>
            <div className="contentContainer">
               
                <img
                    src="./images/thumb2.png"
                    width="350px"
                    height="199.5px"
                    className="d-inline-block align-top"
                    alt="enorm"
                />

                <img
                    src="./images/thumb5.png"
                    width="350px"
                    height="200px"
                    className="d-inline-block align-top"
                    alt="enorm"
                />
            </div>
            <div className="headerContent">
                <h5 className="headerContent">Malsburry Park</h5>
            </div>
            <div className="contentContainer">
                <img
                    src="./images/thumb4.png"
                    width="350px"
                    height="200px"
                    className="d-inline-block align-top"
                    alt="enorm"
                />
                <img
                    src="./images/thumb3.png"
                    width="350px"
                    height="200px"
                    className="d-inline-block align-top"
                    alt="enorm"
                />
                <img
                    src="./images/thumb6.png"
                    width="350px"
                    height="200px"
                    className="d-inline-block align-top"
                    alt="enorm"
                />

            </div>
        </div>
    )
}
export default withRouter(Home)