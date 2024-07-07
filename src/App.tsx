import { useMicroCmsPostsQuery } from "./api/controllers/useMicroCmsPostsQuery";
import { MicroCmsPost } from "./api/repositories/microCmsPosts";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainVisual from "./features/MainVisual";
import PostCard from "./features/PostCard";

function App() {
	const {
		data,
		error,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isFetchingNextPage,
	} = useMicroCmsPostsQuery();
	if (isFetchingNextPage) {
		return (
			<>
				<Header />
				<main className="pb-20">
					<MainVisual />
					<section className="md:mt-40 mt-10">
						{data === undefined || data === null ? (
							<>
								<p>記事が公開されていません</p>
							</>
						) : (
							<>
								{data.pages.map((page) => {
									return page.contents.map((item: any, index: number) => (
										<PostCard record={item} key={index} />
									));
								})}
								<button
									className="block text-gray-300 m-auto mt-20 w-[400px] relative"
									onClick={() => {
										fetchNextPage();
									}}
									disabled={!hasNextPage || isFetchingNextPage}>
									{isFetchingNextPage ? (
										<span className="text-4xl text-pink-700">
											Loading more...
										</span>
									) : hasNextPage ? (
										<span className="text-4xl">Load More</span>
									) : (
										<span className="text-4xl text-yellow-300">
											Nothing more to load
										</span>
									)}
								</button>
							</>
						)}
					</section>
				</main>
				<Footer />
			</>
		);
	}
	if (isFetching) {
		return (
			<>
				<Header />
				<main>
					<MainVisual />
					<p className="text-blue-200 md:mt-40 mt-10 w-4/5 m-auto">
						<span className="text-4xl text-pink-700">Loading now...</span>
					</p>
				</main>
				<Footer />
			</>
		);
	}

	if (error) {
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
				<section className="md:mt-40 mt-10">
					{data === undefined || data === null ? (
						<>
							<p className="text-white text-4xl">no articles</p>
						</>
					) : (
						<>
							{data.pages.map((page) => {
								return page.contents.map(
									(item: MicroCmsPost, index: number) => (
										<PostCard record={item} key={index} />
									)
								);
							})}
							<button
								className="block text-gray-300 m-auto mt-20 w-[380px] relative"
								onClick={() => {
									fetchNextPage();
								}}
								disabled={!hasNextPage || isFetchingNextPage}>
								{isFetchingNextPage ? (
									<span className="text-4xl text-pink-700">
										Loading more...
									</span>
								) : hasNextPage ? (
									<span className="text-4xl">Load More</span>
								) : (
									<span className="text-4xl text-yellow-300">
										Nothing more to load
									</span>
								)}
							</button>
						</>
					)}
				</section>
			</main>
			<Footer />
		</>
	);
}

export default App;
