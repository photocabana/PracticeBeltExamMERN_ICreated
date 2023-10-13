import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <Link to={"/"}>Home</Link>
            <br />
            <Link to={"/new"}>Add User</Link>
        </div>
    )
}

export default Nav
