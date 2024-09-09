import { useEffect, useState } from "react";

//https://www.themoviedb.org/settings/api
const BASE_URL = "https://api.themoviedb.org/3/trending/all/week?api_key=";
const API_KEY = "8e414aca951e0b4113fdc00e01b22d82";

function useApiData() {
	//we should actually do this line in the component
	const [data, setData] = useState(null);

	const fetchData = async () => {
		try {
			const response = await fetch(`${BASE_URL}${API_KEY}&language=en-US`);
			const result = await response.json();
			setData(result);
		} catch (error) {
			console.log(error);
		}

		/*
		//!OR USING .then()
		const fetchData = () => {
			fetch(`${BASE_URL}${API_KEY}&language=en-US`)
				.then(response => response.json())
				.then(result => setData(result))
				.catch(error => console.log(error));
		};

		//!OR USING PROMISES
		const fetchData = () => {
		return new Promise((resolve, reject) => {
			fetch(`${BASE_URL}${API_KEY}&language=en-US`)
			.then(response => {
				if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
				}
				return response.json();
			})
			.then(result => {
				setData(result);
				resolve(result);
			})
			.catch(error => {
				console.error("Error fetching data:", error);
				reject(error);
			});
		});		
		*/
	};

	useEffect(() => {
		fetchData();
	}, []);

	return data;
}

export default useApiData;
