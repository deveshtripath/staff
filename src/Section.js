import React from 'react'
import './All.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

function Section() {
    const [show, setShow] = useState(false);

        const [radi0,setradi0]=useState({
          isAgree : false,
          choise : ""
        });
    
    
    
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    return (
        <>
          <Button variant="primary" className="fa rounded-circle bg-success mb-2 text-white" style={{height:"50px",width:"50px",background:'green',position:"absolute",bottom:"30px",right:"30px"}} onClick={handleShow}>
            +
           </Button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Staff</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="modal-body p-0 m-0">
                             <div className=" card mx-auto shadow" >
                                 <div className="card-body ">
                                     <h1 className="card-title h4"></h1>

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
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" style={{background:'green'}}>Submit</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default Section



// import React from 'react';
// import { useState } from 'react';
// import { Button } from 'react-bootstrap';
// import { Modal } from 'react-bootstrap';
// import './popup.css';

// function Popup(){

//     const [show, setShow] = useState(false);

//     const [radi0,setradi0]=useState({
//       isAgree : false,
//       choise : ""
//     });



//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     return(
//         <>
//           <Button variant="primary" className="fa fa-plus rounded-circle bg-success mb-2 text-white" style={{background:'green'}} onClick={handleShow}>
//             +
//            </Button>
//         <Modal
//           show={show}
//           onHide={handleClose}
//           backdrop="static"
//           keyboard={false}
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>Manage Extra Charges</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//                 <div className="addcharges" >
//                   <h1>
//                     Add Charges
//                   </h1>
//                   <div className="radio-t">
//                     <div className="form-check mx-auto">
//                       <input className="rad0" name="choise" value="Flat" type="radio"/>
//                       Flat
//                     </div>
//                     <div className="form-check mx-auto">
//                     <input className="rad0" name="choise" value="Percentage" type="radio"/>
//                     Percentage
//                     </div>
//                   </div>
//                   <input className="in" type="text" placeholder="Enter Name"/>
//                   <input className="in" type="text" placeholder="Enter Rate"/>
//                 </div>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//             <Button variant="primary" style={{background:'green'}}>Submit</Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//     )
// }

// export default Popup;





// <div className="modal-body p-0 m-0">
//                             <div className=" card mx-auto shadow" >
//                                 <div className="card-body ">
//                                     <h1 className="card-title h4">Add Staff</h1>

//                                     <h6 className="card-subtitle text-muted row ">

//                                         <div className="form-check ml-4 mb-2">
//                                             <input className="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
//                                             <label className="form-check-label" for="flexRadioDefault1">
//                                           Staff
//                                         </label>
//                                         </div>
//                                         <div className="form-check mx-auto">
//                                             <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
//                                             <label className="form-check-label" for="flexRadioDefault2">
//                                           Manager
//                                         </label>
//                                         </div>
//                                     </h6>

//                                     <div className="form-floating mb-3 ">
//                                         <input type="email " className="form-control border-top-0 border-left-0 border-right-0 h3" id="floatingInput " placeholder="Username"/>
//                                     </div>
//                                     <div className="form-floating ">
//                                         <input type="Password" className="form-control border-top-0 border-left-0 border-right-0 h3" id="floatingRate " placeholder="Password "/>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>