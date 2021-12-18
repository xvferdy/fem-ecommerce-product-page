import React from "react";

import close from "../assets/images/icon-close.svg";

function Sidebar() {
	return (
		<>
			<div className="backdrop"></div>
			<nav className="sidebar">
				<img src={close} alt="Close" />
				<ul>
					<li>
						<a href="#">Collections</a>
					</li>
					<li>
						<a href="#">Men</a>
					</li>
					<li>
						<a href="#">Women</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Sidebar;
