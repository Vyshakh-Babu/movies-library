import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa6";
import { useAuth0 } from "@auth0/auth0-react";
import { RiLogoutCircleLine } from "react-icons/ri";

export default function Navbar({ showSignInButton, isAuth }) {
	const { user, loginWithRedirect, logout } = useAuth0();

	const handleAuth0Authentication = () => {
		loginWithRedirect();
	}

	const [navBg, setNavBg] = useState(false);

	const navBgTransition = () => {
		if (window.scrollY > 100) {
			setNavBg(true)
		} else {
			setNavBg(false);
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', navBgTransition);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener('scroll', navBgTransition);
		};
	}, []);

	return (
		<nav className={`navbar navbar-expand-lg navbar-light sticky-top ${navBg && 'bg-primary'}`}>
			<div className="container">
				<a className="navbar-brand" href="/">
					<img width="50" height="50" src="https://img.icons8.com/avantgarde/100/cinema-.png" alt="cinema-" />
				</a>
			</div>

			<div className="d-flex justify-content-between">
				<div className="collapse navbar-collapse me-5 fw-bold text-white">
					<ul className="navbar-nav">
						<li className="nav-item"> <a className="nav-link" href="#"> Home </a> </li>
						<li className="nav-item"> <a className="nav-link" href="#"> About </a> </li>
						<li className="nav-item"> <a className="nav-link" href="#"> Contact </a> </li>
					</ul>
				</div>

				<div className="row me-4">
					{showSignInButton ? (<button className="btn btn-primary me-5 border border-1"
						onClick={handleAuth0Authentication}>
						<FaUser size={20} /> Sign in
					</button>) : ""}
					{isAuth &&
						(<div className="user-info-label bg-secondary-subtle text-dark d-flex align-items-center px-3 py-1 rounded rounded-4 fw-bold">
							<FaUser className="me-2 shadow" size={20} />
							<div className="d-md-flex flex-md-column ms-2">
								<span className="d-block">Hi,</span>
								<span className="d-block">{user ? user.nickname : ""}</span>
							</div>

							<button className="btn btn-md bg-danger border ms-2" onClick={logout}>
								<RiLogoutCircleLine />
							</button>
						</div>)}
				</div>
			</div>
		</nav>
	);
}
