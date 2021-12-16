import React, { useState } from "react"
import { Link } from "gatsby"
import Menu from "./menu"
import Helmet from "react-helmet"

interface HeaderProps {
  siteTitle: string
}

const Header = ({ siteTitle = "" }: HeaderProps) => {
  const defaultThemeState =
    (typeof window !== "undefined" && window.localStorage.getItem("theme")) ||
    "dark"
  const [userTheme, changeTheme] = useState(defaultThemeState)

  const onToggleTheme = () => {
    const oppositeTheme = userTheme === "light" ? "dark" : "light"
    console.log("oppositeTheme", oppositeTheme)
    typeof window !== "undefined" &&
      window.localStorage.setItem("theme", oppositeTheme)
    changeTheme(oppositeTheme)
    console.log(window.localStorage.getItem("theme"))
  }
  return (
    <>
      <Helmet>
        <html className={userTheme === "dark" ? "dark" : ""} />
      </Helmet>

      <header className="bg-neutral-100 dark:bg-neutral-900 flex items-center justify-between relative p-3 font-semibold">
        <div className="container max-w-screen-md flex items-center justify-between my-0 mx-auto">
          <Link to="/" className="no-underline text-gray-900 dark:text-white">
            <span className="text-xl">{siteTitle}</span>
          </Link>
          <span className="flex relative text-neutral-900 dark:text-white">
            <Menu onToggleTheme={onToggleTheme} />
          </span>
        </div>
      </header>
    </>
  )
}

export default Header
