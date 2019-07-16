import React from 'react';
import {SearchProducts} from '../containers/SearchProducts';
import {SearchResult} from '../containers/SearchResult';
import {SavedProducts} from '../containers/SavedProducts';



export const Home = () => {
    return (
        <div>
            <div className="row">
                <div className='col-sm-12 col-md-12 col-lg-5'>
                    <SearchProducts></SearchProducts>
                    <SearchResult></SearchResult>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-7'>
                    <SavedProducts></SavedProducts>
                </div>
            </div>
        </div>
    );
}

