/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type BuildOption = {
	property: string;
	value: string;
};

interface MiscBuildState {
	golfClubExtension: string;
	sharkCustomLuggage: string;
	boseHeadsets: string;
	armrestFireExtinguisher: string;
	cover: string;
	beringerTireChangeTool: string;
	setOption: (state: BuildOption) => void;
}

const useMiscBuild = create<MiscBuildState>()(
	persist(
		(set: any) => ({
			golfClubExtension: "",
			sharkCustomLuggage: "",
			boseHeadsets: "",
			armrestFireExtinguisher: "",
			cover: "",
			beringerTireChangeTool: "",
			setOption: (state) => set({ [state.property]: state.value }),
		}),
		{
			name: "misc-options-storage",
			storage: createJSONStorage(() => localStorage),
		}
	)
);

export { useMiscBuild };
