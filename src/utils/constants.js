export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDAzMzUyMWZlNjM3NjU0YzkwYmQ1Y2FkMmNmNWYwNyIsInN1YiI6IjY0ZjE3YzcwZTBjYTdmMDBjYmU0ZDllNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i30MHwQ1yB8BLZl6JhgAMORLy4pVDSQFOphFcbVnyo4",
  },
};

export const CDN_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  {identfier: "en", name: "English"},
   {identfier: "malayalam", name: "മലയാളം"},
  {identfier: "spanish", name: "español"},
  {identfier: "hindi", name: "हिंदी"},
 
];


export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API