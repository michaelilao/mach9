import Accordion from "../components/Accordion";
import Select from "../components/Select";
import Input from "../components/Input";
import { usePrebuildOptions } from "../store/prebuild";
import { measurements } from "../options/prebuild";
import { mapKeys } from "../utils";
export default function PreBuild() {
	const { currency, exchangeRates, currentRate, setOption, unit } =
		usePrebuildOptions((state) => state);

	const mappedCurrencies = mapKeys(exchangeRates);
	const mappedUnits = mapKeys(measurements);

	const onChangeField = (e: ChangeEvent, property: string) => {
		const value = e.target.value as string;

		if (property === "currency") {
			//@ts-expect-error currency is a key of exchangeRates
			const rate = exchangeRates[value];
			setOption({ property: "currentRate", value: rate });
		}

		setOption({ property: property, value: value });
	};

	return (
		<div className="">
			<Accordion title="Pre Build" defaultOpen>
				<div className="flex flex-col space-y-2">
					<Select
						label="Currency"
						placeholder=""
						options={mappedCurrencies}
						value={currency}
						onChange={(e) => onChangeField(e, "currency")}
					/>
					<Input
						label="Exchange Rate"
						placeholder=""
						type="number"
						value={currentRate}
						onChange={(e) => onChangeField(e, "currentRate")}
					/>
					<Select
						label="Units"
						placeholder=""
						options={mappedUnits}
						value={unit}
						onChange={(e) => onChangeField(e, "unit")}
					/>
				</div>
			</Accordion>
		</div>
	);
}
