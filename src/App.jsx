import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import "./utility/fontawesome";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
	return (
		<>
			<div className="lg:h-[100vh] -mt-16 lg:-mt-0 flex flex-col">
				<Header />
				<Body />
			</div>
			<ToastContainer limit={3} />
		</>
	);
};

export default App;
