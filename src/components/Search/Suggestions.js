import React from 'react';
import { SuggestionsBox, Suggestion } from './Search.styles';

function Suggestions({ suggestions, input, setLocation, emptySuggestions }) {
  return (
    !!suggestions && (
      <SuggestionsBox>
        {suggestions.map((suggestion) => (
          <Suggestion
            key={suggestion.Key}
            onClick={() => {
              input.current.value = suggestion.LocalizedName;
              setLocation({
                id: suggestion.Key,
                name: suggestion.LocalizedName,
              });
              emptySuggestions();
            }}
          >
            {suggestion.LocalizedName}
          </Suggestion>
        ))}
      </SuggestionsBox>
    )
  );
}

export default Suggestions;
