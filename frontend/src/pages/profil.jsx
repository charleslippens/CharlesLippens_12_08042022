import "../styling/profil.css";
import { Context } from "../services/getData.jsx";
import SwitchUser from "../components/switchuser.jsx";
import { useContext } from "react";
/**
 * Render Home
 * @param
 * @returns { HtmlElements } Home
 */
function Profil() {
	const { userSwitch, setUserSwitch } = useContext(Context);

	return (
		<section className="home">
			<div> Switch Utilisateur:</div>
			<SwitchUser
				id="user"
				checked={userSwitch}
				onChange={setUserSwitch}
				optionLabels={["18", "12"]}
			/>
		</section>
	);
}

export default Profil;
