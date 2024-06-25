import Accordion from "../../components/Accordion";
import Select from "../../components/Select";
import {
	golfClubExtension,
	sharkCustomLuggage,
	boseHeadsets,
	armrestFireExtinguisher,
	cover,
	beringerTireChangeTool,
} from "../../options/miscbuild";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/20/solid";
import { mapEntries } from "../../utils";
import _ from "lodash";
import { useMiscBuild } from "../../store/miscbuild";

const genericFields = [
	{
		label: "Golf Club Extension",
		key: "golfClubExtension",
		options: golfClubExtension,
	},
	{
		label: "Shark Custom Luggage",
		key: "sharkCustomLuggage",
		options: sharkCustomLuggage,
	},
	{
		label: "Bose Headsets",
		key: "boseHeadsets",
		options: boseHeadsets,
	},
	{
		label: "Armrest Fire Extinguisher",
		key: "armrestFireExtinguisher",
		options: armrestFireExtinguisher,
	},
	{
		label: "Cover",
		key: "cover",
		options: cover,
	},
	{
		label: "Beringer Tire Change Tool",
		key: "beringerTireChangeTool",
		options: beringerTireChangeTool,
	},
];

export default function MiscBuild() {
	const miscBuildOptions = useMiscBuild((state) => state);

	const onChangeField = (e: ChangeEvent, property: string) => {
		const value = e.target.value as string;

		// TODO: if avionics is changed, change all avionics related fields
		miscBuildOptions.setOption({ property: property, value: value });
	};

	return (
		<div>
			<Accordion
				title="Miscellaneous"
				icon={
					<AdjustmentsHorizontalIcon className="size-5 my-auto text-primary" />
				}
			>
				<div className="flex flex-col space-y-2">
					{genericFields?.map((field) => {
						let options = field.options;
						if (field.dependsOn) {
							const dependsOnValue = miscBuildOptions[field.dependsOn];

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
								value={miscBuildOptions[field.key]}
								onChange={(e) => onChangeField(e, field.key)}
							/>
						);
					})}
				</div>
			</Accordion>
		</div>
	);
}
