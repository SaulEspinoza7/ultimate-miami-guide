import "./styles/NavBar.css";
import Logo from "./assets/mainLogo.png";
import {Link} from "react-router-dom";
import React, { useState } from "react"

const NavBar = (props) => {
    const [searchVal, setSearchVal] = useState("");

    const changeSearch = (event) => {
        setSearchVal(event.target.value)
    }

    return (
        <div>
            <nav className="navbar">
            <div class="container-fluid">
                <a class="navbar-brand"><img src={Logo} width="120px"></img></a>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder={`Search specific ${props.type}`} aria-label="Search" onChange={changeSearch}></input>
                    <Link to={`/search/${props.type}?name=${searchVal}`}><button class="btn btn-outline-success" type="submit">Search</button></Link>
                </form>
            </div>
            </nav>
        </div>
    );
}

export default NavBar;