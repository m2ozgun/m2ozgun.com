import { Link } from "gatsby"
import * as React from "react"

interface MenuProps {
  onToggleTheme: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 ml-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
)

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 ml-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
)

const ToggleIcon = () => {
  const theme =
    typeof window !== "undefined" &&
    (window.localStorage.getItem("theme") || "dark")
  return theme === "dark" ? <MoonIcon /> : <SunIcon />
}

const Menu = ({ onToggleTheme }: MenuProps) => (
  <>
    <div className="block">
      <ul className="flex grow-0 shrink-0 items-center justify-start max-w-screen-lg my-0 mx-auto list-none">
        <li className="m-0 mr-3">
          <Link
            to="/blog"
            className="no-underline text-gray-900 dark:text-white mr-3"
          >
            <span>Blog</span>
          </Link>
        </li>
      </ul>
    </div>
    <button onClick={onToggleTheme} type="button">
      <ToggleIcon />
    </button>
  </>
)

export default Menu
