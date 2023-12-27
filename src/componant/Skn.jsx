import React from "react";
import "../style/Skn.css";
import Skinlist from "./Skinlist";
const Skn = () => {
	return (
		<div className="skin-sec">
			<div className="skin-cont">
				<Skinlist
					schangeimg="/img/blog-1.jpg.webp"
					schangetxt="Here’s how you can get a natural glow this party season"
				/>
				<Skinlist
					schangeimg="/img/blog-2.jpg.webp"
					schangetxt="Get better skin with these top 10 tips for skin care"
				/>
				<Skinlist
					schangeimg="/img/blog-3.jpg.webp"
					schangetxt="8 Ways to Save Your Skin if You Exercise Outside This Winter"
				/>
				<Skinlist
					schangeimg="/img/blog-4.jpg.webp"
					schangetxt="Here’s how you can get a natural glow this party season"
				/>
				<Skinlist
					schangeimg="/img/blog-5.jpg.webp"
					schangetxt="Get better skin with these top 10 tips for skin care"
				/>
				<Skinlist
					schangeimg="/img/blog-6.jpg.webp"
					schangetxt="8 Ways to Save Your Skin if You Exercise Outside This Winter"
				/>
				<Skinlist
					schangeimg="/img/blog-7.jpg.webp"
					schangetxt="Here’s how you can get a natural glow this party season"
				/>
				<Skinlist
					schangeimg="/img/blog-8.jpg.webp"
					schangetxt="Get better skin with these top 10 tips for skin care"
				/>
				<Skinlist
					schangeimg="/img/blog-9.jpg.webp"
					schangetxt="8 Ways to Save Your Skin if You Exercise Outside This Winter"
				/>
			</div>
			<div class="load-more">
				<p>
					<button>Load More</button>
				</p>
			</div>
		</div>
	);
};

export default Skn;
