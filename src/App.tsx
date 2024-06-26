import { useMicroCmsPostsQuery } from "./api/controllers/useMicroCmsPostsQuery";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainVisual from "./features/MainVisual";
import PostCard from "./features/PostCard";

function App() {
	const { data, isLoading, isError } = useMicroCmsPostsQuery();
	if (isLoading) {
		return (
			<>
				<Header />
				<main>
					<MainVisual />
					<p className="text-blue-200 mt-40 w-4/5 m-auto">
						記事を取得しています
					</p>
				</main>
				<Footer />
			</>
		);
	}
	if (isError) {
		return (
			<>
				<Header />
				<main>
					<MainVisual />
					<p className="mt-40 text-red-300 w-4/5 m-auto">
						記事データの取得に失敗しました。再読み込みを行うか、時間を置いて再度ご操作ください。
					</p>
				</main>
				<Footer />
			</>
		);
	}
	return (
		<>
			<Header />
			<main className="pb-20">
				<MainVisual />
				<section className="mt-40">
					{data === undefined || data === null ? (
						<>
							<p>記事が公開されていません</p>
						</>
					) : (
						<>
							{data.contents.map((post, index: number) => (
								<PostCard record={post} key={index} />
							))}
						</>
					)}
				</section>
			</main>
			<Footer />
		</>
	);
}

export default App;
