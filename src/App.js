import './All.css';
import Header from './Header';
import Main from './Main';
import Section from './Section';
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  
  return (
    
    <div className="container-fluid p-50">
     {/* style=" width: 24rem; " */}
        <Header/>
          
            <div className="px-4 my-4">
                <div className="card shadow">
                    <div className="card-body pt-3 pb-2 h6 ">

                        Daljeetsingh86 <span className="text-success">( Staff )</span><i className="fa fa-trash float-right "></i></div>

                    <div className="card-body pb-3 pt-2 h6 ">
                        nqba121212
                        <i className="fa fa-pencil float-right "></i>

                    </div>
                </div>


            </div>
            <div className="p-4">
                    <Section/>
                <div type="button" className="btn btn-white btn-outline-white  float-right m-0 p-0 rounded-circle" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className="fa fa-plus rounded-circle bg-success p-3 text-white"></i></div>
            </div>
  
            <Main/>

        </div>
        
  );
}

export default App;
