import React from "react";

import { color } from "../GlobalStyle";

export default function EditIcon() {
	return (
		<svg width="32" height="32" viewBox="0 0 512 512">
			<path fill={color.blue} d="M501.524,73.158l-62.766-62.702c-13.943-13.929-36.621-13.919-50.554,0.02L52.631,346.202
        c-10.486,10.476-18.494,23.446-23.157,37.511l-0.299,0.902L0,511.984l127.485-29.119l0.9-0.298
        c14.076-4.655,27.058-12.651,37.556-23.136l335.605-335.757c6.746-6.75,10.459-15.722,10.455-25.263
        C511.996,88.872,508.276,79.903,501.524,73.158z M53.208,458.809l11.916-52.024l40.168,40.127L53.208,458.809z M141.879,426.935
        l-56.742-56.684L362.519,92.743l56.742,56.684L141.879,426.935z M447.533,121.143L390.79,64.459l22.703-22.713l56.743,56.684
        L447.533,121.143z"/>
		</svg>
	);
}
