import './App.css';
import HomePage from './Pages/HomePage';
import RiskAsses from './Pages/RiskAsses';
import JoinGroup from './Pages/JoinGroup';
import OrganizerPage from './Pages/OrganizerPage';
import Activity from './Pages/Activity';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path='/' exact component ={HomePage}></Route>
        <Route path ='/risk' component={RiskAsses}></Route>
        <Route path ='/group' component={JoinGroup}></Route>
        <Route path = '/organize' component={OrganizerPage}></Route>
        <Route path = '/activity' component={Activity}></Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
