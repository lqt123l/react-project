import SearchResult from './searchResult';
import SavedProducts from './savedProducts';
import Search from './search';
import ProductManage from './productManage';

import React from 'react';
const Home = () => {
    return (
        <div>
            <div className="row">
                <div className='col-sm-12 col-md-12 col-lg-5'>
                    <Search></Search>
                    <SearchResult></SearchResult>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-7'>
                    <SavedProducts></SavedProducts>
                </div>
            </div>
        </div>
    );
}

export default Home;