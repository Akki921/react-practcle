import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return( 
        <div>
            
             <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-pill my-3">
                <div className="container-fluid">
                <Link className="navbar-brand" to="/">NEWS</Link>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/business" >Business</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment" >Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/general" >General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/health" >Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/science" >Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sport" >Sport</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology" >Technology</Link>
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
       
        </div> )
    }
    
}

export default Navbar;