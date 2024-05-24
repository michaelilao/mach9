/* eslint-disable @typescript-eslint/no-explicit-any */
import { measurements, currency, exchangeRates } from "../options";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type BuildOption = {
	property: string;
	value: string;
};

const usePrebuildOptions = create(
	persist(
		(set, get: any) => ({
			units: measurements.default,
			currency: currency.default,
			exchangeRates: exchangeRates,
			setExchangeRate: (state: BuildOption) =>
				set({
					exchangeRates: {
						...get().exchangeRates,
						[state.property]: state.value,
					},
				}),
			setOption: (state: BuildOption) => set({ [state.property]: state.value }),
		}),
		{
			name: "prebuild-options-storage",
			storage: createJSONStorage(() => sessionStorage),
		}
	)
);

export { usePrebuildOptions };
