import { useState } from "react";
import {
	MapContainer,
	TileLayer,
	Circle,
	Marker,
	Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { distance } from "../options/mainbuild";
import { useMainBuildOptions } from "../store/mainbuild";
import { milesToMeters, mapEntries } from "../utils";
import Select from "../components/Select";

const markers = [
	{ position: [43.65107, -79.347015], name: "Toronto", id: "toronto" },
	{ position: [40.712776, -74.005974], name: "New York", id: "new_york" },
	{
		position: [34.052235, -118.243683],
		name: "Los Angeles",
		id: "los_angeles",
	},
	{ position: [41.878113, -87.629799], name: "Chicago", id: "chicago" },
	{ position: [29.760427, -95.369804], name: "Houston", id: "houston" },
	{ position: [33.448376, -112.074036], name: "Phoenix", id: "phoenix" },
	{ position: [39.739236, -104.990251], name: "Denver", id: "denver" },
	{ position: [32.715736, -117.161087], name: "San Diego", id: "san_diego" },
	{ position: [47.606209, -122.332069], name: "Seattle", id: "seattle" },
	{
		position: [38.907192, -77.036873],
		name: "Washington, D.C.",
		id: "washington_dc",
	},
	{ position: [45.501689, -73.567256], name: "Montreal", id: "montreal" },
	{ position: [49.282729, -123.120738], name: "Vancouver", id: "vancouver" },
	{ position: [51.044733, -114.071883], name: "Calgary", id: "calgary" },
	{ position: [53.546124, -113.493823], name: "Edmonton", id: "edmonton" },
	{ position: [45.42153, -75.697193], name: "Ottawa", id: "ottawa" },
	{ position: [25.761681, -80.191788], name: "Miami", id: "miami" },
	{
		position: [37.774929, -122.419418],
		name: "San Francisco",
		id: "san_francisco",
	},
	{ position: [30.267153, -97.743057], name: "Austin", id: "austin" },
	{ position: [32.776665, -96.796989], name: "Dallas", id: "dallas" },
	{ position: [29.424122, -98.493629], name: "San Antonio", id: "san_antonio" },
];

const primaryColor = "#1E3E5B";

const defaultLocation = {
	position: [43.65107, -79.347015],
	name: "Toronto",
	id: "toronto",
};

const MapComponent = () => {
	const [startingLocation, setStartingLocation] = useState(defaultLocation);
	const mainBuildOptions = useMainBuildOptions((state) => state);

	//25 Gallon Tank
	//40 Gallon Tank
	let distanceInM = 0;
	if (mainBuildOptions.distance === "25 Gallon Tank") {
		distanceInM = milesToMeters(806); //806 miles
	}
	if (mainBuildOptions.distance === "40 Gallon Tank") {
		distanceInM = milesToMeters(1259); // 1259 miles
	}

	const center = startingLocation?.position; // Toronto coordinates
	const radius = distanceInM; // Radius in meters (100km)

	const onChangeField = (e: ChangeEvent, property: string) => {
		const value = e.target.value as string;
		mainBuildOptions.setOption({ property: property, value: value });
	};

	return (
		<div className="p-4 pt-2">
			<div className="pb-4 flex flex-row space-x-2">
				<div className="grow">
					<Select
						label="Starting Location"
						value={startingLocation?.id}
						options={markers}
						onChange={(e) => {
							const selectedMarker = markers?.find(
								(marker) => marker.id === e.target.value
							);
							setStartingLocation(selectedMarker);
						}}
					/>
				</div>
				<div className="grow">
					<Select
						label="Distance"
						placeholder=""
						value={mainBuildOptions.distance}
						options={mapEntries(distance)}
						onChange={(e) => onChangeField(e, "distance")}
					/>
				</div>
			</div>
			<MapContainer
				center={center}
				zoom={4}
				style={{ height: "65vh", width: "100%" }}
			>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				/>
				<Circle
					center={center}
					radius={radius}
					color={primaryColor}
					fillOpacity={0.1}
				/>

				{markers.map((marker, index) => (
					<Marker key={index} position={marker.position}>
						<Tooltip permanent={marker.id === startingLocation?.id}>
							{marker.name}
						</Tooltip>
					</Marker>
				))}
			</MapContainer>
		</div>
	);
};

export default MapComponent;
