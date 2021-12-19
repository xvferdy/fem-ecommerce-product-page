import React from "react";

import close from "../assets/images/icon-close.svg";

function Sidebar({ isOpen, closeSidebar }) {
	const style = isOpen ? "sidebar sidebar--open" : "sidebar sidebar--closed";
	return (
		<>
			{isOpen && <div className="backdrop" onClick={closeSidebar}></div>}
			<nav className={style}>
				<button onClick={closeSidebar}>
					<img src={close} alt="Close" />
				</button>

				<ul>
					<li>
						<a className="link" href="#">
							Collections
						</a>
					</li>
					<li>
						<a className="link" href="#">
							Men
						</a>
					</li>
					<li>
						<a className="link" href="#">
							Women
						</a>
					</li>
					<li>
						<a className="link" href="#">
							About
						</a>
					</li>
					<li>
						<a className="link" href="#">
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Sidebar;
