import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/products/:id'>
            <ProductDetail />
          </Route>
          <Route exact path='/Cart'>
            <Cart />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
