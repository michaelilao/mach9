import { useMainBuildOptions } from "../store/mainbuild";
import garmin_img from "../assets/avionics/garmin.jpg";
import dynon_img from "../assets/avionics/dynon.jpg";
import Select from "../components/Select";
import { avionics } from "../options/mainbuild";
import { mapEntries } from "../utils";
const imageMap = {
	Garmin: garmin_img,
	Dynon: dynon_img,
};

export default function Avionics() {
	const mainBuildOptions = useMainBuildOptions((state) => state);

	// @ts-expect-error error
	const src = imageMap[mainBuildOptions?.avionics] || "";

	const onChangeField = (e: ChangeEvent, property: string) => {
		const value = e.target.value as string;

		// TODO: if avionics is changed, change all avionics related fields
		mainBuildOptions.setOption({ property: property, value: value });
	};

	return (
		<div className="p-4 pt-2">
			<div className="pb-4 flex flex-row space-x-2">
				<div className="grow">
					<Select
						label="Avionics"
						value={mainBuildOptions?.avionics}
						options={mapEntries(avionics)}
						onChange={(e) => onChangeField(e, "avionics")}
					/>
				</div>
			</div>
			<div>
				<img className="rounded-xl max-h-[70vh]" src={src}></img>
			</div>
		</div>
	);
}
