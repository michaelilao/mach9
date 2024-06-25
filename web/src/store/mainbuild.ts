/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type BuildOption = {
	property: string;
	value: string;
};

interface MainBuildState {
	airportBase: string;
	propellor: string;
	distance: string;
	avionics: string;
	rearSeatControls: string;
	rearSearEFIS: string;
	backupEFIS: string;
	transponder: string;
	pilotHead: string;
	ifrNavigator: string;
	elt: string;
	c02Detector: string;
	cameraPortHole: string;
	lemoBoseConnectors: string;
	trigRearSeatControl: string;
	highAmpBattery: string;
	oilThermostat: string;
	ledNAVStrobe: string;
	landingLight: string;
	setOption: (state: BuildOption) => void;
}

const useMainBuildOptions = create<MainBuildState>()(
	persist(
		(set: any) => ({
			airportBase: "",
			propellor: "",
			distance: "",
			avionics: "",
			rearSeatControls: "",
			rearSearEFIS: "",
			backupEFIS: "",
			transponder: "",
			pilotHead: "",
			ifrNavigator: "",
			elt: "",
			c02Detector: "",
			cameraPortHole: "",
			lemoBoseConnectors: "",
			trigRearSeatControl: "",
			highAmpBattery: "",
			oilThermostat: "",
			ledNAVStrobe: "",
			landingLight: "",
			setOption: (state) => set({ [state.property]: state.value }),
		}),
		{
			name: "mainbuild-options-storage",
			storage: createJSONStorage(() => localStorage),
		}
	)
);

export { useMainBuildOptions };
export type { MainBuildState };
