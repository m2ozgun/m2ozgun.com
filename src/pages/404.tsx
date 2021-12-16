import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1 className="text-gray-900 dark:text-white">404: Not Found</h1>
    <p className="text-gray-900 dark:text-white">It's sad.</p>
  </Layout>
)

export default NotFoundPage
