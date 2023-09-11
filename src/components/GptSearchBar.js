import React, {useRef} from "react";
import lang from "../utils/languageConstants";
import {API_OPTIONS, SUPPORTED_LANGUAGES} from "../utils/constants";
import {useDispatch, useSelector} from "react-redux";
import {changeLanguage} from "../redux/languageSlice";
import openai from "../utils/openai";
import {addGptMovieResults} from "../redux/gptSlice";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.language.lang);
  const dispatch = useDispatch();

  // const [suggestedMovies, setSuggestedMovies] = ([])
  const searchText = useRef(null);

  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearch = async () => {

    const searchQuery =
      "Act as a movie recommendation system and suggest some movies for the query :" +
      searchText.current.value +
      ". Only give me name of 5 movies , comma seperated like the example result given ahead. Example Result: KGF, RDX, Don, Sholay, Gadar";
    // Making API call from GPT
    const gptResult = await openai.chat.completions.create({
      messages: [{role: "user", content: searchQuery}],
      model: "gpt-3.5-turbo",
    });
    // console.log(gptResult.choices?.[0].message?.content);
    const gptMovieSuggetions =
      gptResult.choices?.[0].message?.content.split(",");
      console.log(gptMovieSuggetions);
   

    const promiseArrayMovieDataResult = gptMovieSuggetions.map((movie) =>
      searchMovieTmdb(movie)
    );

    const movieDataResults = await Promise.all(promiseArrayMovieDataResult);
    console.log(movieDataResults);

    dispatch(
      addGptMovieResults({
        movieNames: gptMovieSuggetions,
        movieSuggetionResults: movieDataResults,
      })
    );

  };

  const handleLanguageOptions = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <>
      <div className="pt-10">
        <select
          className="bg-black text-white text-lg font-medium px-4 py-2"
          onChange={handleLanguageOptions}
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option key={lang.name} value={lang.identfier}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
      <form className="pt-5" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langkey].gptPlaceholder}
          className="w-96 px-2 py-4 border-2 border-gray-500 text-xl text-gray-500 outline-none"
        />
        <button
          className="bg-red-500 px-6 py-4 text-xl text-white font-semibold border-2 border-red-500 hover:bg-red-400"
          onClick={handleGptSearch}
        >
          {lang[langkey].search}
        </button>
      </form>
    </>
  );
};

export default GptSearchBar;
