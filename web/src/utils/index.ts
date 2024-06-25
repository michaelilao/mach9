const mapEntries = (obj: Object) => {
	return Object.entries(obj).map(([key, value]) => {
		return {
			id: value,
			name: key,
		};
	});
};

const mapKeys = (obj: Object) => {
	return Object.keys(obj).map((key) => {
		return {
			id: key,
			name: key,
		};
	});
};

export { mapEntries, mapKeys };
