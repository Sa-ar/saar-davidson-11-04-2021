import React from 'react';
import { SearchWrapper, SearchInput } from './Search.styles';
import { Button } from '../../shared.styles';

function Search() {
  return (
    <SearchWrapper>
      <form>
        <SearchInput type='text' placeholder='City' />
        <Button>Check weather</Button>
      </form>
    </SearchWrapper>
  );
}

export default Search;
