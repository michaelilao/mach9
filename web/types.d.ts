import React from "react";

declare module "leaflet";
declare global {
	type FormEvent = React.FormEvent<HTMLFormElement>;
	type MouseEvent = React.MouseEvent<HTMLButtonElement>;
	type ChangeEvent =
		| React.ChangeEvent<HTMLInputElement>
		| React.ChangeEvent<HTMLSelectElement>;
}

export {};
