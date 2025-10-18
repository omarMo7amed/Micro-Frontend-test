export default function Header() {
  return (
    <header className="w-full sticky top-0 bg-amber-300 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        {/* Logo / Brand */}
        <h1 className="text-xl font-semibold text-gray-900">
          Micro<span className="text-amber-800">Front</span>
        </h1>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#"
                className="text-gray-900 hover:text-amber-800 transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 hover:text-amber-800 transition-colors duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 hover:text-amber-800 transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
