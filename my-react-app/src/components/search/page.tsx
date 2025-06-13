'use client';
import {useEffect, useRef, useState} from 'react';

import {Pokemon, ResourceList} from '../../types/api/pokeapi';

export default function SearchPage() {
  const [pokemonName, setPokemonName] = useState<string>('');
  const [suggestions, setSuggestions] = useState<Pokemon[]>([]);
  const pokemonCache = useRef<Pokemon[]>([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`)
      .then((response) => response.json())
      .then(({results}: ResourceList<Pokemon>) => {
        pokemonCache.current = results;
      })
      .catch((error) => {
        console.error('Error fetching Pokémon data:', error);
      });
  }, []);

  useEffect(() => {
    const filteredSuggestions = pokemonCache.current.filter((pokemon) =>
      pokemon.name.includes(pokemonName.toLowerCase())
    );
    if (pokemonName.trim() && filteredSuggestions.length > 0 && pokemonName !== filteredSuggestions[0].name) {
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [pokemonName]);

  const handleSearch = () => {
    if (pokemonName.trim()) {
      //TODO: here goes the logic to navigate to the results page.
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setPokemonName(suggestion);
    setSuggestions([]);
  };

  return (
    <>
      <div id="search">
        <h1>Search Pokémon</h1>
        <input
          className="inline-flex w-[653px] h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          placeholder="Pokémon name"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />
        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-black text-white h-10 px-4 py-2 ml-1"
          onClick={handleSearch}>
          Search
        </button>
        {suggestions.length > 0 && (
          <ul className="overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md">
            {suggestions.map((suggestion) => (
              <li key={suggestion.name}>
                <button onClick={() => handleSuggestionClick(suggestion.name)}>{suggestion.name}</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
