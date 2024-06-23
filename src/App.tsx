import { useMicroCmsPostsQuery } from "./api/controllers/useMicroCmsPostsQuery";
import PostCard from "./features/PostCard";

function App() {
	const { data, isLoading, isError } = useMicroCmsPostsQuery();
	if (isLoading) {
		return (
			<>
				<main>
					<p className="text-blue-200">記事データを取得しています</p>
				</main>
			</>
		);
	}
	if (isError) {
		return (
			<>
				<main>
					<p>記事データの取得に失敗しました</p>
				</main>
			</>
		);
	}
	return (
		<>
			<main>
				{data === undefined || data === null ? (
					<>
						<p>データが存在しませんでした</p>
					</>
				) : (
					<>
						{data.contents.map((post, index: number) => (
							<PostCard data={post} key={index} />
						))}
					</>
				)}
			</main>
		</>
	);
}

export default App;
