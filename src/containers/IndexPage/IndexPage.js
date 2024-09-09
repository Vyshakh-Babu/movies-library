import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import IndexInfo from "../../components/IndexInfo/IndexInfo";

function IndexPage() {
	return (
		<div>
			<Navbar showSignInButton={true} isLoggedOut={false} />
            <IndexInfo />
		</div>
	);
}

export default IndexPage;
