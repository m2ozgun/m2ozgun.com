import { Link } from "gatsby"
import * as React from "react"

interface PostProps {
  title: string
  date: string
  hideMetadata: boolean | null
  html?: string
  excerpt?: string
  slug: string
}

const Post = ({ title, date, slug, html = "", excerpt = "" }: PostProps) => (
  <>
    <div className="text-gray-900 dark:text-white mb-12 mt-6">
      <div>
        <p className="text-grey-dark uppercase font-semibold text-xs tracking-wide mb-1">
          {date}
        </p>
        {excerpt ? (
          <div>
            <Link
              to={slug}
              className="no-underline text-gray-900 dark:text-white font-bold hover:underline"
            >
              <h1 className="mt-0 mb-2 text-xl">{title}</h1>
            </Link>
          </div>
        ) : (
          <h1 className="mt-2 mb-2">{title}</h1>
        )}
        <>
          <div
            className="blog-post-content text-grey-darkest text-base leading-normal mt-0 pt-0"
            dangerouslySetInnerHTML={{ __html: excerpt ? excerpt : html }}
          />
        </>

        {excerpt && (
          <button className="p-0 my-3 font-bold">
            <Link
              to={slug}
              className="no-underline text-gray-900 dark:text-white text-sm hover:underline"
            >
              Read this article -{">"}
            </Link>
          </button>
        )}
      </div>
    </div>
  </>
)

export default Post
