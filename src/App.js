import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import LoginPage from './pages/LoginPage';


function App() {
  return (
    
    <div className="App" style = {{height:"100vh"}}>
      <ToastContainer />
      <Router basename={window.location.pathname || ''}>
        <Routes>
          <Route exact path='/' element={< LoginPage />}></Route>
          <Route exact path='/home' element={< Home />}></Route>
          <Route exact path='/profile' element={< Profile />}></Route>
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
