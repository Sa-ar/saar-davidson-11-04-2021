import React from 'react';
import Header from './components/Header/Header';
import Search from './features/Search/Search';
import SearchResults from './components/SearchResults/SearchResults';

function App() {
  return (
    <>
      <Header />
      <Search />
      <SearchResults />
    </>
  );
}

export default App;
