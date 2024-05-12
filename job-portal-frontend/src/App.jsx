import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GetAllJobComponent from './Components/GetAllJobComponent/GetAllJobComponent';
import AddJobComponent from './Components/AddJobComponent/AddJobComponent';
import EditJobComponent from './Components/EditJobComponent/EditJobComponent';
import DeleteJobComponent from './Components/DeleteJobComponent/DeleteJobComponent';

function App() {
  return (
    <Router>
            <div className="container">
              <h1>JOB PORTAL</h1>
              
            <nav className="nav-menu">
                <Link to="/" className="gray-bg">Home</Link>
                <Link to="/admin/add" className="gray-bg">Add JOB</Link>
                <Link to="/admin/edit" className="gray-bg" >Edit JOB</Link>
                <Link to="/admin/delete" className="gray-bg" >Delete JOB</Link>
            </nav>
           <Routes>
                 <Route exact path='/' element={<GetAllJobComponent/>}></Route>
                 <Route path='/admin/add' element={<AddJobComponent/>}></Route>
                 <Route path='/admin/edit' element={<EditJobComponent/>}></Route>
                 <Route path='/admin/delete' element={<DeleteJobComponent/>}></Route>
          </Routes>
          </div>
       </Router>
  );
}

export default App;
