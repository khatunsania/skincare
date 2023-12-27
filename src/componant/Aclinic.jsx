import React from "react";
import "../style/Aclinic.css";
const Aclinic = () => {
	return (
		<>
			<div className="clinic">
				<div className="a-cl">
					<div className="cl-img">
						<img src="/img/about-video.jpg.webp" alt="" />
					</div>
					<div className="cl-text">
						<div className="c-text">
							<span>ABOUT OUR CLINIC</span>
							<h1>Welcom to the Aesthetic</h1>
						</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<ul>
							<li>
								<i class="fa fa-check-circle"></i> Routine and medical care
							</li>
							<li>
								<i class="fa fa-check-circle"></i> Excellence in Healthcare
								every
							</li>
							<li>
								<i class="fa fa-check-circle"></i> Building a healthy
								environment
							</li>
						</ul>
						<a href="#">Contact Us</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Aclinic;
