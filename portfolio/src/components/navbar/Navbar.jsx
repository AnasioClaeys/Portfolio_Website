import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="">
      <div className="flex flex-wrap items-center justify-center mx-auto p-4">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-20 md:mt-0 md:border-0 dark:border-gray-700 items-center">
            <li>
              <Link
                className="block py-2 pl-3 pr-4 text-white text-gray-900 rounded  md:text-white md:p-0 text-xl"
                to="/"
                id="navLink"
              >
                {/* <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white text-gray-900 rounded  md:text-white md:p-0 text-xl"
                  aria-current="page"
                  id="navLink"
                > */}
                HOME
                {/* </a> */}
              </Link>
            </li>
            <li>
              {/* <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded text-white md:border-0 md:p-0 dark:text-white text-xl"
                id="navLink"
              > */}
              <Link
                className="block py-2 pl-3 pr-4 text-white text-gray-900 rounded  md:text-white md:p-0 text-xl"
                to="/aboutme"
                id="navLink"
              >
                ABOUT ME
              </Link>

              {/* </a> */}
            </li>
            <li>
              <Link
                className="block py-2 pl-3 pr-4 text-white text-gray-900 rounded  md:text-white md:p-0 text-xl"
                to="/projects"
                id="navLink"
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 pl-3 pr-4 text-white text-gray-900 rounded  md:text-white md:p-0 text-xl"
                to="/contact"
                id="navLink"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
