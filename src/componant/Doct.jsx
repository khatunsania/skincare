import React from "react";
import "../style/D2.css";
const Doct = ({ dcname, dcimg }) => {
	return (
		<>
			<div className="d2">
				<div className="d2-cont">
					<div className="d2-text">
						<span>MBBS, MRCP(UK), CCST(DERM)</span>
						<h1>{dcname}</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
							ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
							accumsan.sis.{" "}
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
							<li>
								<i class="fa fa-check-circle"></i> cumsan lacus vel facilisis.
							</li>
						</ul>
						<div className="d2-social">
							<i class="fa-brands fa-facebook-f"></i>
							<i class="fa-brands fa-instagram"></i>
							<i class="fa-brands fa-twitter"></i>
							<i class="fa-brands fa-linkedin-in"></i>
						</div>
					</div>
					<div className="d2-img">
						<img src={dcimg} alt="" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Doct;
