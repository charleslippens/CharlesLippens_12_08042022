import { Link } from "react-router-dom";
import "../styling/profil.css";
/**
 * Render Profil
 * @param
 * @returns { HtmlElements } Profil
 */
function Profil() {
	return (
		<section className="home">
			<div>
				<Link className="btn" to={"/user/12/"}>
					Profil de Karl Utilisateur numéro 12{" "}
				</Link>
				<Link className="btn" to={"/user/18/"}>
					Profil de Cécilia Utilisateur numéro 18
				</Link>
			</div>
		</section>
	);
}

export default Profil;
