export function formatNumericValue(value, options = {}) {
	const {
		prefix = "",
		suffix = "",
		decimals = 2,
		locale = "en-US", // Added locale support
		fallbackValue = "NaN", // Customizable fallback value
		useScientificNotation = false, // Option for scientific notation
		negativeClass = "", // Class for negative values instead of inline styles
	} = options;

	// Check if the value is numeric
	if (typeof value !== "number" || isNaN(value)) {
		return fallbackValue;
	}

	console.log("value", value);

	let formattedResult;

	if (useScientificNotation) {
		// Format in scientific notation
		formattedResult = value.toExponential(decimals);
	} else {
		// Locale-aware formatting
		formattedResult = new Intl.NumberFormat(locale, {
			minimumFractionDigits: decimals,
			maximumFractionDigits: decimals,
		}).format(value);
	}

	// Add prefix and suffix
	formattedResult = `${prefix}${formattedResult}${suffix}`;

	// Apply class to negative values if required
	if (negativeClass && value < 0) {
		return `<span class="${negativeClass}">${formattedResult}</span>`;
	}

	return formattedResult;
}

export const getTimeRemaining = (total, unit, divisor) => {
	console.log("total", total);
	console.log("unit", unit);
	console.log("divisor", divisor);

	return Math.max(Math.floor((total / unit) % divisor), 0)
		.toString()
		.padStart(2, "0");
};
