import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from "./components/Login.js"
import PrivateRoute from "./components/PrivateRouter.js"
import FriendsList from "./components/FriendsList.js"

function App() {
  return (
    <Router>
      <div>
        <Link to="/login"> Login</Link>
        <Link to="/locked"> Locked</Link>
      </div>
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/locked" component={FriendsList}/>
    </Router>
  );
}

export default App;
