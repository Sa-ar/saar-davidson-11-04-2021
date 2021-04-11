import React from 'react';
import { SearchResultsHeader } from './SearchResults.styles';

function Header() {
  return (
    <SearchResultsHeader>
      <div>
        <img src='' alt='' />
        <div>
          <h3>Tel Aviv</h3>
          <span>38'C</span>
        </div>
      </div>
      <div>
        <button>Like</button>
        <button>Add to Favorites</button>
      </div>
    </SearchResultsHeader>
  );
}

export default Header;
