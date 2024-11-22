export default function Navbar() {
    return (
      <header className="w-full bg-white shadow">
        <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-blue-600">
            Livia Portfolio
          </a>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="text-gray-700 hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="/projects" className="text-gray-700 hover:text-blue-600">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }