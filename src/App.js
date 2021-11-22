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

const App = () => {
  return (
    <Router>
      <Switch>
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
