import React, { useEffect, useState } from "react";
import "./Banner.css";
import useApiData from "../../hooks/useApiData";

function Banner() {
    const [movie, setMovie] = useState([]);
    const { title, original_title, overview, name, backdrop_path } = movie;
    const [readmore, setReadmore] = useState(false);

    const data = useApiData();

    useEffect(() => {
        // Check if data is available and has results before setting randomMovie
        if (data && data.results) {
            const randomMovie = data.results[Math.floor(Math.random() * data.results.length)];
            setMovie(randomMovie);
        }
    }, [data]);

    return (
        <div className="position-relative">
            {/* Check if movie exists and has backdrop_path before rendering */}
            {movie && backdrop_path && (
                <div className="position-relative">
                    <img
                        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                        className="img-fluid rounded-top w-100"
                        alt={original_title || title || name}
                        style={{ maxHeight: "500px", marginTop: "-80px" }}
                    />
                    <div className="position-absolute bottom-0 start-0 end-0 p-4 text-light">
                        <h1 className="shadowLabel">{original_title || title || name}</h1>
                        <button className="btn btn-sm btn-danger cursor-pointer fw-semibold">Play</button>
                        <button className="ms-2 btn btn-sm btn-warning cursor-pointer fw-semibold">Add to My List</button>
                        <h5 className="mt-2 w-50 shadowLabel bg-gradient rounded-3">
                            {readmore ? overview : overview.substring(0, 200)}
                            <button className="btn btn-sm cursor-pointer fw-semibold text-primary" 
                            onClick={() => setReadmore(!readmore)}> {readmore ? "...show less" : "...read more"} </button>
                        </h5>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Banner;
