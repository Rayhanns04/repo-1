export function variant(base, variants) {
	return function builder(props) {
		const classes = [];

		Object.entries(props).forEach(([key, value]) => {
			if (!(key in variants)) {
				return console.warn(`Unknown prop '${key}'`);
			}

			return cn(base, ...classes);
		});
	};
}
