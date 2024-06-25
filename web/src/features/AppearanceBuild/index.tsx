import Accordion from "../../components/Accordion";
import Select from "../../components/Select";
import { useAppearanceBuild } from "../../store/appearancebuild";
import {
	leatherGlareShieldCover,
	colorMatchedWheels,
	colorMatchedStick,
	seatColorsNonStandard,
	seatBeltNonStandard,
	throttleNonStandard,
} from "../../options/appearancebuild";
import { mapEntries } from "../../utils";
import { PaintBrushIcon } from "@heroicons/react/20/solid";
import _ from "lodash";
import Input from "../../components/Input";

const genericFields = [
	{
		label: "Leather Glare Shield Cover",
		key: "leatherGlareShieldCover",
		options: leatherGlareShieldCover,
	},
	{
		label: "Color Matched Wheels",
		key: "colorMatchedWheels",
		options: colorMatchedWheels,
	},
	{
		label: "Color Matched Stick",
		key: "colorMatchedStick",
		options: colorMatchedStick,
	},
	{
		label: "Non Standard Seat Colors",
		key: "seatColorsNonStandard",
		options: seatColorsNonStandard,
		type: "color",
	},
	{
		label: "Non Standard Seat Belt Colors",
		key: "seatBeltNonStandard",
		options: seatBeltNonStandard,
		type: "color",
	},
	{
		label: "Non Standard Throttle Color",
		key: "throttleNonStandard",
		options: throttleNonStandard,
		type: "color",
	},
];

export default function AppearanceBuild() {
	const appearanceBuildOptions = useAppearanceBuild((state) => state);

	const onChangeField = (e: ChangeEvent, property: string) => {
		const value = e.target.value as string;

		// TODO: if avionics is changed, change all avionics related fields
		appearanceBuildOptions.setOption({ property: property, value: value });
	};

	return (
		<div>
			<Accordion
				title="Appearance"
				icon={<PaintBrushIcon className="size-5 my-auto text-primary" />}
			>
				<div className="flex flex-col space-y-2">
					{genericFields?.map((field) => {
						let options = field.options;
						if (field?.dependsOn) {
							const dependsOnValue = appearanceBuildOptions[field.dependsOn];

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

						if (field?.type === "color") {
							return (
								<Input
									key={field.key}
									label={field.label}
									placeholder=""
									type={field.type}
									value={appearanceBuildOptions[field.key]}
									displayClear
									onChange={(e) => onChangeField(e, field.key)}
								/>
							);
						}

						return (
							<Select
								key={field.key}
								label={field.label}
								placeholder=""
								options={mapEntries(options)}
								// @ts-expect-error error
								value={appearanceBuildOptions[field.key]}
								onChange={(e) => onChangeField(e, field.key)}
							/>
						);
					})}
				</div>
			</Accordion>
		</div>
	);
}
