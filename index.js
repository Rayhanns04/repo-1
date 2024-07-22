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
	if (
		typeof total !== "number" ||
		typeof unit !== "number" ||
		typeof divisor !== "number"
	) {
		throw new TypeError("All parameters must be numbers");
	}
	if (unit === 0 || divisor === 0) {
		throw new Error("Unit and divisor must be non-zero");
	}
	return Math.max(Math.floor((total / unit) % divisor), 0);
};
