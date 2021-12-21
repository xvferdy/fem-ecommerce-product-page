const reducer = (state, action) => {
	switch (action.type) {
		case "ADD":
			return state.length === 0
				? [...state, { ...action.product }]
				: state.map((product) =>
						product.productId === action.productId
							? { ...product, quantity: product.quantity + action.quantity }
							: product
				  );

		case "REMOVE":
			return state.filter((product) => product.id !== action.id);

		default:
			return alert("HO..HO..HO..HO..HO..");
	}
};

export default reducer;
