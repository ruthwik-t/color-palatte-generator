import React from "react";
import "./ColorBox.css";

function ColorBox({ color, locked, onLock, onCopy }) {
	return (
		<div className="ColorBox" style={{ backgroundColor: color }}>
			<p>{color}</p>
			<div className="ColorBox-controls">
				<button onClick={onCopy}>Copy</button>
				<button onClick={onLock}>{locked ? "Unlock" : "Lock"}</button>
			</div>
		</div>
	);
}

export default ColorBox;
