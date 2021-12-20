import React from "react";
import LightBox from "../components/LightBox";
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
