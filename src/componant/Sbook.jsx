import React from "react";
import "../style/Sbook.css";
const Sbook = () => {
	return (
		<>
			<div className="sb-sec">
				<div className="sb-cont">
					<div className="sb-form">
						<form>
							<div className="sb-head">
								<p>
									<h2>Get an appointment</h2>
								</p>
							</div>
							<label>
								<input type="text" placeholder="Name" />
							</label>
							<label>
								<input type="email" placeholder="Email" />
							</label>
							<label>
								<input type="text" placeholder="Date" />
							</label>
							<label>
								<input type="text" placeholder="Type your services" />
							</label>
							<button>BOOK APPOINTMENT</button>
						</form>
					</div>
					<div className="sb-text">
						<div className="sb-img">
							<div className="simg-text">
								<div className="facial">
									<p>Facial procedures</p>
									<h1>Min Facelift</h1>
								</div>
								<div className="rupees">
									<p>
										<i class="fa-solid fa-star"></i>
										<i class="fa-solid fa-star"></i>
										<i class="fa-solid fa-star"></i>
										<i class="fa-solid fa-star"></i>
										<i class="fa-solid fa-star"></i>
									</p>
									<p>$ 159.50 </p>
								</div>
							</div>

							<img src="/img/services-details.jpg.webp" alt="" />
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
								ipsum suspendisse ultrices gravida. Risus commodo viverra
								maecenas accumsan lacus vel facilisis magnam aliquid.
								Cupiditate! Aut ipsam consequuntur non rem tenetur dolore
								consequatur ducimus a labore excepturi quae nisi, quisquam,
								maxime voluptates magnam aliquid.
							</p>
						</div>
						<div className="s-ruls">
							<div className="sb-img">
								<img src="/img/sd-1.jpg.webp" alt="" />
								<img src="/img/sd-2.jpg.webp" alt="" />
								<img src="/img/sd-3.jpg.webp" alt="" />
								<p>
									Atque eum alias debitis suscipit, sint dignissimos minus
									quisquam recusandae nostrum quas eligendi odit, fugiat eius
									rem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</p>
								<div className="s-list">
									<div className="sl-1">
										<ul>
											<li>
												<i class="fa fa-check-circle"></i> Routine and medical
												care
											</li>
											<li><i class="fa fa-check-circle"></i>Excellence in Healthcare every</li>
											<li><i class="fa fa-check-circle"></i> Building a healthy environment</li>
											<li><i class="fa fa-check-circle"></i> cumsan lacus vel facilisis.</li>
										</ul>
									</div>
									<div className="sl-1">
										<ul>
											<li><i class="fa fa-check-circle"></i> Routine and medical care</li>
											<li><i class="fa fa-check-circle"></i>Excellence in Healthcare every</li>
											<li><i class="fa fa-check-circle"></i> Building a healthy environment</li>
											<li><i class="fa fa-check-circle"></i> cumsan lacus vel facilisis.</li>
										</ul>
									</div>
								</div>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Atque eum alias debitis suscipit, sint dignissimos minus
									quisquam recusandae nostrum quas eligendi odit, fugiat eius
									rem. Cumque, labore placeat! Velit, vitae. Lorem ipsum dolor
									sit amet consectetur adipisicing elit.
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* <div className="s-ruls">
					<div className="sb-img">
						<img src="/img/sd-1.jpg.webp" alt="" />
						<img src="/img/sd-2.jpg.webp" alt="" />
						<img src="/img/sd-3.jpg.webp" alt="" />
						<p>
							Atque eum alias debitis suscipit, sint dignissimos minus quisquam
							recusandae nostrum quas eligendi odit, fugiat eius rem. Lorem
							ipsum dolor sit amet consectetur adipisicing elit.
						</p>
						<div className="s-list">
							<div className="sl-1">
								<ul>
									<li> Routine and medical care</li>
									<li>Excellence in Healthcare every</li>
									<li> Building a healthy environment</li>
									<li> cumsan lacus vel facilisis.</li>
								</ul>
							</div>
							<div className="sl-1">
								<ul>
									<li> Routine and medical care</li>
									<li>Excellence in Healthcare every</li>
									<li> Building a healthy environment</li>
									<li> cumsan lacus vel facilisis.</li>
								</ul>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</>
	);
};

export default Sbook;
