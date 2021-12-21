import { useState } from "react";

export default (initialVal) => {
	const [input, setInput] = useState(initialVal);

	return {
		input,
		change: (e) => {
			setInput(Number(e.target.value));
		},
		plus: () => setInput(input + 1),
		minus: () => setInput(input === 0 ? input : input - 1),
		reset: () => {
			setInput(0);
		},
	};
};
