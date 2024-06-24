export default function Header() {
	return (
		<header className="border-b border-gray-600">
			<div className="w-4/5 m-auto py-5">
				<h1 className="text-white font-bold text-4xl">
					<a href="/">Record.</a>
				</h1>
				<div className="flex">
					<div className="w-10 h-5 bg-emerald-700"></div>
					<div className="w-10 h-5 bg-sky-700"></div>
					<div className="w-10 h-5 bg-purple-700"></div>
				</div>
			</div>
		</header>
	);
}
