import Accordion from "../../components/Accordion";
import Select from "../../components/Select";
import { useMainBuildOptions } from "../../store/mainbuild";
import {
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
} from "../../options/mainbuild";
import { mapEntries } from "../../utils";
import _ from "lodash";

const genericFields = [
	{ label: "Airport Base", key: "airportBase", options: airportBase },
	{ label: "Propellor", key: "propellor", options: propellor },
	{ label: "Length of Trip", key: "distance", options: distance },
	{ label: "Avionics", key: "avionics", options: avionics },
	{
		label: "Rear Seat Controls",
		key: "rearSeatControls",
		options: rearSeatControls,
	},
	{
		label: "Rear Seat EFIS",
		key: "rearSeatEFIS",
		options: rearSeatEFIS,
	},
	{
		label: "Backup EFIS",
		key: "backupEFIS",
		options: backupEFIS,
		dependsOn: "avionics",
	},
	{
		label: "Transponder",
		key: "transponder",
		options: transponder,
		dependsOn: "avionics",
	},
	{
		label: "Pitot Heat",
		key: "pitotHeat",
		options: pitotHeat,
	},
	{
		label: "IFR Navigator",
		key: "ifrNavigator",
		options: ifrNavigator,
		dependsOn: "avionics",
	},
	{
		label: "C02 Detector",
		key: "c02Detector",
		options: c02Detector,
	},
	{
		label: "Camera Port Hole",
		key: "cameraPortHole",
		options: cameraPortHole,
	},
	{
		label: "LEMO Bose Connectors",
		key: "lemoBoseConnectors",
		options: lemoBoseConnectors,
	},
	{
		label: "Trig Rear Seat Control",
		key: "trigRearSeatControl",
		options: trigRearSeatControl,
	},
	{
		label: "High Amp Battery",
		key: "highAmpBattery",
		options: highAmpBattery,
	},
	{ label: "Oil Thermostat", key: "oilThermostat", options: oilThermostat },
	{ label: "LED NAV/Strobe", key: "ledNAVStrobe", options: ledNAVStrobe },
	{ label: "Landing Light", key: "landingLight", options: landingLight },
];

export default function MainBuild() {
	const mainBuildOptions = useMainBuildOptions((state) => state);

	const onChangeField = (e: ChangeEvent, property: string) => {
		const value = e.target.value as string;

		// TODO: if avionics is changed, change all avionics related fields
		mainBuildOptions.setOption({ property: property, value: value });
	};

	return (
		<div>
			<Accordion title="Main Build">
				<div className="flex flex-col space-y-2">
					{genericFields?.map((field) => {
						let options = field.options;
						if (field.dependsOn) {
							const dependsOnValue = mainBuildOptions[field.dependsOn];

							// If depends on value does not exist do not render
							if (!dependsOnValue) {
								return null;
							}

							options = { ...field.options[dependsOnValue] };
							Object.entries(field.options).forEach(([key, value]) => {
								if (!_.isObject(value)) {
									options[key] = value;
								}
							});
						}

						return (
							<Select
								key={field.key}
								label={field.label}
								placeholder=""
								options={mapEntries(options)}
								// @ts-expect-error error
								value={mainBuildOptions[field.key]}
								onChange={(e) => onChangeField(e, field.key)}
							/>
						);
					})}
				</div>
			</Accordion>
		</div>
	);
}
