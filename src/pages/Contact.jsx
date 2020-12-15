import React from "react";
import Header from "../component/Header/Header"

function Contact() {
    return (
        <React.Fragment>
            <Header page="Contact Me"/>
            <div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Contact Me</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Contact Me and stuff</h6>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, necessitatibus voluptates nesciunt explicabo numquam autem totam facilis modi voluptatem rem laborum nihil ratione aut perspiciatis non quisquam quaerat eveniet eum sunt vel impedit dicta assumenda? Nemo eius, placeat fugiat a eligendi blanditiis provident culpa adipisci distinctio facere ipsa, totam rem?</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact;