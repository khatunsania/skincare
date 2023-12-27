import React from "react";
import "../style/Skinlist.css";
const skinlist = ({ schangeimg }) => {
	return (
		<>
			<div className="skinlist">
				<div className="skin-img">
					<img src={schangeimg} alt="" />
				</div>
				<div className="skin-text">
					<h3>Here’s how you can get a natural glow this party season</h3>
					<div className="l-foot">
						<ul>
							<li>
								<img src="/img/blog-author.jpg.webp" alt="" />
								john doe
							</li>
							<li>Dec 06,2019</li>
						</ul>
					</div>
				</div>
				{/* </div> */}
			</div>
		</>
	);
};

export default skinlist;
