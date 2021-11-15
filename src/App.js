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
<<<<<<< HEAD
          <Route exact path='/products/:id' component={ProductDetail} />
=======
          <Route exact path='/products/:id'>
            <ProductDetail />
          </Route>
          <Route exact path='/Cart'>
            <Cart />
          </Route>
>>>>>>> 2fa0acdaabbff4050f7a3701bc47d101f512c388
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
