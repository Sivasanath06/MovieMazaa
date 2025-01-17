import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get current year

  return (
    <footer className="bg-gray-900 text-white p-6 mt-8">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row md:items-center md:justify-between">
        {/* MovieMazaa Copyright */}
        <span className="text-sm text-gray-400 sm:text-center">
          © {currentYear}{" "}
          <Link to="/" className="font-semibold hover:text-blue-500">
            MovieMazaa
          </Link>
          . All Rights Reserved.
        </span>

        {/* Social Media Links */}
        <ul className="flex flex-wrap items-center mt-3 space-x-6 sm:mt-0">
          <li>
            <a
              href="https://www.instagram.com/sivasanath_1503/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sivasanath-kumar-medavarapu-442157229/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Sivasanath06"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              Github
            </a>
          </li>
        </ul>
      </div>

      {/* "Made by Sivasanath Kumar M" Text */}
      <div className="mt-6 text-center text-sm text-gray-400">
        Made with ❤️ by <strong>Sivasanath Kumar M</strong>
      </div>
    </footer>
  );
};