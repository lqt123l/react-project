import React from 'react';
import Search from './containers/search';
import SearchResult from './containers/searchResult';
import SavedProducts from './containers/savedProducts';
import './App.css';


const App = () => {
  return (
    <div className='container'>
      <h2>App</h2>
      <div className="row">      
        <div className='col-md-12 col-lg-6'>
          <Search></Search>
          <SearchResult></SearchResult>
        </div>
        <div className='col-md-12 col-lg-6'>
          <SavedProducts></SavedProducts>
        </div>
      </div>
    </div>
  );
}

export default App;
