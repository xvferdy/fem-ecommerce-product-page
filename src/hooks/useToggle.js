import { useState } from "react";

export default (initialVal = false) => {
	const [state, setState] = useState(initialVal);
	const handleToggle = () => {
		setState(!state);
	};
	return [state, handleToggle];
};
