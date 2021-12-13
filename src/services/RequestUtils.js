class Utils {
	constructor() {
		this.handleArrayValue = this.handleArrayValue.bind(this);
	}

	handleArrayValue(value) {
		if (value === undefined) return undefined;
		if (Array.isArray(value)) {
			value = value.filter((i) => i !== "");
			if (value.length) {
				return JSON.stringify(value);
			} else return undefined;
		}
		if (value === "" || value === null) return undefined;
		return value;
	}
}

export default Utils;
