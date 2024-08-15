import React from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";

function Palette({ colors, onLock, onCopy }) {
	return (
		<div className="Palette">
			{colors.map((color, index) => (
				<ColorBox
					key={index}
					color={color.color}
					locked={color.locked}
					onLock={() => onLock(index)}
					onCopy={() => onCopy(color.color)}
				/>
			))}
		</div>
	);
}

export default Palette;
