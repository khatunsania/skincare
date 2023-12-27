import React from "react";
import "../style/Bars.css";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
const Bars = () => {
	return (
		<>
			<div className="navbar">
				<div className="logo">
					<h1>AESTHETIC</h1>
				</div>
				<div className="bars">
					<li>
						<Link className="bars-link" to="/">
							Home
						</Link>
					</li>
					<li>
						<Link className="bars-link" to="/about">
							About
						</Link>
					</li>
					<li>
						<Link className="bars-link" to="/service">
							Services
						</Link>
					</li>
					<li>
						<Link className="bars-link" to="/doctor">
							Doctor
						</Link>
					</li>
					<li>
						<Link className="bars-link" to="/skintips">
							News
						</Link>
					</li>
					<li>
						<Link className="bars-link" to="/contact">
							Contact
						</Link>
					</li>
				</div>
				<div className="btn">
					<button>appoinment</button>
				</div>
				<div className="menu">
					<Menu />
				</div>
			</div>
		</>
	);
};

export default Bars;
