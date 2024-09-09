import React, { useEffect, useState } from "react";
import useApiData from "../../hooks/useApiData";
import "./Row.css";

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original/';

function Row({ heading, isLargeRow = false }) {
	const [movies, setMovies] = useState([]);
	const data = useApiData();

	useEffect(() => {
		if (data && data.results) {
			setMovies(data.results);
		}
	}, [data]);

	return (
		<div className="container-fluid bg-black">
			<h3 className="text-white pt-2">{heading}</h3>
			<div className="row flex-nowrap overflow-auto scrollStyle">
				{movies.map((movie, index) => (
					<div key={index} className="col imageStyle">
						<div className="position-relative">
							{movie.poster_path && movie.backdrop_path && (
								<>
									<img
										src={`${IMG_BASE_URL}${isLargeRow ? movie.backdrop_path : movie.poster_path}`}
										className={`rounded-2`}
										alt={movie.title || movie.original_title || movie.name}
										style={{ width: "auto", height: "200px", objectFit: "cover" }}
									/>

									{/* Adding movie title over large row images */}
									{isLargeRow && <div className="position-absolute bottom-0 start-0 end-0 p-3 text-white">
										<h5 className="card-title mb-0">{movie.title || movie.original_title || movie.name}</h5>
									</div>}
								</>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Row;

// import React, { useEffect, useState } from "react";
// import useApiData from "../../hooks/useApiData";

// function Row() {
// 	const [movies, setMovies] = useState([]);
// 	const data = useApiData();

// 	useEffect(() => {
// 		if (data && data.results) {
// 			setMovies(data.results);
// 		}
// 	}, [data]);

// 	const { title, original_title, overview, name, poster_path } = movies;
// 	const movieTitlesArray = movies.map((movie) => title || original_title || name);
// 	const movieImagePathArray = movies.map((movie) => poster_path);

// 	return (
// 		<div>
// 			<ul>
// 				{movieTitlesArray.map((title, index, poster_path) => (
// 					<div key={index}>
// 						<li >{title}</li>
// 						{/* <li >
// 							<img
// 								src={`https://image.tmdb.org/t/p/original/${movieImagePathArray}`}
// 								className="img-fluid rounded-top w-100"
// 								alt={original_title || title || name}
// 								style={{ maxHeight: "600px", marginTop: "-80px" }}
// 							/>
// 						</li> */}
// 					</div>
// 				))}
// 			</ul>
// 		</div>
// 	);
// }

// export default Row;

/*
return (
	<div className="container-fluid bg-black">
			<h3 className="text-white">{heading}</h3>
		<div className="row flex-nowrap overflow-auto">
			{movies.map((movie, index) => (
				<div key={index} className="col imageStyle">
					<div className="position-relative">
						{movie.poster_path && (
							<>
								<img
									src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
									className="rounded-2"
									alt={movie.title || movie.original_title || movie.name}
									style={{ width: "auto", height: "200px", objectFit: "cover" }}
								/>
								<div className="position-absolute bottom-0 start-0 end-0 p-3 text-white">
									<h5 className="card-title mb-0">{movie.title || movie.original_title || movie.name}</h5>
								</div>
							</>
						)}
					</div>
				</div>
			))}
		</div>
	</div>
);
}

*/