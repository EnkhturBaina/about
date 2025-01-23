import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
	return (
		<Typewriter
			options={{
				strings: ["Mobile Developer", "Android & IOS", ""],
				autoStart: true,
				loop: true,
				deleteSpeed: 50
			}}
		/>
	);
}

export default Type;
