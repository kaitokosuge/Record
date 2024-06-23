import { useEffect, useState } from "react";
import "./index.css";

function App() {
	const [data, setData] = useState<any>();
	const [isLoad, setIsLoad] = useState(false);
	const getMovieData = async () => {
		const resCms = await fetch(
			"https://os1eystqtr.microcms.io/api/v1/record/mi-dead-reckoning",
			{
				headers: {
					"X-MICROCMS-API-KEY": "m0h2ioE86NpgvxgjKmUHyZme8UaRZEGgul9Y",
				},
			}
		);
		console.log("0", resCms);
		const dataCms = await resCms.json();
		console.log("1", dataCms);
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/${dataCms.tmdb_id}?api_key=${
				import.meta.env.VITE_TMBD_KEY
			}&language=en`
		);
		console.log("1の後ならOK", res);
		console.log("hello2");
		const data = await res.json();
		setData(data);
		setIsLoad(true);
	};
	useEffect(() => {
		getMovieData();
	}, []);
	return (
		<>
			{isLoad && (
				<>
					<div style={{ display: "flex", width: "100%" }}>
						<img
							src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${data.poster_path}`}
							style={{ width: "170px", display: "block" }}
						/>
						<p
							// style={{ color: "white", fontSize: "70px", fontWeight: "bold" }}
							className="text-red-500 block w-full">
							{data.title}
						</p>
					</div>
				</>
			)}
		</>
	);
}

export default App;
