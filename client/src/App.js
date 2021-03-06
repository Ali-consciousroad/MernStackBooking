// import those pages in App.js
// then based on the path show each components using react-router components
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import PrivateRoute from "./components/PrivateRoute";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// components
import Home from "./booking/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Dashboard from "./user/Dashboard";
import DashboardSeller from "./user/DashboardSeller";
import NewHotel from './hotels/NewHotel';

/**
 * Create TopNavigation/menu bar so that we can easily navigate between pages
 * Write it in App.js (will be later moved in it's own component)
 */

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <ToastContainer position="top-center" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute
          exact
          path="/dashboard/seller"
          component={DashboardSeller}
        />
        <PrivateRoute
          exact
          path="/hotels/new"
          component={NewHotel} 
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
