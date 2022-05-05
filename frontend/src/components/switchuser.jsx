import React from "react";
import PropTypes from "prop-types";

import "../styling/switchuser.css";

/**
 * Render a Switch User
 * @param {string} id
 * @param {bool} checked
 * @param {function} onChange
 * @param {string} name
 * @param {array} optionLabels
 * @param {bool} small
 * @param {bool} disabled
 * @returns { HtmlElements } Switch User button
 */
const SwitchUser = ({ id, checked, onChange, name, optionLabels, small, disabled }) => {
	function handleKeyPress(e) {
		if (e.keyCode !== 32) return;

		e.preventDefault();
		onChange(!checked);
	}

	return (
		<div className={"button-switch" + (small ? " small-switch" : "")}>
			<input
				type="checkbox"
				name={name}
				className="button-switch-checkbox"
				id={id}
				checked={checked}
				onChange={(e) => onChange(e.target.checked)}
				disabled={disabled}
			/>
			{id ? (
				<label
					className="button-switch-label"
					tabIndex={disabled ? -1 : 1}
					onKeyDown={(e) => handleKeyPress(e)}
					htmlFor={id}
				>
					<span
						className={
							disabled
								? "button-switch-inner button-switch-disabled"
								: "button-switch-inner"
						}
						data-yes={optionLabels[0]}
						data-no={optionLabels[1]}
						tabIndex={-1}
					/>
					<span
						className={
							disabled
								? "button-switch-switch button-switch-disabled"
								: "button-switch-switch"
						}
						tabIndex={-1}
					/>
				</label>
			) : null}
		</div>
	);
};

SwitchUser.propTypes = {
	id: PropTypes.string.isRequired,
	checked: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
	name: PropTypes.string,
	optionLabels: PropTypes.array,
	small: PropTypes.bool,
	disabled: PropTypes.bool,
};

SwitchUser.defaultProps = {
	optionLabels: ["Yes", "No"],
};

export default SwitchUser;
