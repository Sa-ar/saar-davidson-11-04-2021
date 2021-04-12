import React from 'react';
import { SearchResultsWrapper } from './SearchResults.styles';
import Next5Days from './Next5Days';
import Header from './Header';

function SearchResults() {
  return (
    <SearchResultsWrapper>
      <Header />
      <Next5Days />
    </SearchResultsWrapper>
  );
}

export default SearchResults;
