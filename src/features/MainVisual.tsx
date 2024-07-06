export default function MainVisual() {
	return (
		<section className="m-auto w-4/5 flex flex-wrap justify-between items-center border-b border-gray-700 pb-10">
			<div>
				<h2 className="md:text-[240px] text-[100px] text-white border-b border-gray-700">
					Record.
					<span className="block text-[12px]">
						<small> &copy; Record. kkosuge</small>
					</span>
				</h2>
				<div className="mt-10 flex items-center">
					<p className="text-gray-300 md:text-md text-[10px]">
						My Film Impression Diary
					</p>
					<div className="flex ml-1">
						<div className="w-20 h-5 bg-emerald-700"></div>
						<div className="w-20 h-5 bg-sky-700"></div>
						<div className="w-20 h-5 bg-purple-700"></div>
					</div>
					<p className="ml-1 text-gray-600 md:text-md text-[9px]">by kkosuge</p>
				</div>
			</div>
			<div className="md:w-fit w-full border-b border-gray-700 pb-10 md:mt-10 mt-5 md:block flex items-center justify-between">
				<img src="./pen.png" className="md:w-[200px] w-[50px]" />
				<button className="w-[200px] rounded-md text-white md:mt-5 mt-0 text-xl border border-gray-500">
					<a
						className="block w-[200px] px-10 py-[10px]"
						href="https://kaitokosuge.github.io/Space/">
						my site→
					</a>
				</button>
			</div>
		</section>
	);
}
