const mapEntries = (obj: object) => {
	return Object.entries(obj).map(([key, value]) => {
		return {
			id: value,
			name: key,
		};
	});
};

const mapKeys = (obj: object) => {
	return Object.keys(obj).map((key) => {
		return {
			id: key,
			name: key,
		};
	});
};

const milesToMeters = (miles: number) => {
	if (!miles) return 0;
	const metersPerMile = 1609.34;
	return miles * metersPerMile;
};
export { mapEntries, mapKeys, milesToMeters };
