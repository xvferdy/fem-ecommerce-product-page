import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./hoc/Layout";
import Navigation from "./hoc/Navigation";
import Home from "./pages/Home";

import "./stylesheets/css/main.css";

import { CartsProvider } from "./contexts/Carts.context";

import Button from "@mui/material/Button";

function App() {
	return (
		<div className="App">
			<Router>
				<CartsProvider>
					<Layout>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/hello" element={<h1>hello</h1>} />
						</Routes>
					</Layout>
					<footer>asdasds</footer>

					<Button variant="outlined">Outlined</Button>
				</CartsProvider>
			</Router>
		</div>
	);
}

export default App;
