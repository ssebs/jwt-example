import React, { useState } from "react";

import { withRouter } from "react-router-dom";

const Login = props => {
    const [formContents, setFormContents] = useState({
        username: "",
        password: "",
        password2: ""
    });

    const validateForm = () => {
        const { password, password2 } = formContents;

        if (password !== password2) {
            window.alert("Make sure your passwords matches.");
            return false;
        }
        return true;
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        console.log(formContents);
        fetch("http://127.0.0.1:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: formContents.username,
                password: formContents.password
            })
        })
            .then(resp => resp.json())
            .then(resp => {
                if (!resp.Message === "Bad password") {
                    console.error("Bad password");
                    window.alert("Bad password");
                } else {
                    console.log(resp);
                    localStorage.setItem(
                        "userToken",
                        JSON.stringify(resp.Token)
                    );
                    // props.history.push("/")
                    // window.location.reload()
                    window.location = "/";
                }
            })
            .catch(err => console.error(err));
    };

    const handleChange = e => {
        const value = e.target.value;
        setFormContents({ ...formContents, [e.target.name]: value });
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input type="text" name="username" onChange={handleChange} />
                <br />

                <label>Password: </label>
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                />
                <br />

                <label>Confirm your Password: </label>
                <input
                    type="password"
                    name="password2"
                    onChange={handleChange}
                />
                <br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default withRouter(Login);
