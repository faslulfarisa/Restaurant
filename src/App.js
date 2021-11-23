import Home from './Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Learn from "./Learn"
import FoodCard1 from "./FoodCard1"
import CreateUser from "./CreateUser"
import Login from './Login'
import AsyncSum from './JS/AsyncSum';
import Async from './JS/Async';
import Grid from './CSS/Grid';





const App = () => {
  return (
    <Router>
      <Switch>
       <Route path="/css/grid" component={Grid}/>
       <Route path="/js/sum" component={AsyncSum}/>
       <Route path="/js/async" component={Async}/>
        <Route path="/learn/user" component={Learn}/>
        <Route path="/testing" component={FoodCard1}/>
        <Route path="/learn/login" component={Login}/>
        <Route path="/learn" component={CreateUser}/>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
    
        
    
  )
}

export default App
