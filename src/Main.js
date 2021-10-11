import React from 'react'
import './All.css';

function Main() {
    return (
        <div className="modal fade shadow" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">
                                <div className="card-body h3 p-1">
                                    Staff Info
                                </div>
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button>
                        </div>
                        
                        <div className="modal-footer ">
                            <button type="button " className="btn btn-secondary btn-close" data-bs-dismiss="modal" aria-label="Close">Close</button>
                            <button type="button " className="btn btn-success rounded-4 my-1 float-right "><span className="mx-0 px-0 ">Submit</span></button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Main
