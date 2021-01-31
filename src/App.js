import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './App.css';
import Books from './features/books/Books';
import Book from './features/book/Book';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container>
        <Router>
          <Switch>
            <Route path="/book/:_id">
              <Book />
            </Route>
            <Route path="/books">
              <Books />
            </Route>
            <Route path="/">
              <Redirect to="/books" />
            </Route>
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
