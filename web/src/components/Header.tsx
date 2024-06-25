export default function Header() {
	return (
		<div className="bg-black px-3 py-2 flex justify-between">
			<img
				className="object-contain max-h-[3vh]"
				src="/images/mach9-logo-sm.png"
				alt="image"
			/>
			<div className="text-white">Chris Horsten</div>
		</div>
	);
}
