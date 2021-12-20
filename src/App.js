import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./hoc/Layout";
import Navigation from "./hoc/Navigation";
import Home from "./pages/Home";

import "./stylesheets/css/main.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/hello" element={<h1>hello</h1>} />
					</Routes>
				</Layout>
				<footer>asdasds</footer>
			</Router>
		</div>
	);
}

export default App;
