import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Nav from "./componant/Nav";
import Bars from "./componant/Bars";
import Home from "./pages/home";
import Footer from "./componant/Footer";
import About from "./pages/About";
import Service from "./pages/Service";

import { Route, Routes } from "react-router-dom";
import Doctor from "./pages/Doctor";
import Skintips from "./pages/Skintips";
import Contact from "./pages/Contact";

function App() {
	return (
		<>
			<Nav />
			<Bars />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/service" element={<Service />} />
				<Route path="/doctor" element={<Doctor />} />
				<Route path="/skintips" element={<Skintips />} />
				<Route path="/skintips" element={<Skintips />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
