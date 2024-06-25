/* eslint-disable @typescript-eslint/no-explicit-any */
import { measurements, currency, exchangeRates } from "../options/prebuild";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type BuildOption = {
	property: string;
	value: string;
};

interface PreBuildState {
	unit: string;
	currency: string;
	currentRate: number;
	exchangeRates: {
		USD: number;
		CAD: number;
		EUR: number;
	};
	setExchangeRate: (state: BuildOption) => void;
	setOption: (state: BuildOption) => void;
}

const usePrebuildOptions = create<PreBuildState>()(
	persist(
		(set, get: any) => ({
			unit: measurements.default,
			currency: currency.default,
			currentRate: 1,
			exchangeRates: exchangeRates,
			setExchangeRate: (state) =>
				set({
					exchangeRates: {
						...get().exchangeRates,
						[state.property]: state.value,
					},
				}),
			setOption: (state) => set({ [state.property]: state.value }),
		}),
		{
			name: "prebuild-options-storage",
			storage: createJSONStorage(() => localStorage),
		}
	)
);

export { usePrebuildOptions };
