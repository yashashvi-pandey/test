
import './App.css';
import { createBrowserHistory } from "history";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePageMain from './Pages/HomePageMain'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import SettingPage from './Pages/SettingPage'
import SearchPage from './Pages/SearchPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
const history = createBrowserHistory();
  return (
    < >
        <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
          <HomePageMain/>
          </Route>
          <Route path="/Cart">
            <Cart />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/setting">
            <SettingPage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
        </Switch>
      </div>
    </Router>
  
    </>
  );
}

export default App;
