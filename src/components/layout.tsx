import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

interface LayoutProps {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const siteTitle: string = data.site.siteMetadata?.title || `Title`

  return (
    <>
      <Header siteTitle={siteTitle} />
      <div className="bg-white dark:bg-neutral-800 p-3 font-semibold">
        <div className="container max-w-screen-md m-auto">
          <div className="flex min-h-screen">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
