
import './App.scss';
import AppContainer from './components/AppContainer/AppContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/AuthPage/Login';
import Register from './components/AuthPage/Register';
function App() {
  return (    
      <Router>          
          <div>
            <Switch>
              <Route exact path="/">
                <AppContainer></AppContainer>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/register">
                <Register></Register>
              </Route>
            </Switch>
          </div>
      </Router>
  );
}

export default App;
