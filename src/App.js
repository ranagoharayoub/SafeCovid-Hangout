import './App.css';
import React, {useState} from 'react';
import HomePage from './Pages/HomePage';
import RiskAsses from './Pages/RiskAsses';
import JoinGroup from './Pages/JoinGroup';
import CreateGroup from './Pages/CreateGroup';
import RiskQuest from './Components/RiskQuest';
import SignUp from './Components/SignUp';
import OrganizerPage from './Pages/OrganizerPage';
import Activity from './Pages/Activity';
import {ConfidentialContext} from './Context/Context';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  const [value, setValue] = useState({userId: null, token: null, userRank: null, rank: 'Not Assigned'});

  return (
    <ConfidentialContext.Provider value={ {value , setValue} }>
    <div className="App">
      <Router>
        <Switch>
        <Route path='/' exact component ={HomePage}></Route>
        <Route path='/signup' exact component ={SignUp}></Route>
        <Route path ='/risk' component={RiskAsses}></Route>
        <Route path ='/group' component={JoinGroup}></Route>
        <Route path ='/created-groups' component={CreateGroup}></Route>
        <Route path ='/create-group'>
          <RiskQuest forCreateGroup />
        </Route>
        <Route path = '/organize' component={OrganizerPage}></Route>
        <Route path = '/activity' component={Activity}></Route>
        </Switch>
     </Router>
    </div>
    </ConfidentialContext.Provider>
  );
}

export default App;
