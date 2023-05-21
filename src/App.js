import { BrowserRouter as Router,Routes, Route, HashRouter} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import LoginPage from './pages/LoginPage';
import Medicine from './pages/Medicine';
import {basePath} from './config/session';


function App() {
  return (
    
    <div className="App" style = {{height:"100vh"}}>
      <ToastContainer />
      <HashRouter>
        <Routes>
          <Route exact path={'/'} element={< LoginPage />}></Route>
          <Route path={'/home'} element={< Home />}></Route>
          <Route path={'/profile'} element={< Profile />}></Route>
          <Route path={'/medicine'} element={< Medicine />}></Route>
        </Routes>
      </HashRouter>

      
    </div>
  );
}

export default App;
