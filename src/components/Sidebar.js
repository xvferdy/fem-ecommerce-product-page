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
						<a className="link" href="#" onClick={closeSidebar}>
							Collections
						</a>
					</li>
					<li>
						<a className="link" href="#" onClick={closeSidebar}>
							Men
						</a>
					</li>
					<li>
						<a className="link" href="#" onClick={closeSidebar}>
							Women
						</a>
					</li>
					<li>
						<a className="link" href="#" onClick={closeSidebar}>
							About
						</a>
					</li>
					<li>
						<a className="link" href="#" onClick={closeSidebar}>
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Sidebar;
