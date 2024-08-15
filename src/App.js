import React, { useState } from "react";
import Palette from "./Palette";
import "./App.css";

function App() {
	const generateColor = () =>
		"#" + Math.floor(Math.random() * 16777215).toString(16);

	const [colors, setColors] = useState(
		Array(5)
			.fill()
			.map(() => ({ color: generateColor(), locked: false }))
	);

	const regenerateColors = () => {
		setColors(
			colors.map((c) =>
				c.locked ? c : { color: generateColor(), locked: false }
			)
		);
	};

	const toggleLock = (index) => {
		const newColors = [...colors];
		newColors[index].locked = !newColors[index].locked;
		setColors(newColors);
	};

	const copyToClipboard = (color) => {
		navigator.clipboard.writeText(color);
		alert(`Copied ${color} to clipboard!`);
	};

	return (
		<div className="App">
			<h1>Color Palette Generator</h1>
			<Palette
				colors={colors}
				onLock={toggleLock}
				onCopy={copyToClipboard}
			/>
			<button onClick={regenerateColors}>Regenerate Colors</button>
		</div>
	);
}

export default App;
