import React from "react";
import Ahero from "../componant/Ahero";
import Aclinic from "../componant/Aclinic";
import Offer from "../componant/Offer";
import Clients from "../componant/Clients";
import Doc from "../componant/Doc";
const About = () => {
	return (
		<>
			<Ahero stitle="About Us" lname="About" />
			<Aclinic />
			<Offer />
			<Clients />
			<Doc />
		</>
	);
};

export default About;
