import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

type Props = {
	title: string;
	children?: React.ReactNode;
	defaultOpen?: boolean;
};

const Accordion = ({ title, children, defaultOpen = false }: Props) => {
	const [isOpen, setIsOpen] = useState(defaultOpen);

	return (
		<div className="border-b-2 border-primary ">
			<button
				className="w-full flex justify-between items-center p-1 focus:outline-none"
				onClick={() => setIsOpen(!isOpen)}
			>
				<span className="text-xl font-medium text-primary py-1">{title}</span>
				<div
					className={`w-10 h-10 transform transition-transform duration-400 cursor-pointer ${
						isOpen ? "rotate-180" : ""
					}`}
				>
					<ChevronDownIcon className="size-10 text-primary" />
				</div>
			</button>
			<div
				className={`overflow-hidden transition-all duration-200 ${
					isOpen ? "max-h-[100%]" : "max-h-0"
				}`}
			>
				<div className="p-1 pb-4">{children}</div>
			</div>
		</div>
	);
};

export default Accordion;
