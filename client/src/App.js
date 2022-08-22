import Home from "./components/pages/home/Home";
import Profile from "./components/pages/profile/Profile";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom'
function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" exect element={<Home/>}/>
          <Route path="/login" exect element={<Login/>}/>
          <Route path="/register" exect element={<Register/>}/>
          <Route path="/profile/:username" exect element={<Profile/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
