'use client';
import {useEffect, useState} from 'react';

import Paginator from '../paginator';
import {Encounter} from "../../types/api/pokeapi";
import Results from "./results";

export default function ResultsPage() {
  const [totalPages, setTotalPages] = useState<number>(0);
  const limit = 10;
  const currentPage = 1;
  //TODO: pokemonName should be somehow passed to this component from the search page
  const pokemonName = 'gloom';
  const [encountersCache, setEncountersCache] = useState<Encounter[]>([]);

  //TODO: this needs to happen only once, when the new search is executed
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/encounters`)
      .then((response) => response.json())
      .then((results) => {
        setEncountersCache(results);
      });
  }, [pokemonName]);
  //TODO: here goes the client pagination logic, needs to trigger no requests, only slice the data and render it


  return (
    <>
      <Results encounters={encountersCache}/>
      <Paginator currentPage={currentPage} totalPages={totalPages}/>
    </>
  );
}
