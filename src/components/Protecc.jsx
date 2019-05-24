import React, { useEffect, useState } from "react";

import jwt_decode from "jwt-decode";

const Protecc = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (localStorage.userToken) {
            const tmp = jwt_decode(localStorage.userToken);
            const userName = tmp.identity;
            console.log(userName);
            fetch(`http://localhost:5002/users/${userName}`, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(
                        localStorage.userToken
                    )}`
                }
            })
                .then(resp => resp.json())
                .then(resp => {
                    console.log(resp);
                    setUser(resp);
                });
        }
    }, []);

    return (
        <div>
            <h2>This component should be totally protected.</h2>
            <p> aka you should only see this if you're logged in.</p>
            {user ? (
                <table style={{ margin: "auto", textAlign: "center" }}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>username</th>
                            <th>password</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Protecc;
