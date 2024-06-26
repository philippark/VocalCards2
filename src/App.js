import './App.css';
import Navbar from './Navbar.js'
import Home from './Home.js'
import FlashCard from './FlashCard.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min.js';

import BlogDetails from './BlogDetails.js';
import FlashCardList from './FlashCardList.js';
import FlashcardDetails from './FlashcardDetails.js';

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
              <Route path="/decks/:id">
                <FlashCardList />
              </Route>
              <Route exact path = "/edit/:id">
                <FlashcardDetails/>
              </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;