import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import Step from "./Step";

function Body() {
	const [progress, setProgress] = useState(10);

	return (
		<>
			<div className="h-full tracking-wide">
				<div className="bg-gray-200 h-full flex flex-col teleportBg relative">
					<ProgressBar width={progress} />
					<Step setProgress={setProgress} />
				</div>
			</div>
		</>
	);
}

export default Body;
