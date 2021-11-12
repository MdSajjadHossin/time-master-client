import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Home from './Pages/Home/Home/Home';
import Register from './Pages/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Login from './Login/Login';
import Reviews from './Reviews/Reviews';
import Explores from './Explores/Explores';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Dashboard from './Dashboard/Dashboard/Dashboard';
import Orders from './Dashboard/Orders/Orders';
import NotFound from './Pages/NotFound/NotFound';
import BestCellingWatch from './Pages/BestCellingWatch/BestCellingWatch';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/home">
            <Home></Home>
          </Route>
          <Route  path="/register">
            <Register></Register>
          </Route>
          <Route  path="/login">
            <Login></Login>
          </Route>
          <Route  path="/reviews">
            <Reviews></Reviews>
          </Route>
          <Route  path="/bestSelling">
            <BestCellingWatch></BestCellingWatch>
          </Route>
          <PrivateRoute  path="/explore">
            <Explores></Explores>
          </PrivateRoute>
          <PrivateRoute  path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute  path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
