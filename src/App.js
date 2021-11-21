import Home from './Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Learn from "./Learn"
import FoodCard1 from "./FoodCard1"
import CreateUser from "./CreateUser"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/learn/:user" component={Learn}/>
        <Route path="/testing" component={FoodCard1}/>
        <Route path="/learn" component={CreateUser}/>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
    
        
    
  )
}

export default App
