import React from 'react'
import './All.css';

function Section() {
    return (
        <div className="modal-body p-0 m-0">
                            <div className=" card mx-auto shadow" >
                                <div className="card-body ">
                                    <h1 className="card-title h4">Add Staff</h1>

                                    <h6 className="card-subtitle text-muted row ">

                                        <div className="form-check ml-4 mb-2">
                                            <input className="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                                            <label className="form-check-label" for="flexRadioDefault1">
                                          Staff
                                        </label>
                                        </div>
                                        <div className="form-check mx-auto">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                            <label className="form-check-label" for="flexRadioDefault2">
                                          Manager
                                        </label>
                                        </div>
                                    </h6>

                                    <div className="form-floating mb-3 ">
                                        <input type="email " className="form-control border-top-0 border-left-0 border-right-0 h3" id="floatingInput " placeholder="Username"/>
                                    </div>
                                    <div className="form-floating ">
                                        <input type="Password" className="form-control border-top-0 border-left-0 border-right-0 h3" id="floatingRate " placeholder="Password "/>
                                    </div>
                                </div>
                            </div>
                        </div>
    )
}

export default Section
