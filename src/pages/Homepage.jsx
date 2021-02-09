import React from "react";
import Header from "../component/Header/Header"
import ProfilePic from "../assets/images/Me.jpg"

function Homepage() {
    return (
        <React.Fragment>
            <Header page="About Me" />
            <div className="aboutPage" >
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Zach LaFleur</h5>
                        <p className="card-text">Hello, my name is Zach LaFleur and I am a web developer. I have made it through a 6 month bootcamp for computer programming and web development at the University of Utah run by Trilogy. My skills include: HTML, CSS, JS, NODEJS, React and so much more.</p>
                        <p className="card-text">A bit about me, I like to cook things from scratch for my friends and family, I like to think I am a beer enthusiast and always try to pair the best drink with the meal, but mainly I just love creation. The idea and ability to create things from either my own mind or that of an employer is really what drives me to do what I do.</p>
                        <div className="myImageContainer" >
                            <img className="myImage" src={ProfilePic} alt="Zach LaFleur" />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Homepage;