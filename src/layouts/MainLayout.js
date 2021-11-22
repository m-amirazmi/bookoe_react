import React from "react";
import Navbar from "../components/MainLayout/Navbar";

export default function MainLayout({ children }) {
	return (
		<div>
			<Navbar />
			{children}
			<div>Footer</div>
		</div>
	);
}
