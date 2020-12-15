import React from "react";
import Header from "../component/Header/Header"

function Contact() {
    return (
        <React.Fragment>
            <Header page="Contact Me" />
            <div className="contactCard">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Contact Me</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Contact Me and stuff</h6>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, necessitatibus voluptates nesciunt explicabo numquam autem totam facilis modi voluptatem rem laborum nihil ratione aut perspiciatis non quisquam quaerat eveniet eum sunt vel impedit dicta assumenda? Nemo eius, placeat fugiat a eligendi blanditiis provident culpa adipisci distinctio facere ipsa, totam rem?</p>

                        <div className="row">
                            <div className="column">
                                <a href="mailto:zach.lafleur95@gmail.com?subject=Contact Me" ><img src="/images/iconmonstr-email-11-48.png" alt="email icon" className="icon" /></a>
                            </div>
                            <div className="column">
                                <a href="https://github.com/MrCartree" ><img src="/images/iconmonstr-github-5-48.png" alt="github icon" className="icon github" /></a>
                            </div>
                            <div className="column">
                                <a href="https://www.linkedin.com/in/zacharie-lafleur-67b4121b2/" ><img src="/images/iconmonstr-linkedin-5-48.png" alt="email icon" className="icon" /></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact;