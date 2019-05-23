import React, { useState, useEffect } from "react";

const Login = () => {
    const [formContents, setFormContents] = useState({
        username: "",
        password: "",
        password2: ""
    });

    const validateForm = () => {
        const { password, password2 } = formContents;

        if (password !== password2) {
            window.alert("Your password was entered incorrectly.");
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

export default Login;
