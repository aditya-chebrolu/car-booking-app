import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter,Route, Switch, Redirect} from 'react-router-dom'
import Login from "../src/components/Auth/Login/Login"
import UserSignup from "../src/components/Auth/Signup/UserSignup"
import AdminSignup from "../src/components/Auth/Signup/AdminSignup"
import UserUI from './components/UserSide/UserUI'
import AdminUI from './components/AdminSide/AdminUI'
import SuperAdminLogin from './components/Auth/Login/SuperAdminLogin';
import SuperAdminUI from './components/SuperAdmin/SuperAdminUI';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/superadmin/login' component={SuperAdminLogin}/>
          <Route exact path='/user/signup' component={UserSignup}/>
          <Route exact path='/admin/signup' component={AdminSignup}/>
          <Route path='/user' component={UserUI}/>
          <Route path='/superadmin' component={SuperAdminUI}/>
          <Route path='/admin' component={AdminUI}/>
          <Redirect to="/"/>
        </Switch>
      </BrowserRouter> 
    </div>
  );
}

export default App;
