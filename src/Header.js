import React from 'react'
import './All.css';

function Header() {
    return (
        <div>
            <nav className="navbar navbar-light bg-white ">
                <div className="container-fluid bg-white">
                    <div className="card border-0">
                        <div className="card-body h3 p-1">
                            Manage Staff
                        </div>
                    </div>
                    <div className="card border-0">
                        <div className="card-body">
                            <form className="d-flex">
                                <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit"><i className="fa fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
          </div>
    )
}

export default Header
