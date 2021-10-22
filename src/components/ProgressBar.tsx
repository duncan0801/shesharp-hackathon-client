import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ProgressBar() {
	return (
		<div className="progressbar-container">
			<CircularProgressbar
				value={0.5}
				maxValue={1}
				text={`${0.46 * 100}%`}
			/>
			;
		</div>
	);
}

export default ProgressBar;
