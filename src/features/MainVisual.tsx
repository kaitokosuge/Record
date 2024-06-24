export default function MainVisual() {
	return (
		<section className="m-auto w-4/5 flex justify-between items-center border-b border-gray-700 pb-10">
			<div>
				<h2 className="text-[240px] text-white border-b border-gray-700">
					Record.
					<span className="block text-[12px]">
						<small> &copy; Record. kkosuge</small>
					</span>
				</h2>
				<div className="mt-10 flex items-center">
					<p className="text-gray-300">My Film Impression Diary</p>
					<div className="flex ml-1">
						<div className="w-20 h-5 bg-emerald-700"></div>
						<div className="w-20 h-5 bg-sky-700"></div>
						<div className="w-20 h-5 bg-purple-700"></div>
					</div>
					<p className="ml-1 text-gray-700">by kkosuge</p>
				</div>
			</div>
			<div className="border-b border-gray-700 pb-10 mt-10">
				<img src="./pen.png" className="w-[200px]" />
				<button className="w-[200px] rounded-md text-white mt-5 text-xl border border-gray-500">
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
