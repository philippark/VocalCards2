import './App.css';
import Navbar from './Navbar.js'
import Home from './Home.js'
import FlashCard from './FlashCard.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min.js';

function App() {
  return (
    <Router>
      <div className = "App">
        <Navbar/>
        <div className = "content">
          <Switch>
              <Route exact path = "/">
                <Home/>
              </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
