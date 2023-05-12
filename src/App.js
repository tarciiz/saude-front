import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import LoginPage from './pages/LoginPage';


function App() {
    const basename = window.location.pathname || '';
  return (

    <div className="App" style = {{height:"100vh"}}>
      <ToastContainer />
      <Router basename={basename}>
        <Routes>
          <Route exact path={basename+'/'} element={< LoginPage />}></Route>
          <Route exact path={basename+'/home'} element={< Home />}></Route>
          <Route exact path={basename+'/profile'} element={< Profile />}></Route>
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
