import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import LoginPage from './pages/LoginPage';
import basePath from './config/session';


function App() {
  return (
    
    <div className="App" style = {{height:"100vh"}}>
      <ToastContainer />
      <Router basename={basePath}>
        <Routes>
          <Route exact path={basePath+'/'} element={< LoginPage />}></Route>
          <Route exact path={basePath+'/home'} element={< Home />}></Route>
          <Route exact path={basePath+'/profile'} element={< Profile />}></Route>
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
