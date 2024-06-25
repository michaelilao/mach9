import Map from "./Map";
import Avionics from "./Avionics";
import Report from "./Report";
import { useMainBuildOptions, MainBuildState } from "../store/mainbuild";
import { useEffect, useState } from "react";
import usePrevious from "../hooks/usePrevious";

const tabs = {
	map: "Map",
	avionics: "Avionics",
	// report: "Report",
};

export default function FeatureDisplay() {
	const [currentTab, setCurrentTab] = useState("map");
	const mainbuild = useMainBuildOptions((state) => state);

	// @ts-expect-error allow it to be undefined
	const prevMainBuild: MainBuildState = usePrevious(mainbuild);

	useEffect(() => {
		if (
			prevMainBuild &&
			prevMainBuild?.avionics &&
			mainbuild?.avionics &&
			mainbuild.avionics !== prevMainBuild?.avionics
		) {
			setCurrentTab("avionics");
		}

		if (
			prevMainBuild?.distance &&
			mainbuild?.distance &&
			mainbuild.distance !== prevMainBuild?.distance
		) {
			setCurrentTab("map");
		}
	}, [mainbuild.avionics, mainbuild.distance]);

	return (
		<div>
			<div className="flex gap-2 border-b-2 border-primary mx-4">
				{Object.entries(tabs).map(([key, value]) => {
					return (
						<button onClick={() => setCurrentTab(key)} key={key}>
							<h2
								className={`text-2xl font-bold px-4 cursor-pointer text-primary  ${
									key === currentTab
										? "border-b-4 border-primary"
										: "border-b-4 border-transparent"
								}`}
							>
								{value}
							</h2>
						</button>
					);
				})}
			</div>
			<div className="mx-4 my-4">
				<div className={currentTab === "map" ? "" : "hidden"}>
					<Map />
				</div>
				<div className={currentTab === "avionics" ? "" : "hidden"}>
					<Avionics />
				</div>
				{/* <div className={currentTab === "report" ? "" : "hidden"}>
					<Report />
				</div> */}
			</div>
		</div>
	);
}
