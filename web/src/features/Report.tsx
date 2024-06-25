import { useMainBuildOptions } from "../store/mainbuild";
import { useMiscBuild } from "../store/miscbuild";
import { useAppearanceBuild } from "../store/appearancebuild";
import { usePrebuildOptions } from "../store/prebuild";

export default function Report() {
	const mainBuild = useMainBuildOptions((state) => state);
	const miscBuild = useMiscBuild((state) => state);
	const appearanceBuild = useAppearanceBuild((state) => state);
	const prebuildOptions = usePrebuildOptions((state) => state);

	console.log({
		mainBuild,
		miscBuild,
		appearanceBuild,
		prebuildOptions,
	});
	return <div>Report</div>;
}
