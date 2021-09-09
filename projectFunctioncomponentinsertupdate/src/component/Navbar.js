import React from 'react'
import { Link } from 'react-router-dom'

function navbar() {
    return (
        <div>
             <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light rounded-pill my-3">
                <div className="container-fluid">
                <Link className="navbar-brand" to="/">NavBar</Link>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Post Deta</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/get" >Get Data</Link>
                            </li>
        
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class ="btn btn-outline-success" type ="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
        </div>
    )
}

export default navbar
