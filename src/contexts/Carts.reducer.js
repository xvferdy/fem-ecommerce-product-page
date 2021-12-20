const reducer = (state, action) => {
	switch (action.type) {
		case "ADD":
			// return state.map((product) =>
			// 	product.productId === action.productId
			// 		? { ...product, quantity: action.quantity, name: action.quantity }
			// 		: [...state, { ...action.product }]
			// );

			return state.length === 0
				? [...state, { ...action.product }]
				: state.map((product) =>
						product.productId === action.productId
							? { ...product, quantity: product.quantity + action.quantity }
							: product
				  );

		// return state.map((product) =>
		// 	state.length === 0
		// 		? [...state, { ...action.product }]
		// 		: product.productId === action.productId
		// 		? { ...product, quantity: action.quantity, name: action.quantity }
		// 		: product
		// );
		// return [...state, { ...action.product }];
		// return false
		// 	? [...state, { ...action.product }]
		// 	: [...state, { kek: "kekw" }];

		case "MOREQTY":
			return state.map((product) =>
				product.id === action.id && product.quantity < 10
					? { ...product, quantity: product.quantity + 1 }
					: product
			);
		case "LESSQTY":
			return state.map((product) =>
				product.id === action.id && product.quantity > 1
					? { ...product, quantity: product.quantity - 1 }
					: product
			);
		case "EDITQTY":
			return state.map((product) =>
				product.id === action.id
					? { ...product, quantity: action.quantity }
					: product
			);
		case "REMOVE":
			return state.filter((product) => product.id !== action.id);

		default:
			return alert("HO..HO..HO..HO..HO..");
	}
};

export default reducer;
