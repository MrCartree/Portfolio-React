import React from "react";
import Header from "../component/Header/Header"
import Mail from "../assets/images/iconmonstr-email-11-48.png"
import GitHub from "../assets/images/iconmonstr-github-5-48.png"
import LinkedIn from "../assets/images/iconmonstr-linkedin-5-48.png"

function Contact() {
    return (
        <React.Fragment>
            <Header page="Contact Me" />
            <div className="contactCard">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Lets Get in Touch</h5>
                        <p className="card-text">You can feel free to contact me here on this page! You can find my Email, GitHub account, and Linkedin profile by clicking one of the images below! I am always looking for new ideas and new projects to complete.</p>

                        <div className="row">
                            <div className="column">
                                <a href="mailto:zach.lafleur95@gmail.com?subject=Contact Me" ><img src={Mail} alt="email icon" className="icon" /></a>
                            </div>
                            <div className="column">
                                <a href="https://github.com/MrCartree" ><img src={GitHub} alt="github icon" className="icon github" /></a>
                            </div>
                            <div className="column">
                                <a href="https://www.linkedin.com/in/zacharie-lafleur-67b4121b2/" ><img src={LinkedIn} alt="email icon" className="icon" /></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact;