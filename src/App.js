import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import ContactPage from "./pages/ContactPage";
import Orders from "./components/userdashboard/Orders";
import Account from "./components/userdashboard/Account";
import Messages from "./components/userdashboard/Messages";
import Dashboard from "./components/userdashboard/Dashboard";
import Cart from './pages/Cart';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products/:id" component={ProductDetail} />
          <Route exact path="/Cart">
            <Cart />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route exact path="/dashboard" component={Dashboard}>
            <Dashboard />
          </Route>
          <Route exact path="/Orders" component={Orders}>
            <Orders />
          </Route>
          <Route exact path="/Account" component={Account}>
            <Account />
          </Route>
          <Route exact path="/Messages" component={Messages}>
            <Messages />
          </Route>
            <Route exact path="/Messages/:id" component={Messages} />
          <Route exact path = '/contact'>
            <ContactPage/>
            </Route>
          <Route exact path='/login'>
            <LoginPage />
          </Route>
          <Route exact path='/register'>
            <RegisterPage />
          </Route>
          <Route exact path='/checkout'>
            <Checkout />
          </Route>
          <Route exact path='/payment'>
            <Payment />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
