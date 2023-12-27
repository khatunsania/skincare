import React from "react";
import "../style/Ahero.css";
const Ahero = ({ stitle,lname }) => {
	return (
		<>
			<div className="a-head">
				<div className="ah-img">
					<div className="ah-text">
						<p>
							<h1>{stitle}</h1>
						</p>
						<div className="a-link">
							<p>
								<a href="#">Home </a>.<span>{lname}</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Ahero;
