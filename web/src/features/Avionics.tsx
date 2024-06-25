import { useMainBuildOptions } from "../store/mainbuild";
import garmin_img from "../assets/avionics/garmin.jpg";
import dynon_img from "../assets/avionics/dynon.jpg";

const imageMap = {
	Garmin: garmin_img,
	Dynon: dynon_img,
};

export default function Avionics() {
	const avionics = useMainBuildOptions((state) => state.avionics);

	// @ts-expect-error error
	const src = imageMap[avionics] || "";

	return (
		<div>
			<h3>{avionics}</h3>
			<div className="p-4">
				<img className="mx-auto rounded-xl max-h-[80vh]" src={src}></img>
			</div>
		</div>
	);
}
