import React, { useEffect, useState } from "react";
import "./Banner.css";

//https://www.themoviedb.org/settings/api
const BASE_URL = "https://api.themoviedb.org/3/trending/all/week?api_key=";
const API_KEY = "8e414aca951e0b4113fdc00e01b22d82";

function Banner() {
   const [movie, setMovie] = useState([]);
   const [readmore, setReadmore] = useState(false);

   const fetchData = async () => {
      const response = await fetch(`${BASE_URL}${API_KEY}&language=en-US`);
      const data = await response.json();

      const randomMovie = data.results[Math.floor(Math.random() * data.results.length * Math.random())];
      setMovie(randomMovie);
   };

   useEffect(() => {
      fetchData();
   }, []);

   return (
      <div className="position-relative">
         {/* Check if movie exists and has backdrop_path before rendering */}
         {movie && movie.backdrop_path && (
            <div className="position-relative">
               <img
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  className="img-fluid rounded-top w-100"
                  alt={movie.title || movie.name || movie.original_title}
                  style={{ maxHeight: "600px", marginTop: "-80px" }}
               />
               <div className="position-absolute bottom-0 start-0 end-0 p-4 text-light">
                  <h1 className="shadowLabel">{movie?.original_title || movie?.title}</h1>
                  <button className="btn btn-sm btn-danger cursor-pointer fw-semibold">Play</button>
                  <button className="ms-2 btn btn-sm btn-warning cursor-pointer fw-semibold">Add to My List</button>
                  <h5 className="mt-2 w-50 shadowLabel bg-gradient rounded-3">{readmore ? movie.overview : movie.overview.substring(0, 200)} 
                  <button className="btn btn-sm cursor-pointer fw-semibold text-primary" onClick={() => setReadmore(!readmore)}> {readmore ? "...show less" : "...read more"} </button>
                  </h5>
               </div>
            </div>
         )}
      </div>
   );
}

export default Banner;
