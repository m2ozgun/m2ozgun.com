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

const Post = ({
  title,
  hideMetadata,
  date,
  slug,
  html = "",
  excerpt = "",
}: PostProps) => (
  <>
    <div className="text-gray-900 dark:text-white mb-2">
      <div>
        {excerpt ? (
          <Link
            to={slug}
            className="no-underline text-gray-900 dark:text-white"
          >
            <h1 className="mt-8 mb-2">{title}</h1>
          </Link>
        ) : (
          <h1 className="mt-8 mb-2">{title}</h1>
        )}
        {!hideMetadata ? <p className="mt-0 mb-8">{date}</p> : null}
        <>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: excerpt ? excerpt : html }}
          />
        </>

        {excerpt && (
          <button className="p-0 my-5 font-bold">
            <Link
              to={slug}
              className="no-underline text-gray-900 dark:text-white"
            >
              Read more -{">"}
            </Link>
          </button>
        )}
      </div>
    </div>
  </>
)

export default Post
