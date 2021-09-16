import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import SelectorSample from "./cssSamples/SelectorSample";
import About from "./routerSample/About";
import Contact from "./routerSample/Contact";
import EmployeeDetails from "./routerSample/EmployeeDetails";
import Employees from "./routerSample/Employees";
import Home from "./routerSample/Home";
import NoMatch from "./routerSample/NoMatch";
import CustomerList from "./uygulama3/CustomerList";

function App() {
  return (
    <>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/employees">Employee</Link>
          </li>
          <li>
            <Link to="/customers">customers</Link>
          </li>
          <li>
            <Link to="/selectorsample">Css Selector</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/employees">
            <Employees />
          </Route>
          <Route path="/employees/:id">
            <EmployeeDetails />
          </Route>
          <Route path="/customers">
            <CustomerList />
          </Route>
          <Route exact path="/selectorsample">
            <SelectorSample />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
