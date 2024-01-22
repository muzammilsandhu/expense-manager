import React, { useState } from "react";
import {
  Link,
  Route,
  Switch,
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";
import Calender from "../RoutePaths/Calender";
import Report from "../RoutePaths/Report";
import History from "../RoutePaths/History";
import Transcations from "../RoutePaths/Transactions/Transactions";
import Analytics from "../RoutePaths/Analytics";
import Users from "../RoutePaths/Users";
import "../../../css/ExpenseApp/Accounts.scss";

const AccountRightDiv = () => {
  const [activeButton, setActiveButton] = useState("Calendar");
  const handleClick = (event) => {
    setActiveButton(event.target.innerText);
  };
  return (
    <Router>
      <>
        <div className="nav-div">
          <NavLink
            className="button"
            to="/transactions"
            activeClassName="active-link"
            onClick={handleClick}
          >
            Transactions
          </NavLink>

          <NavLink
            className="button"
            to="/analytics"
            activeClassName="active-link"
            onClick={handleClick}
          >
            Analytics
          </NavLink>
          <NavLink
            className="button"
            to="/calendar"
            activeClassName="active-link"
            onClick={handleClick}
          >
            Calendar
          </NavLink>
          <NavLink
            className="button"
            to="/users"
            activeClassName="active-link"
            onClick={handleClick}
          >
            Users
          </NavLink>
          <NavLink
            className="button"
            to="/report"
            activeClassName="active-link"
            onClick={handleClick}
          >
            Report
          </NavLink>
          <NavLink
            className="button"
            to="/history"
            activeClassName="active-link"
            onClick={handleClick}
          >
            History
          </NavLink>
        </div>
        <Switch>
          <Route exact path="/transactions" component={Transcations} />
          <Route exact path="/analytics" component={Analytics} />
          <Route exact path="/calendar" component={Calender} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/report" component={Report} />
          <Route exact path="/history" component={History} />
        </Switch>
      </>
    </Router>
  );
};

export default AccountRightDiv;
