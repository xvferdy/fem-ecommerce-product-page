import React from "react";
import Navigation from "./Navigation";

function Layout({ children }) {
	return (
		<>
			<Navigation />
			<main className="pages">{children}</main>
		</>
	);
}

export default Layout;
