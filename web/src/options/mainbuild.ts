const yesno = {
	Yes: "Yes",
	No: "No",
};

const airportBase = {
	"5000 MSL or Below": "912 ULS Engine",
	"5000 MSL or Above": "EP914Ti Turbo Injected High Altitude",
};

const propellor = {
	"Standard Electric Propellor": "Standard Electric Propellor",
	"Hydraulic Propellor": "Hydraulic Propellor",
};

const distance = {
	"1-3 Hours": "25 Gallon Tank",
	"3 or more": "40 Gallon Tank",
};

const avionics = {
	Dynon: "Dynon",
	Garmin: "Garmin",
};

const rearSeatControls = {
	...yesno,
};

const rearSeatEFIS = {
	...yesno,
};

const backupEFIS = {
	Dynon: {
		"Oblo EFIS and B/U Battery": "Oblo EFIS and B/U Battery",
	},
	Garmin: {
		G5: "G5",
	},
	No: "No",
};

const transponder = {
	Dynon: {
		"Standard Transponder": "Standard Transponder",
	},
	Garmin: {
		"ADSB IN": "ADSB IN",
		"ADSB IN.OUT": "ADSB IN.OUT",
		"Diversity with IN.OUT": "Diversity with IN.OUT",
	},
};

const pitotHeat = {
	...yesno,
};

const ifrNavigator = {
	Garmin: {
		"Garmin 355A GPS Navigator with extra radio":
			"Garmin 355A GPS Navigator with extra radio",
		"Garmin 240 Intercom": "Garmin 240 Intercom",
	},
	No: "No",
};

const c02Detector = { ...yesno };
const cameraPortHole = { ...yesno };
const lemoBoseConnectors = { ...yesno };
const trigRearSeatControl = { ...yesno };
const highAmpBattery = { ...yesno };
const oilThermostat = { ...yesno };
const ledNAVStrobe = { ...yesno };
const landingLight = { ...yesno };

export {
	airportBase,
	propellor,
	distance,
	avionics,
	rearSeatControls,
	rearSeatEFIS,
	backupEFIS,
	transponder,
	pitotHeat,
	ifrNavigator,
	c02Detector,
	cameraPortHole,
	lemoBoseConnectors,
	trigRearSeatControl,
	highAmpBattery,
	oilThermostat,
	ledNAVStrobe,
	landingLight,
};
