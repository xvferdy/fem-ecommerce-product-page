import React from "react";

import useToggle from "../hooks/useToggle";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Navigation() {
	const [isOpen, setIsOpen] = useToggle();

	const closeSidebar = () => {
		setIsOpen(false);
	};
	return (
		<>
			<Navbar toggleSidebar={setIsOpen} />
			<Sidebar isOpen={isOpen} closeSidebar={closeSidebar} />
		</>
	);
}

export default Navigation;
