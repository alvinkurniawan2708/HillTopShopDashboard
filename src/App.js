import React,{useEffect} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

import store from "./store";
import setAuthToken from './util/setAuthToken';
import { setCurrentUser } from './actions/authAction';

//importing general components
import ProtectedRoute from './components/general/ProtectedRoute'

//importing components
import Landing from "./components/landing";

//dashboard component
import Dashboard from './components/dashboard'
import Home from './components/dashboard/components/Home';
import AddProduct from './components/dashboard/components/AddProducts';
import Products from './components/dashboard/components/Products';

//user component
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import './App.css';
import './dashboard.css';
import 'antd/dist/antd.css';
import { fromPairs } from 'lodash';


if(localStorage.token){
  setAuthToken(localStorage.token);
}

function App(props) {
  useEffect(() => {
    store.dispatch(setCurrentUser());
  
  }, []);
  return (
      <Provider store={store}>
        <Router>
        <div className="App">
        <Route exact path="/" component={Landing}/> 
        <Switch>
        <ProtectedRoute
              exact
              path="/dashboard"
              component={() => <Dashboard {...props} nestedRoute={Home} />}
            />
        <ProtectedRoute
              exact
              path="/dashboard/addProduct"
              component={() => (
                <Dashboard {...props} nestedRoute={AddProduct} />
              )}
            />
            <ProtectedRoute
              exact
              path="/dashboard/products"
              component={() => (
                <Dashboard {...props} nestedRoute={Products} />
              )}
            />
            <ProtectedRoute
              exact
              path="/register"
              component={() => (
                <Dashboard {...props} nestedRoute={Register} />
              )}
            />
        </Switch>
        </div>
        </Router>
      </Provider>

  );
}

export default App;
