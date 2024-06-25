type Props = {
	label: string;
	placeholder?: string;
	value: string;
	onChange: (event: ChangeEvent) => void;
	options: {
		id: string;
		name: string;
	}[];
};
export default function Select({
	label,
	placeholder,
	options,
	value,
	onChange,
}: Props) {
	return (
		<div>
			<label htmlFor="countries" className="block mb-2 text-text text-sm">
				{label}
			</label>
			<select
				id="label"
				onChange={onChange}
				value={value}
				className="border border-gray-300 text-sm rounded-lg w-full p-2 focus:ring-secondary focus:border-secondary bg-white"
			>
				{placeholder !== undefined ? <option>{placeholder}</option> : null}
				{options.map((option) => {
					return (
						<option key={option.id} value={option.id}>
							{option.name}
						</option>
					);
				})}
			</select>
		</div>
	);
}
