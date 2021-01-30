import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './App.css';
import Books from './features/books/Books';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container>
        <Books />
      </Container>
    </div>
  );
}

export default App;
