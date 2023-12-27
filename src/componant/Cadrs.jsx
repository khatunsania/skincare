import React from "react";
import "../style/Cadrss.css";
const Cadrs = () => {
	return (
		<>
			<div className="c-adrs">
				<div className="cad-cont">
					<div className="location">
						<i class="fa-solid fa-location-dot"></i>
						<span>Address</span> <p>Los Angeles Gournadi, 1230 Bariasl</p>
					</div>
					<div className="location">
						<i class="fa-solid fa-phone"></i>
						<span> Hotline</span> <p>1-677-124-44227 • 1-688-356-66889</p>
					</div>
					<div className="location">
						<i class="fa-solid fa-envelope"></i>
						<span>Email</span> <p>Support@gmail.com</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cadrs;
