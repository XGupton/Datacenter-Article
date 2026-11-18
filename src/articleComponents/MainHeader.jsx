export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-200 shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Site Name */}
        <div className="text-2xl font-bold text-gray-800">
          Xander Gupton
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-black">Home</a>
          <a href="#" className="text-gray-600 hover:text-black">Articles</a>
          <a href="#" className="text-gray-600 hover:text-black">About</a>
        </nav>
      </div>
    </header>
  );
}