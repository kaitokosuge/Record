import { useMovieDataQuery } from "../api/controllers/useMovieDataQuery";

import { MicroCmsPost } from "../api/repositories/microCmsPosts";

export default function PostCard({ record }: { record: MicroCmsPost }) {
	const { data, isLoading, isError } = useMovieDataQuery(record.tmdb_id);
	if (isLoading) {
		return (
			<>
				<article className="text-gray-300 m-auto mt-20 w-4/5 relative">
					<div className="flex">
						<div className="w-[100px] bg-gray-600 md:w-[150px] md:max-h-[225px] max-h-[150px]"></div>
						<div className="md:ml-10 ml-[30px]">
							<h2 className="text-xl md:text-4xl font-bold">loading title</h2>
							<p className="md:text-xl text-sm md:mt-5 mt-1">loading date</p>
							<p className="md:text-xl text-xs mt-1">
								<span className="text-gray-600"></span>
							</p>
							<p className="text-gray-500 text-[10px] mt-1">loading comment</p>
							{/* <button className="absolute right-0 w-[200px] px-10 py-[10px] rounded-md text-white mt-5 text-xl border border-gray-500">
						more
					</button> */}
						</div>
					</div>
				</article>
			</>
		);
	}
	if (isError) {
		return (
			<>
				<p className="text-blue-200 m-auto mt-10 w-4/5 min-h-40">
					映画データの取得に失敗しました。再読み込みを行うか、時間を置いてご操作ください。
				</p>
			</>
		);
	}
	return (
		<article className="text-gray-300 m-auto mt-20 w-4/5 relative">
			<div className="flex">
				<img
					className="w-[100px] md:w-[150px] md:max-h-[225px] max-h-[150px]"
					src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${data?.poster_path}`}
				/>
				<div className="md:ml-10 ml-[30px]">
					<h2 className="text-xl md:text-4xl font-bold">{data?.title}</h2>
					<p className="md:text-xl text-sm md:mt-5 mt-1">
						{data?.release_date}
					</p>
					<p className="md:text-xl text-xs mt-1">
						<span className="text-gray-600">show-day:{record.show_day}</span>
					</p>
					<p className="text-gray-500 text-[10px] mt-1">{record.comment}</p>
					{/* <button className="absolute right-0 w-[200px] px-10 py-[10px] rounded-md text-white mt-5 text-xl border border-gray-500">
						more
					</button> */}
				</div>
			</div>
		</article>
	);
}
