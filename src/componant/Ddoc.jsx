import React from "react";
import "../style/Ddoc.css";
const Ddoc = ({ cimg, cname }) => {
	return (
		<>
			<div className="d-1">
				<div className="d1-cont">
					<div className="d1-img">
						<img src={cimg} alt="" />
					</div>
					<div className="d1-text">
						<span>MBBS, MRCP(UK), CCST(DERM)</span>
						<h1>{cname}</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
							ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
							accumsan.sis.
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
						<div className="d1-social">
							<i class="fa-brands fa-facebook-f"></i>
							<i class="fa-brands fa-instagram"></i>
							<i class="fa-brands fa-twitter"></i>
							<i class="fa-brands fa-linkedin-in"></i>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Ddoc;
