import "./App.css";
import SideMenu from "./features/SideMenu";
import FeatureDisplay from "./features/FeatureDisplay";
import Header from "./components/Header";
function App() {
	return (
		<div>
			<div className="border-b max-h-[10vh]">
				<Header />
			</div>
			<div className="flex flex-wrap">
				<div className="w-full md:w-1/3 border-r-2 border-primary  mt-2 p-2 h-[90vh] overflow-y-auto">
					<SideMenu />
				</div>
				<div className="w-full md:w-2/3 p-2 h-[90vh]">
					<FeatureDisplay />
				</div>
			</div>
		</div>
	);
}

export default App;
