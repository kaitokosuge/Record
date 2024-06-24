import { useMovieDataQuery } from "../api/controllers/useMovieDataQuery";
import { MicroCmsPost } from "../api/repositories/microCmsPosts";

export default function PostCard({ record }: { record: MicroCmsPost }) {
	const { data, isLoading, isError } = useMovieDataQuery(record.tmdb_id);
	if (isError) {
		return (
			<>
				<p className="text-blue-200 m-auto mt-10 w-4/5 min-h-40">
					映画データの取得に失敗しました
				</p>
			</>
		);
	}
	if (isLoading) {
		return (
			<>
				<p className="text-blue-200 m-auto mt-10 w-4/5 min-h-40">
					映画データを取得しています
				</p>
			</>
		);
	}
	return (
		<article className="text-gray-300 m-auto mt-20 w-4/5 relative">
			<div className="flex">
				<img
					className="w-[150px]"
					src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${data?.poster_path}`}
				/>
				<div className="ml-10">
					<h2 className="text-4xl font-bold">{data?.title}</h2>
					<p className="text-xl mt-5">
						<span className="text-md text-gray-500">release_day:</span>
						{data?.release_date}
					</p>
					<p className="text-xl mt-1">
						<span className="text-sm text-gray-500">The_day_ I _saw:</span>
						{record.show_day}
					</p>
					<p className="text-gray-600 text-[10px] mt-1">
						<span className="text-xl">comment: </span>
						{record.comment}
					</p>
					{/* <button className="absolute right-0 w-[200px] px-10 py-[10px] rounded-md text-white mt-5 text-xl border border-gray-500">
						more
					</button> */}
				</div>
			</div>
		</article>
	);
}
