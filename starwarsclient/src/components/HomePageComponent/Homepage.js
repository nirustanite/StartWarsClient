import React from 'react';
import Header from '../HeaderComponent/Header';
import SearchContainer from '../SearchComponent/SearchContainer';

//home page which displays header and search
export default function Homepage(){
    return(
        <React.Fragment>
            <Header />
            <SearchContainer />
        </React.Fragment>
    )
}

