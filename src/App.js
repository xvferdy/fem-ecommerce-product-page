import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./hoc/Layout";
import Navigation from "./hoc/Navigation";
import Home from "./pages/Home";

import "./stylesheets/css/main.css";

import { CartsProvider } from "./contexts/Carts.context";

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
        </CartsProvider>
      </Router>
    </div>
  );
}

export default App;
