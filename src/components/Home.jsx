import React, { useState, useEffect } from "react";

import Protecc from "./Protecc";

const Home = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {}, []);

    return (
        <div>
            <h1>Home</h1>
            <p>
                Proident amet culpa magna ut aliqua ea anim elit. Esse deserunt
                amet consequat proident magna do ad elit aliquip velit aliquip
                incididunt. Exercitation esse nulla ullamco nostrud et Lorem id
                deserunt fugiat laboris occaecat duis eu fugiat. Nulla elit et
                proident fugiat duis cillum esse id elit qui. Cupidatat ipsum
                commodo nisi sit Lorem tempor commodo dolore.
            </p>
            <hr/>
            {localStorage.userToken ? <Protecc /> : (
                <div>
                    <p>If you want to see some secret stuff, just sign in!</p>
                </div>
            )}
        </div>
    );
};

export default Home;
