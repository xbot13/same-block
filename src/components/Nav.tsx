import React from 'react'

import { BrowserRouter as Router, Link, Route } from "react-router-dom";
interface Props {

}

const Nav = (props: Props) => {
    return (
        <div>
            <Link to={"/"}>Home</Link>
            <Link to={"/support"}>Support</Link>
            <Link to={"/privacy"}>Privacy</Link>
        </div>
    )
}

export default Nav
