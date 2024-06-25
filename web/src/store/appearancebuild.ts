/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type BuildOption = {
	property: string;
	value: string;
};

interface AppearanceBuildState {
	leatherGlareShieldCover: string;
	colorMatchedWheels: string;
	colorMatchedStick: string;
	seatColorsNonStandard: string;
	seatBeltNonStandard: string;
	throttleNonStandard: string;
	setOption: (state: BuildOption) => void;
}

const useAppearanceBuild = create<AppearanceBuildState>()(
	persist(
		(set: any) => ({
			leatherGlareShieldCover: "",
			colorMatchedWheels: "",
			colorMatchedStick: "",
			seatColorsNonStandard: "",
			seatBeltNonStandard: "",
			throttleNonStandard: "",
			setOption: (state) => set({ [state.property]: state.value }),
		}),
		{
			name: "appearance-options-storage",
			storage: createJSONStorage(() => localStorage),
		}
	)
);

export { useAppearanceBuild };
