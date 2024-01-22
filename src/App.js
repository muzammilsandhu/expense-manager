import React from "react";
import { Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "font-awesome/css/font-awesome.min.css";
import Home from "./components/Home/Home";
import Error from "./components/Error";
import ExpenseLand from "./components/ExpenseApp/ExpenseLand";
import Calender from "./components/ExpenseApp/RoutePaths/Calender";
import Report from "./components/ExpenseApp/RoutePaths/Report";
import HistoryC from "./components/ExpenseApp/RoutePaths/History";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ExpenseApp/ExpenseLand" component={ExpenseLand} />
        <Route component={Error} />
        <Route exact path="/ExpenseAppRoutePaths/Calender" component={Calender} />
        <Route exact path="/ExpenseApp/RoutePaths/Report" component={Report} />
        <Route exact path="/ExpenseApp/RoutePaths/History" component={HistoryC} />
      </Switch>
    </>
  );
};

export default App;
