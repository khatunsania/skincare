import React from "react";
import DHero from "../componant/Dhero.jsx";
import Ddoc from "../componant/Ddoc.jsx";
import Doct from "../componant/Doct.jsx";
const Doctor = () => {
	return (
		<>
			<DHero />
			<Ddoc cimg="/img/doctor-1.jpg.webp" cname="Dr Emili Craythorne" />
			<Doct dcimg="/img/doctor-2.jpg.webp" dcname="Dr Jessica Jones" />
			<Ddoc cimg="/img/doctor-3.jpg.webp" cname="Dr Ahel Natasha" />
			<Doct dcimg="/img/doctor-4.jpg.webp" dcname="Dr Gabriela Beckett" />
		</>
	);
};

export default Doctor;
