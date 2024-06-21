import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const [data, setData] = useState<any>();
	const getMovieData = async () => {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/335984?api_key=${
				import.meta.env.VITE_TMBD_KEY
			}&language=en`
		);
		const data = await res.json();
		console.log("映画のデータだよ", data);
		setData(data);
	};
	useEffect(() => {
		getMovieData();
	}, []);
	return (
		<>
			<div style={{ display: "flex", width: "100%" }}>
				<img
					src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${data.poster_path}`}
					style={{ width: "170px", display: "block" }}
				/>
				<p style={{ color: "white", fontSize: "70px", fontWeight: "bold" }}>
					{data.title}
				</p>
			</div>
		</>
	);
}

export default App;
