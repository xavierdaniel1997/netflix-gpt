
import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';

const GptSearch = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-40 bg-black'>
      <div className='text-center'>
        <h1 className='font-bold text-5xl'>Search Your Favorite Movies!</h1>
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  );
};

export default GptSearch;
