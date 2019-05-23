import React from "react";

import { withRouter } from "react-router-dom";

const Logout = props => {
    localStorage.removeItem("userToken");
    // props.history.push("/");
    window.location = "/"

    return (
        <div>
           
        </div>
    );
};

export default withRouter(Logout);
