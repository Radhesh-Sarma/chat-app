import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import UpdateProfile from './components/UpdateProfile';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import Home from './components/Home';
import Navbar from './components/NavigationBar';
import NotFound from './components/NotFound';
function App() {
  return (
    <div className="App">
       <Navbar/>
      <Router>
        <Switch>
          <Route exact path = '/' component = {Home}/>
          <Route path = '/home' component = {Home}/>
          <Route path = '/dashboard' component = {Dashboard}/>
          <Route path = '/login' component = {Login}/>
          <Route path = '/updateProfile' component = {UpdateProfile}/>
          <Route path = '/signup' component = {Signup}/>
          <Route path = '/forgotPassword' component = {ForgotPassword}/>
          <Route component = {NotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
