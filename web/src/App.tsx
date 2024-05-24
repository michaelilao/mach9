import "./App.css";
import SideMenu from "./components/SideMenu";
import Map from "./components/Map";
function App() {
	return (
		<div>
			<div className="border-b p-2">Header</div>
			<div className="flex h-screen">
				<div className="w-1/3 h-full border-r p-2">
					<SideMenu />
				</div>
				<div className="w-2/3 p-2">
					<Map />
				</div>
			</div>
		</div>
	);
}

export default App;
