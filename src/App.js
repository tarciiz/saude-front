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
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path={process.env.PUBLIC_URL+'/'} element={< LoginPage />}></Route>
          <Route exact path={process.env.PUBLIC_URL+'/home'} element={< Home />}></Route>
          <Route exact path={process.env.PUBLIC_URL+'/profile'} element={< Profile />}></Route>
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
