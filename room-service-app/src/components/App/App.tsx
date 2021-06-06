import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RoomManagmentApp from "../RoomManagmentApp";
import RoomsDetail from "../RoomManagmentApp/RoomsDetail";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <RoomManagmentApp />
        </Route>
        <Route path="/detail:id" exact>
          <RoomsDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
