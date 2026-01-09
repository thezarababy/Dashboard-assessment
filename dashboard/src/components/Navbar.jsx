export default function Navbar() {
	return (
		<header className="flex items-center justify-between px-6 py-4 border-b bg-white">
			<div className="text-lg font-semibold text-gray-800">Dashboard</div>
			<div className="flex items-center gap-4">
				<input
					type="text"
					placeholder="Search"
					className="hidden sm:block px-3 py-1 border rounded-md"
				/>
				<img src="/avatar.png" alt="Avatar" className="w-8 h-8 rounded-full" />
			</div>
		</header>
	);
}

