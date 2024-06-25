import PreBuild from "./PreBuild";
import MainBuild from "./MainBuild";
import AppearanceBuild from "./AppearanceBuild";
import MiscBuild from "./MiscBuild";
export default function SideMenu() {
	return (
		<div>
			<PreBuild />
			<MainBuild />
			<AppearanceBuild />
			<MiscBuild />
		</div>
	);
}
