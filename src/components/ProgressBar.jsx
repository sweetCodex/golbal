import React from "react";
import { ProgressContext } from "../utility/ProgressContext";

function ProgressBar({ width }) {
	return (
		<div className="progress-bar w-full h-1 bg-gray-400 z-20">
			<div
				className="bar bg-brand-02 h-full trans-default"
				style={{
					width: `${width}%`,
				}}
			></div>
		</div>
	);
}

export default ProgressBar;
