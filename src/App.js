import React from 'react';
import Search from './containers/search';
import SearchResult from './containers/searchResult';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <h2>App</h2>
        <Search></Search>
        <SearchResult></SearchResult>
    </div>
  );
}

export default App;
