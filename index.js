export function formatNumericValue(value, options = {}) {
	const {
		prefix = "",
		suffix = "",
		decimals = 2,
		thousandsSeparator = ".",
		decimalSeparator = ",",
		negativeInRed = false,
	} = options;

	// Check if the value is numeric
	if (typeof value !== "number" || isNaN(value)) {
		return "NaN";
	}

	// Apply rounding and convert to a string with the specified number of decimals
	const formattedValue = value.toFixed(decimals);

	// Split into integer and decimal parts
	const [integerPart, decimalPart] = formattedValue.split(".");

	// Add thousands separator to the integer part
	const integerWithSeparator = integerPart.replace(
		/\B(?=(\d{3})+(?!\d))/g,
		thousandsSeparator
	);

	// Combine integer and decimal parts with the decimal separator
	const result =
		integerWithSeparator +
		(decimalPart ? decimalSeparator + decimalPart : "");

	// Add prefix and suffix
	const formattedResult = `${prefix}${result}${suffix}`;

	// Apply red color to negative values if required
	if (negativeInRed && value < 0) {
		return `<span style="color: red;">${formattedResult}</span>`;
	}

	return formattedResult;
}

export const isEmptyObject = (obj) => Object.keys(obj).length === 0;

export const calculateToastDuration = (message) => {
	// Calculate the length of the message
	const messageLength = message.length;

	// Adjust the duration based on the message length
	// You can tweak the values according to your preference
	const duration = Math.max(messageLength * 40, 2000);

	return duration;
};

export function cn(...cns) {
	return cns.join(" ");
}
