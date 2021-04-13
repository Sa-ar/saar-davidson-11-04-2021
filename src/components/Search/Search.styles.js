import styled from 'styled-components';

export const SearchWrapper = styled.section`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  margin: 3rem auto;
`;

export const SearchInput = styled.input`
  padding: 0.5rem;
  border-radius: 3px;
  border-color: #cba5fa;
  margin-right: 0.5rem;
  min-width: 25vw;
`;

export const SuggestionsBox = styled.ul`
  position: absolute;
  top: 1.3rem;
  list-style-type: none;
  background: #fffa;
  width: 25vw;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`;

export const Suggestion = styled.li`
  padding: 0.5rem;
`;
