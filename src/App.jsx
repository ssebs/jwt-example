import React, { Component } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";

const Header = props => {
    return (
        <header>
            <Link to="/" style={{ fontWeight: "bold" }}>
                {props.title}
            </Link>
            {" | "}
            <Link to="/about">About</Link>
            {" | "}

            {localStorage.userToken ? (
                <Link to="/logout">Logout</Link>
            ) : (
                <>
                <Link to="/login">Login</Link>
                {" | "}
                <Link to="/register">Register</Link>
                </>
            )}
        </header>
    );
};

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "JWT test"
        };
    }

    render() {
        return (
            <BrowserRouter>
                <div style={{ margin: "15px", textAlign: "center" }}>
                    <Header title={this.state.title} />
                    <div style={{ maxWidth: "768px", margin: "auto" }}>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/register" component={Register} />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
