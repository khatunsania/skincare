import React from "react";
import "../style/Cbody.css";
const Cbody = () => {
	return (
		<>
			<div className="c-body">
				<div className="c-cont">
					<div className="cn-img">
						<img src="/img/contact-pic.jpg.webp" alt="" />
					</div>
					<div className="cn-form">
						<h2>Get in touch</h2>
						<form>
							<input type="text" placeholder="name" />
							<input type="email" placeholder="Email" />
							<input type="text" placeholder="website" />
							<textarea placeholder="Messege"></textarea>
							<button type="submit" class="site-btn">
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cbody;
