import React from "react";
import Navbar from "../../components/Navbar/Navbar";
// import Banner from '../../components/Banner/BannerUnoptimized'
// import Banner from '../../components/Banner/BannerGPT'
import Banner from "../../components/Banner/Banner";
import Row from "../../components/Row/Row";

function HomePage() {
	return (
		<div>
			<Navbar showSignInButton={false} isAuth={true} />
			<Banner />
			<Row heading="BOX OFFICE HITS" />
			<Row heading="ALL TIME HITS" isLargeRow />
			<Row heading="BOX OFFICE HITS" />
			<Row heading="BOX OFFICE HITS" isLargeRow />
		</div>
	);
}

export default HomePage;
