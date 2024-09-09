// Banner.js
import React, { useEffect, useState } from "react";
import "./Banner.css";
import useApiData from "../../hooks/useApiData";

// Function to sanitize image URL
const sanitizeImageUrl = (baseUrl, imagePath) => {
    // Remove any double slashes in the image path
    const sanitizedImagePath = imagePath.replace(/\/\//g, '/');
    // Construct the full image URL
    return `${baseUrl}${sanitizedImagePath}`;
};

const BannerImage = ({ backdropPath, title }) => (
    <img src={sanitizeImageUrl("https://image.tmdb.org/t/p/original/", backdropPath)} className="img-fluid rounded-top w-100" alt={title}
        style={{ maxHeight: "600px", marginTop: "-80px" }}
    />
);

const BannerContent = ({ title, overview, readmore, onToggleReadmore }) => (
    <div className="position-absolute bottom-0 start-0 end-0 p-4 text-light">
        <h1 className="shadowLabel">{title}</h1>
        <button className="btn btn-sm btn-danger cursor-pointer fw-semibold">Play</button>
        <button className="ms-2 btn btn-sm btn-warning cursor-pointer fw-semibold">Add to My List</button>
        <h5 className="mt-2 w-50 shadowLabel bg-gradient rounded-3">
            {readmore ? overview : overview.substring(0, 200)}
            <button className="btn btn-sm cursor-pointer fw-semibold text-primary" onClick={onToggleReadmore}>
                {readmore ? "...show less" : "...read more"}
            </button>
        </h5>
    </div>
);

function Banner() {
    const data = useApiData();
    const [readmore, setReadmore] = useState(false);

    // Check if data is available and has results before setting randomMovie
    const randomMovie = data && data.results ? data.results[Math.floor(Math.random() * data.results.length)] : null;

    return (
        <div className="position-relative">
            {randomMovie && randomMovie.backdrop_path && (
                <div className="position-relative">
                    <BannerImage backdropPath={randomMovie.backdrop_path} title={randomMovie.title || randomMovie.name || randomMovie.original_title} />
                    <BannerContent
                        title={randomMovie.original_title || randomMovie.title}
                        overview={randomMovie.overview}
                        readmore={readmore}
                        onToggleReadmore={() => setReadmore(!readmore)}
                    />
                </div>
            )}
        </div>
    );
}

export default Banner;
