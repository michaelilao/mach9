import { XMarkIcon } from "@heroicons/react/20/solid";
type Props = {
	label: string;
	placeholder: string;
	value: string | number;
	onChange: (event: ChangeEvent) => void;
	type?: string;
	displayClear?: boolean;
};

export default function Input({
	label,
	placeholder,
	type = "text",
	value,
	onChange,
	displayClear,
}: Props) {
	return (
		<div className="">
			<div className="flex justify-between">
				<label htmlFor="countries" className="block  mb-2 text-text text-sm">
					{label}
				</label>
				<button
					className={`${displayClear ? "" : "hidden"}`}
					onClick={() => {
						const event = { target: { value: "" } } as ChangeEvent;
						onChange(event);
					}}
				>
					<XMarkIcon className="size-6" />
				</button>
			</div>

			<input
				id="label"
				type={type}
				placeholder={placeholder}
				onChange={onChange}
				value={value}
				className="bg-white border border-gray-300 text-sm rounded-lg w-full p-2 focus:ring-secondary focus:border-secondary "
			/>
		</div>
	);
}
